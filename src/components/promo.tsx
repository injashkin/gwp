import { graphql } from "gatsby"
import * as React from "react"
import {
  Box,
  ButtonList,
  Container,
  Flex,
  Heading,
  HomepageLink,
  Section,
  Text,
} from "./ui"

export interface PromoProps {
  heading?: string
  text?: string
  links?: HomepageLink[]
}

export default function Promo(props: PromoProps) {
  return (
    <Section>
      <Container>
        <Box border padding={4}>
          <Heading>{props.heading}</Heading>
          <Flex responsive>
            <Text>{props.text}</Text>
            {props.links && <ButtonList links={props.links}></ButtonList>}
          </Flex>
        </Box>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepagePromoContent on HomepagePromo {
    id
    heading
    text
    links {
      id
      href
      text
    }
  }
`
