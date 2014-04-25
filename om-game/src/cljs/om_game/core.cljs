(ns om-game.core
  (:require [cljs.reader :as reader]
            [goog.events :as events]
            [goog.dom :as gdom]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :as async :refer [timeout chan close! <!]])
  (:require-macros
            [cljs.core.async.macros :as m :refer [go]])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))

(enable-console-print!)
(println "Hello world!")

(def init-hero
  {:cx 50 :cy (+ 55 (rand-int 475)) :r 15
   :style #js {:stroke "black" :stroke-width "0" :fill "grey" }})
(defn init-rect-up [] {:clicked? [false] :x (+ 100 (rand-int 750)) :y 10 :power 0})
(defn init-rect-down [] {:clicked? [false] :x (+ 100 (rand-int 750)) :y 545 :power 0})
(defn make-rects [fn] (->> (repeatedly fn)
                      (take (+ 1 (rand-int 4)))
                      vec))
(def exit-line
  (let [y1 (rand-int 450)
        y2 (+ y1 (max 50 (rand-int 225)))]
    #js {:x1 999 :y1 y1 :x2 999 :y2 y2
         :style #js {:stroke "black" :stroke-width 2}}))
(def app-state (atom {:hero init-hero
                      :exit exit-line
                      :rects-up (make-rects init-rect-up)
                      :rects-down (make-rects init-rect-down)}))

(defn circle-view [{:keys [cx cy r style]}]
  (reify
  om/IRender
  (render [_]
    (dom/circle #js {:cx cx :cy cy :r r :style style}))))

(defn rect-view [{:keys [x y clicked? power] :as cursor}]
  (reify
  om/IRender
    (render [_]
      (letfn [(drag [state]
                 (fn [e]
                   (. e -stopPropagation)
                   (. e -preventDefault)
                   (om/transact! clicked? [0] (constantly state))))]
        (dom/g nil
          (dom/rect #js {:x x :y y :width 50 :height 70
                         :stroke "black" :stroke-width "3"
                         :fill "white"
                         :onMouseDown (drag true)
                         :onMouseUp (drag false)
                         :onMouseOver (drag false)
                         :onMouseMove
                           (fn [e]
                             (. e -stopPropagation)
                             (. e -preventDefault)
                             (om/transact! cursor []
                               #(let [clicked?' (first (:clicked? %))
                                      new-x (if clicked?'
                                                (- (.. e -nativeEvent -x) 30)
                                                (:x %))]
                                  {:x new-x :y y :clicked? [clicked?'] :power power})))})
          (dom/text #js {:x (+ x 5) :y (+ y 15) } power))))))

(defn exit-view [line _]
  (reify
  om/IRender
    (render [_]
      (dom/line line))))

(defn app-view [app owner]
  (reify
    om/IRender
    (render [_]
      (dom/h2 nil "Top secret")
      (dom/input nil "Top secret")
        (apply dom/svg #js {:width 1000 :height 625 :border 0 :style #js {:border 0}}
          (om/build circle-view (:hero app))
          (om/build exit-view (:exit app))
          (concat
            (om/build-all rect-view (:rects-down app))
            (om/build-all rect-view (:rects-up app)))))))

(defn motion [hero [x y]]
  (let [h1 (update-in hero [:cx] + x)]
    (update-in h1 [:cy] + y)))

(defn points [ranges]
  (letfn [(points-from-range [[prev cur]]
    (let [distance (- (:x cur) (:x prev))
          y (if (:up prev) (- (:power prev)) (:power prev))]
      (cons [(rem distance 10) y]
            (repeat (quot distance 10) [10 y]))))]
    (mapcat points-from-range ranges)))

(defn run [hero rects-up rects-down]
  (let [ups (map #(assoc % :up true) (om/value rects-up))
        sorted-ranges (sort-by :x (concat ups (om/value rects-down)))
        bounded-ranges (cons {:x 50 :power 0} (concat sorted-ranges [{:x 999 :power 0}]))
        adjacent-ranges (map vector bounded-ranges (rest bounded-ranges))]
    (go (doseq [p (points adjacent-ranges)]
        (om/transact! hero [] #(motion % p))
        (<! (timeout 20))))))

(defn play-btn [{:keys [hero rects-down rects-up] :as app} _]
  (reify
    om/IRender
    (render [_]
      (dom/button #js {:onClick #(run hero rects-down rects-up)} "Play"))))

(defn reset-btn [app _]
  (reify
    om/IRender
    (render [_]
      (dom/button
        #js {:onClick
          (fn [_] (om/transact! app [] #(assoc % :hero init-hero)))}
        "Return ball"))))

(defn make-power-btn [op name]
  (fn [{:keys [rects-up rects-down]}]
    (reify
      om/IRender
      (render [_]
        (dom/button
          #js {:onClick
            (fn [_]
              (letfn [(power-inc [data]
                        (om/transact! data []
                          (fn [rects] (mapv #(update-in % [:power] op) rects))))]
                (power-inc rects-up)
                (power-inc rects-down)))}
          name)))))

(defn plus-btn [{:keys [rects-up rects-down]}]
  (reify
    om/IRender
    (render [_]
      (dom/button
        #js {:onClick
          (fn [_]
            (letfn [(power-inc [data]
                      (om/transact! data []
                        (fn [rects] (mapv #(update-in % [:power] inc) rects))))]
              (power-inc rects-up)
              (power-inc rects-down)))}
        "Inc power"))))

(defn play-view [app _]
  (reify
    om/IRender
    (render [_]
      (dom/span nil
        (om/build play-btn app)
        (om/build (make-power-btn inc "Inc power") app)
        (om/build (make-power-btn dec "Dec power") app)
        (dom/span #js {:style #js {:padding-left 15}} " ")
        (om/build reset-btn app)))))

(om/root play-view app-state
  {:target (gdom/getElement "buttons")})

(om/root app-view app-state
  {:target (gdom/getElement "game")})
