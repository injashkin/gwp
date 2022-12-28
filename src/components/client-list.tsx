import * as React from "react"
import { graphql } from "gatsby"
import {
  Box,
  Container,
  FixedBGI,
  Heading,
  HomepageImage,
  Section,
  Text,
} from "./ui"

export interface ClientListProps {
  heading?: string
  text?: string
  image?: HomepageImage
}

export default function ClientList(props: ClientListProps) {
  const url = props.image ? props.image.url : "http://2166.wp.shabloner.ru/themes/shabloner_2166/files/ct_block_102803_image.jpg"
  return (
    <Section>
      <FixedBGI background="primary" url={url}>
        <Container>
          <Box center>
            <Heading>{props.heading}</Heading>
            <Text>{props.text}</Text>
          </Box>
        </Container>
      </FixedBGI>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageClientListContent on HomepageClientList {
    id
    heading
    text
    image {
      url
    }
  }
`
