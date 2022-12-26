import { graphql } from "gatsby";
import * as React from "react";
import { Heading, Section, Text } from "./ui";

export interface PromoProps {
  heading?: string
  text?: string
}

export default function Promo(props: PromoProps) {
  return (
    <Section>
      <Heading>{props.heading}</Heading>
      <Text>{props.text}</Text>
    </Section>
  )
}

export const query = graphql `
  fragment HomepagePromoContent on HomepagePromo {
    id
    heading
    text
  }
`