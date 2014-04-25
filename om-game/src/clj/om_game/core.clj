(ns om-game.core
  (:require [ring.util.response :refer [file-response]]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.edn :refer [wrap-edn-params]]
            [compojure.core :refer [defroutes GET]]
            [compojure.route :as route]))

(defn index []
  (file-response "public/html/index.html" {:root "resources"}))

(defroutes routes
  (GET "/" [] (index))
  (route/files "/" {:root "resources/public"}))

(def app
  (-> routes
      wrap-edn-params))

(defonce server
  (run-jetty #'app {:port 8080 :join? false}))
