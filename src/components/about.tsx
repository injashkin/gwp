import * as React from "react"
import { graphql } from "gatsby"
import {
  Section,
  Container,
  Heading,
  Text,
  Box,
  HomepageLink,
  ButtonList,
} from "./ui"

export interface AboutProps {
  heading?: string
  text?: string
  links?: HomepageLink[]
}

export default function About(props) {
  return (
    <Section>
      <Container>
        <Box center>
          <Heading>{props.heading}</Heading>
          <Text>{props.text}</Text>
          <ButtonList links={props.links}></ButtonList>
        </Box>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageAboutContent on HomepageAbout {
    id
    heading
    text
    links {
      href
      text
    }
  }
`
