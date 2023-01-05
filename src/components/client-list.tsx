import * as React from "react"
import { graphql } from "gatsby"
import {
  Box,
  Container,
  FixedBGI,
  FlexList,
  Heading,
  HomepageImage,
  HomepageLink,
  Section,
  Text,
} from "./ui"
import { GatsbyImage } from "gatsby-plugin-image"
import { opasity } from "./ui.css"

interface ClientProps {
  id: string
  image: HomepageImage
  links: HomepageLink[]
}

export function Client(props: ClientProps) {
  return (
    <li>
      <Box>
        {props.image && (
          <GatsbyImage
            alt={props.image.alt}
            image={props.image.gatsbyImageData}
          />
        )}
      </Box>
    </li>
  )
}

export interface ClientListProps {
  heading?: string
  text?: string
  image?: HomepageImage
  content: ClientProps[]
}

export default function ClientList(props: ClientListProps) {
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
          <FlexList gap={5}>
            {props.content.map((client) => (
              <Client key={client.id} {...client} />
            ))}
          </FlexList>
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
