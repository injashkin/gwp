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
  relative,
  sliderBottom,
  sliderTop,
} from "./testimonal-list.css"

interface TestimonialProps {
  id: string
  avatar: HomepageImage
  quote: string
  source: string
}

function Testimonial(props: TestimonialProps) {
  return (
    <Box center>
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

export interface TestimonialListProps {
  kicker?: string
  heading: string
  content: TestimonialProps[]
}

export default function TestimonialList(props: TestimonialListProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => (prevCount < 3 ? prevCount + 1 : prevCount = 0 ))
    }, 5000)
  }, [])

  return (
    <Section>
      <Container className={relative}>
        <Box center>
          <Heading>
            {props.kicker && <Kicker>{props.kicker}</Kicker>}
            {props.heading}
          </Heading>
        </Box>
        <Box center className={height}>
          {props.content.map((testimonial, index) => {
            const classes = index === count ? sliderTop : sliderBottom
            return (
              <Box
                as="div"
                key={testimonial.id + index}
                padding={3}
                border
                className={classes}
              >
                <Testimonial {...testimonial} />
              </Box>
            )
          })}
        </Box>
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
