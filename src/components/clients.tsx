import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  FixedBGI,
  Heading,
  HomepageImage,
  Section,
  Text,
} from "./ui"

export interface AboutProps {
  heading?: string
  text?: string
  image?: HomepageImage
}

export default function Clients(props: AboutProps) {
  return (
    <Section>
      <FixedBGI background="primary" url={props.image.url}>
        <Container>
          <Heading>{props.heading}</Heading>
          <Text>{props.text}</Text>
        </Container>
      </FixedBGI>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageClientsContent on HomepageClients {
    id
    heading
    text
    image {
      url
    }
  }
`
