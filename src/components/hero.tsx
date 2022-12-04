import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import {
  Box,
  ButtonList,
  Container,
  Flex,
  Heading,
  HomepageImage,
  HomepageLink,
  Kicker,
  Section,
  Subhead,
  Text,
} from "./ui"

export interface HeroProps {
  image?: HomepageImage
  kicker?: string
  h1: string
  subhead: string
  text: string
  links: HomepageLink[]
}

export default function Hero(props: HeroProps) {
  return (
    <div>
      {/* <Section paddingY={0}> */}
      {/* <Container> */}
      {/* <Flex gap={4} variant="end"> */}
      {/* <Box width="full"> */}
      <div style={{ display: "grid" }}>
        {props.image && (
          <GatsbyImage
            alt={props.image.alt}
            image={getImage(props.image.gatsbyImageData)}
            style={{
              gridArea: "1/1",
              maxHeight: 700,
            }}
          />
        )}
        <div
          style={{
            // Используя одну и ту же область сетки элементы укладываются друг на друга
            gridArea: "1/1",
            position: "relative",

            placeItems: "end center",
            display: "grid",
            gridTemplateRows: "38% 1fr 1fr 1fr 25%",
          }}
        >
          <div></div>
          <Heading as="h1">
            {props.kicker && <Kicker>{props.kicker}</Kicker>}
            {props.h1}
          </Heading>
          {/* <Subhead as="h2">{props.subhead}</Subhead> */}
          <Text as="p">{props.text}</Text>

          <ButtonList links={props.links} variant={"center"} />
        </div>
      </div>
      {/* </Box> */}
      {/* </Flex> */}
      {/* </Container> */}
      {/* </Section> */}
    </div>
  )
}

export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    id
    kicker
    h1: heading
    subhead
    text
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
