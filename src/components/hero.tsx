import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import {
  Box,
  ButtonList,
  Heading,
  HomepageImage,
  HomepageLink,
  Kicker,
  Text,
} from "./ui"
import { desktopHeroTopLayer, grid, imageBg } from "./hero.css"

export interface HeroProps {
  image?: HomepageImage
  kicker?: string
  h1: string
  subhead: string
  text: string
  links: HomepageLink[]
  styles?: string
}

export default function Hero({
  image,
  kicker,
  h1,
  subhead,
  text,
  links,
  styles = imageBg.medium,
}: HeroProps) {
  return (
    <div>
      <Box background="primary" className={grid}>
        {image && (
          <GatsbyImage
            alt={image.alt}
            image={getImage(image.gatsbyImageData)}
            className={styles}
          />
        )}
        <Box className={desktopHeroTopLayer}>
          <Box>
            <Heading as="h1" center>
              {kicker && <Kicker>{kicker}</Kicker>}
              {h1}
            </Heading>

            {/* <Subhead as="h2">{props.subhead}</Subhead> */}
            <Text as="p" center>
              {text}
            </Text>

            <ButtonList links={links} variant={"center"} />
          </Box>
        </Box>
      </Box>
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
