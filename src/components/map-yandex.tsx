import * as React from "react"
import { useEffect } from "react"
import { graphql } from "gatsby"
import { map, section } from "./map-yandex.css"
import { Box, Container, Section, Subhead, Text } from "./ui"
import { hr } from "./ui.css"

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

export interface MapYandexProps {
  id: string
  heading?: string
  text?: string
  link: string
}

export default function MapYandex(props: MapYandexProps) {
  useScript(props.link)
  return (
    <Section className={section}>
      <Container>
        <Box center>
          <Subhead>{props.heading}</Subhead>
          <Text>{props.text}</Text>
        </Box>
        <hr className={hr} />
      </Container>

      <div id="map-widget" className={map}></div>
    </Section>
  )
}

export const query = graphql`
  fragment MapYandexContent on MapYandex {
    id
    heading
    text
    link
  }
`
