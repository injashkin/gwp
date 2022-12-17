import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Container,
  Section,
  FlexList,
  Text,
  Kicker,
  Heading,
  Flex,
  Box,
  Icon,
  ButtonList,
  Nudge,
  HomepageImage,
  HomepageLink,
  Parallax,
} from "./ui"

interface StatProps {
  id: string
  value: string
  label: string
}

function Stat(props) {
  return (
    <Box>
      <Text variant="stat">{props.value}</Text>
      <Text variant="statLabel">{props.label}</Text>
    </Box>
  )
}

export interface StatListProps {
  icon?: HomepageImage
  kicker?: string
  heading: string
  text?: string
  content: StatProps[]
  links: HomepageLink[]
  image?: HomepageImage
}

export default function StatList(props: StatListProps) {
  return (
    <div>
      <Container width="fullbleed">
        <Section padding={5} radius="large">
          <Flex responsive variant="end">
            <Box width="full">
              {props.icon && (
                <Icon alt={props.icon.alt} image={props.icon.gatsbyImageData} />
              )}
              <Heading>
                {props.kicker && <Kicker>{props.kicker}</Kicker>}
                {props.heading}
              </Heading>
              {props.text && <Text variant="lead">{props.text}</Text>}
              <FlexList wrap gap={4}>
                {props.content.map((stat) => (
                  <li key={stat.id}>
                    <Stat {...stat} />
                  </li>
                ))}
              </FlexList>
              <ButtonList links={props.links} reversed />
              <Box>{"sd"}</Box>
            </Box>
          </Flex>
        </Section>
      </Container>
      <Box width="full">
        {props.image && (
          <Nudge right={5} bottom={5}>
            <Parallax
              alt={props.image.alt}
              image={props.image.gatsbyImageData}
              text={"Паралакс"}
            />
          </Nudge>
        )}
      </Box>
    </div>
  )
}

export const query = graphql`
  fragment HomepageStatListContent on HomepageStatList {
    id
    kicker
    heading
    text
    image {
      id
      alt
      gatsbyImageData
    }
    icon {
      id
      alt
      gatsbyImageData
    }
    content {
      id
      value
      label
      heading
    }
    links {
      id
      href
      text
    }
  }
`
