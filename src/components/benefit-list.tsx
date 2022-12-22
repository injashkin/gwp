import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  FlexList,
  Box,
  Icon,
  Heading,
  Text,
  Space,
  HomepageImage,
} from "./ui"
import { backImage, opasity } from "./benefit-list.css"
import * as I from "react-feather"

interface BenefitProps {
  id: string
  image?: HomepageImage
  icon: JSX.Element
  heading: string
  text: string
}

function Benefit(props: BenefitProps) {

  return (
    <Box as="li" width="third" padding={4} paddingY={3}>
      {props.image && (
        <Icon
          alt={props.image.alt}
          image={props.image.gatsbyImageData}
          size="small"
        />
      )}
      <I.Mail />
      {/*props.icon*/}
      <Space size={2} />
      <Heading variant="subheadSmall">{props.heading}</Heading>
      <Text>{props.text}</Text>
    </Box>
  )
}

export interface BenefitListProps {
  heading?: string
  text?: string
  content: BenefitProps[]
}

export default function BenefitList(props: BenefitListProps) {
  return (
    <Section className={backImage} background="primary">
      <Box  className={opasity}>
        <Container>
          <Box center>
            {props.heading && <Heading>{props.heading}</Heading>}
            {props.text && <Text variant="lead">{props.text}</Text>}
          </Box>
          <Space size={3} />
          <FlexList gutter={3} variant="start" responsive wrap>
            {props.content.map((benefit) => (
              <Benefit key={benefit.id} {...benefit} />
            ))}
          </FlexList>
        </Container>
      </Box>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageBenefitListContent on HomepageBenefitList {
    id
    heading
    text
    content {
      id
      icon
      heading
      text
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
