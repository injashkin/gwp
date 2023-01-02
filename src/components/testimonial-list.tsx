import * as React from "react"
import { useEffect, useState } from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  Heading,
  Kicker,
  Flex,
  Box,
  FlexList,
  Blockquote,
  Text,
  Avatar,
  HomepageImage,
} from "./ui"
import {
  height,
  pointerStyle,
  sliderBottom,
  sliderTop,
} from "./testimonal-list.css"

interface TestimonialProps {
  id: string
  avatar: HomepageImage
  quote: string
  source: string
  index: number
  count: number
}

function Testimonial(props: TestimonialProps) {
  const classes = props.index === props.count ? sliderTop : sliderBottom
  return (
    <Box border center className={classes}>
      {props.avatar && (
        <Avatar alt={props.avatar.alt} image={props.avatar.gatsbyImageData} />
      )}
      <Blockquote>
        <Text as="p" variant="lead">
          {props.quote}
        </Text>
        <figcaption>
          <Text as="cite" bold variant="caps">
            {props.source}
          </Text>
        </figcaption>
      </Blockquote>
    </Box>
  )
}

interface PointerProps {
  index: number
  count: number
}

function Pointer(props: PointerProps) {
  const classes = props.index === props.count ? pointerStyle.active : pointerStyle.noActive
  return <Box className={classes}></Box>
}

export interface TestimonialListProps {
  kicker?: string
  heading: string
  content: TestimonialProps[]
}

export default function TestimonialList(props: TestimonialListProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => (prevCount < 3 ? prevCount + 1 : (prevCount = 0)))
    }, 5000)
  }, [])

  return (
    <Section>
      <Container>
        <Box center>
          <Heading>
            {props.kicker && <Kicker>{props.kicker}</Kicker>}
            {props.heading}
          </Heading>
        </Box>
        <Box center className={height}>
          {props.content.map((testimonial, index) => {
            testimonial.index = index
            testimonial.count = count
            return (
              <Box key={testimonial.id + index}>
                <Testimonial {...testimonial} />
              </Box>
            )
          })}
        </Box>
        <Flex variant="center">
          {props.content.map((pointer, index) => {
            pointer.index = index
            pointer.count = count
            return <Pointer key={pointer.id + index} {...pointer}></Pointer>
          })}
        </Flex>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageTestimonialListContent on HomepageTestimonialList {
    id
    kicker
    heading
    content {
      id
      quote
      source
      avatar {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
