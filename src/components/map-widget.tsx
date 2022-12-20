import * as React from "react"
import { useEffect } from "react"
import { map } from "./map-widget.css"

const urlMap =
  "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9caefe0a5c097d47b924ad882d6a2598394776253fa3eb3e9321b735a0996143&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=true"

const useScript = (url: string) => {
  useEffect(() => {
    const element = document.getElementById("map-widget")
    const script = document.createElement("script")

    script.src = url
    script.async = true
    script.type = "text/javascript"

    element.appendChild(script)

    return () => {
      element.removeChild(script)
    }
  }, [url])
}

export default function MapWidget() {
  useScript(urlMap)
  return <div id="map-widget" className={map}></div>
}
