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

;; state of program
(def init-hero
  {:cx 50 :cy (+ 55 (rand-int 475)) :r 15
   :style #js {:stroke "black" :stroke-width "0" :fill "grey" }})
(defn init-rect-up []
  {:clicked? [false] :x (+ 100 (rand-int 750)) :y 10 :power 0})
(defn init-rect-down []
  {:clicked? [false] :x (+ 100 (rand-int 750)) :y 545 :power 0})
(defn make-rects [fn] (->> (repeatedly fn)
                      (take (+ 1 (rand-int 4)))
                      vec))
(defn line [x color]
  (let [y1 (+ 60 (rand-int 225))
        y2 (+ 60 y1 (rand-int 225))]
    #js {:x1 x :y1 y1 :x2 x :y2 y2
         :style #js {:stroke color :stroke-width 2}}))

(def guards
  (let [x1 (+ 100 (rand-int 400))
        x2 (+ x1 (rand-int 400))]
  [(line x1 "blue") (line x2 "blue")]))

(def app-state (atom {:hero init-hero
                      :exit (line 999 "black")
                      :message [""]
                      :guards guards
                      :rects-up (make-rects init-rect-up)
                      :rects-down (make-rects init-rect-down)}))

;; views
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

(defn line-view [line _]
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
          (om/build line-view (:exit app))
          (om/build line-view (first (:guards app)))
          (om/build line-view (second (:guards app)))
          (concat
            (om/build-all rect-view (:rects-down app))
            (om/build-all rect-view (:rects-up app)))))))


;; run's auxiliary functions
(defn motion [hero [x y]]
  (let [h1 (update-in hero [:cx] + x)]
    (update-in h1 [:cy] + y)))

(defn points [ranges]
  (letfn [(points-from-range [[prev cur]]
    (let [distance (- (:x cur) (:x prev))
          y (if (:up prev) (:power prev) (- (:power prev)))]
      (cons [(rem distance 10) y]
            (repeat (quot distance 10) [10 y]))))]
    (mapcat points-from-range ranges)))

(defn win? [hero y-shift exit message pred]
  (let [y-up (- (:cy hero) (:r hero))
        y-down (+ (:cy hero) (:r hero))]
    (om/transact! message []
      (fn [mess]
        (if (and (or (< (.-y1 exit) (+ y-up y-shift) (.-y2 exit))
                     (< (.-y1 exit) (+ y-down y-shift) (.-y2 exit)))
                 pred)
          (assoc mess 0 "You win")
          (assoc mess 0 "plz try once more"))))))

(defn guard? [hero guard y-shift]
  (let [ y-up (- (:cy hero) (:r hero))
        y-down (+ (:cy hero) (:r hero))]
    (or (< (.-y1 guard) (+ y-up y-shift) (.-y2 guard))
        (< (.-y1 guard) (+ y-down y-shift) (.-y2 guard)))))

(defn check-point [path]
  (second (apply map + path)))

(defn find-path [range]
  (letfn [(adjacent-ranges [r] (map vector r (rest r)))]
    (-> range adjacent-ranges points)))

(defn run! [hero rects-up rects-down guards exit message]
  (let [ups (map #(assoc % :up true) (om/value rects-up))
        bounded-vals [{:x 999 :power 0} {:x 50 :power 0}]
        [g1 g2] (om/value guards)
        [guard-val1 guard-val2] [{:x (.-x1 g1) :power 0} {:x (.-x1 g2) :power 0}]
        sorted-ranges
          (sort-by :x (concat ups (om/value rects-down) bounded-vals))
        selector #(cond
                    (< (:x %) (.-x1 g1) (.-x1 g2)) :left
                    (< (.-x1 g1) (:x %) (.-x1 g2)) :middle
                    :else :right)
        {:keys [left middle right] :as m} (group-by selector sorted-ranges)
        left' (concat left [guard-val1])
        middle' (concat [guard-val1] middle [guard-val2])
        right' (concat [guard-val2] right)
        [lpath mpath rpath] (map find-path [left' middle' right'])
        [guard-point1 guard-point2 end-point] (map check-point [lpath mpath rpath])
        stop2? (guard? (om/value hero) g2 guard-point2)
        stop1? (guard? (om/value hero) g1 guard-point1)
        after-guard-path2 (if-not stop2? rpath [])
        after-guards-path (if-not stop1? (concat mpath after-guard-path2) [])]
    (go
      (doseq [p (concat lpath after-guards-path)]
        (om/transact! hero [] #(motion % p))
        (<! (timeout 15)))
      (win? (om/value hero) end-point (om/value exit) message (not (or stop1? stop2?))))))

;; dashboard's views
(defn play-btn [{:keys [hero rects-down rects-up message exit guards] :as app} _]
  (reify
    om/IRender
    (render [_]
      (dom/button
        #js {:onClick (fn [_] (run! hero rects-up rects-down guards exit message))}
        "Play"))))

(defn reset-btn [app _]
  (reify
    om/IRender
    (render [_]
      (dom/button
        #js {:onClick
          (fn [_]
            (om/transact! app [] #(assoc % :hero init-hero))
            (om/transact! app [] #(assoc % :message [""])))}
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

(defn message-view [mess]
  (reify
    om/IRender
    (render [_]
      (dom/span #js {:style #js {:padding-left 15}} (first mess)))))

(defn dashboard-view [app _]
  (reify
    om/IRender
    (render [_]
      (dom/span nil
        (om/build play-btn app)
        (om/build (make-power-btn inc "Inc power") app)
        (om/build (make-power-btn dec "Dec power") app)
        (dom/span #js {:style #js {:padding-left 15}} "")
        (om/build reset-btn app)
        (om/build message-view (:message app))))))

(om/root dashboard-view app-state
  {:target (gdom/getElement "buttons")})

(om/root app-view app-state
  {:target (gdom/getElement "game")})
