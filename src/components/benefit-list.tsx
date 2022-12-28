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
  NavLink,
  FixedBGI,
} from "./ui"
import {
  backgroundIcon,
  hoverBenefit,
  colorIcon,
  colorText,
} from "./benefit-list.css"
import * as I from "react-feather"
import { opasity } from "./ui.css"

interface BenefitProps {
  id: string
  image?: HomepageImage
  icon: string
  heading: string
  text: string
  link: { url: string }
}

function Benefit(props: BenefitProps) {
  const FeatherIcon = I[props.icon]
  return (
    <Box as="li" width="third" padding={4} paddingY={3}>
      <NavLink to={props.link.url}>
        <Box center className={hoverBenefit}>
          {props.image && (
            <Icon
              alt={props.image.alt}
              image={props.image.gatsbyImageData}
              size="small"
            />
          )}
          <Box radius="circle" className={backgroundIcon}>
            {props.icon && <FeatherIcon size="42px" color={colorIcon} />}
          </Box>

          <Space size={2} />
          <Heading variant="subheadSmall" className={colorText}>
            {props.heading}
          </Heading>
          <Text className={colorText}>{props.text}</Text>
        </Box>
      </NavLink>
    </Box>
  )
}

export interface BenefitListProps {
  heading?: string
  text?: string
  image?: { url: string }
  content: BenefitProps[]
}

export default function BenefitList(props: BenefitListProps) {
  const url = props.image
    ? props.image.url
    : "http://2166.wp.shabloner.ru/themes/shabloner_2166/files/ct_block_102803_image.jpg"
  return (
    <Section>
      <FixedBGI background="primary" url={url}>
        <Box className={opasity}>
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
      </FixedBGI>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageBenefitListContent on HomepageBenefitList {
    id
    heading
    text
    image {
      url
    }
    content {
      id
      icon
      heading
      text
      link {
        url
      }
    }
  }
`
