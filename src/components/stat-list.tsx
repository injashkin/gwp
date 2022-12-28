import * as React from "react"
import { graphql } from "gatsby"
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
  HomepageImage,
  HomepageLink,
  FixedBGI,
} from "./ui"
import { opasity } from "./ui.css"

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
  const url = props.image
    ? props.image.url
    : "http://2166.wp.shabloner.ru/themes/shabloner_2166/files/ct_block_102803_image.jpg"
  return (
    <>
      <Section>
        <FixedBGI background="primary" url={url}>
        <Box className={opasity}>
          <Container>
            <Flex responsive variant="end">
              <Box width="full" center>
                {props.icon && (
                  <Icon
                    alt={props.icon.alt}
                    image={props.icon.gatsbyImageData}
                  />
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
              </Box>
            </Flex>
          </Container>
          </Box>
        </FixedBGI>
      </Section>

      {/*<Box width="full">
        {props.image && (
          <Nudge right={5} bottom={5}>
            <Parallax
              alt={props.image.alt}
              image={props.image.gatsbyImageData}
              text={"Паралакс"}
            />
          </Nudge>
        )}
        </Box>*/}
    </>
  )
}

export const query = graphql`
  fragment HomepageStatListContent on HomepageStatList {
    id
    kicker
    heading
    text
    image {
      url
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
