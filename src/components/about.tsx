import * as React from "react"
import { graphql } from "gatsby"
import { Section, Container, Heading, Text, Box } from "./ui"

export default function About(props) {
  return (
    <Section>
      <Container>
        <Box center>
          <Heading>{props.heading}</Heading>
          <Text>{props.text}</Text>
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
  }
`
