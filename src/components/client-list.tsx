import * as React from "react"
import { graphql } from "gatsby"
import {
  Box,
  Container,
  FixedBGI,
  Flex,
  Heading,
  HomepageImage,
  HomepageLink,
  Text,
} from "./ui"
import { GatsbyImage } from "gatsby-plugin-image"
import { hr, opasity } from "./ui.css"
import { clientItem, dot, slide, visible } from "./client-list.css"
import { useState } from "react"

interface ClientProps {
  id: string
  image: HomepageImage
  links: HomepageLink[]
}

export function Client(props: ClientProps) {
  return (
    <Box className={clientItem}>
      {props.image && (
        <GatsbyImage
          alt={props.image.alt}
          image={props.image.gatsbyImageData}
        />
      )}
    </Box>
  )
}

export interface ClientListProps {
  heading?: string
  text?: string
  image?: HomepageImage
  content: ClientProps[]
}

export default function ClientList(props: ClientListProps) {
  const [dot1, setDot1] = useState(dot.active);
  const [dot2, setDot2] = useState(dot.passive);
  const [currentSlide, setCurrentSlide] = useState(slide.one);

  function selectSlide1() {
    setDot1(dot.active)
    setDot2(dot.passive)
    setCurrentSlide(slide.one)
  }

  function selectSlide2() {
    setDot2(dot.active)
    setDot1(dot.passive)
    setCurrentSlide(slide.two)
  }

  const url = props.image
    ? props.image.url
    : "http://2166.wp.shabloner.ru/themes/shabloner_2166/files/ct_block_102803_image.jpg"
  return (
    <FixedBGI as="section" background="primary" url={url}>
      <Box className={opasity}>
        <Container>
          <Box center>
            {props.heading && <Heading>{props.heading}</Heading>}
            {props.text && <Text>{props.text}</Text>}
          </Box>
          <hr className={hr} />
          <Box className={visible}>
            <Box className={currentSlide}>
              {props.content.map((client) => (
                <Client key={client.id} {...client} />
              ))}
            </Box>
          </Box>
            <Flex variant="center">
              <div onClick={selectSlide1} className={dot1}></div>
              <div onClick={selectSlide2} className={dot2}></div>
            </Flex>
        </Container>
      </Box>
    </FixedBGI>
  )
}

export const query = graphql`
  fragment HomepageClientListContent on HomepageClientList {
    id
    heading
    text
    image {
      url
      alt
    }
    content {
      id
      image {
        id
        url
        gatsbyImageData
        alt
      }
    }
  }
`
