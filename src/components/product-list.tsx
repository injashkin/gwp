import * as React from "react"
import { graphql } from "gatsby"
import { heightFull, widthProduct } from "./product-list.css"
import {
  Container,
  Section,
  FlexList,
  Text,
  Kicker,
  Heading,
  Subhead,
  Box,
  Button,
  Icon,
  LinkList,
  HomepageImage,
  HomepageLink,
  HomeLink,
} from "./ui"

import { GatsbyImage } from "gatsby-plugin-image"

interface ProductProps {
  id: string
  image: HomepageImage
  heading: string
  text: string
  link: HomeLink
  links: HomepageLink[]
}

function Product(props: ProductProps) {
  return (
    <Box border center radius="button" className={heightFull}>
      {props.image && (
        // <Icon alt={props.image.alt} image={props.image.gatsbyImageData} size="large" />
        <GatsbyImage
          alt={props.image.alt}
          image={props.image.gatsbyImageData}
        />
      )}
      <Box padding={3}>
        <Subhead>{props.heading}</Subhead>
        {props.text && <Text>{props.text}</Text>}
        <LinkList links={props.links} />
        <Button href={props.link.url}>Подробности</Button>
      </Box>
    </Box>
  )
}

export interface ProductListProps {
  kicker?: string
  heading: string
  text?: string
  content: ProductProps[]
}

export default function ProductList(props: ProductListProps) {
  return (
    <Section>
      <Container>
        {props.heading && (
          <Box center paddingY={4}>
            <Heading>
              {props.kicker && <Kicker>{props.kicker}</Kicker>}
              {props.heading}
            </Heading>

            {props.text && <Text>{props.text}</Text>}
          </Box>
        )}
          <FlexList gap={5} variant="stretchCenter">
            {props.content.map((product) => (
              <li key={product.id} className={widthProduct}>
                <Product {...product} />
              </li>
            ))}
          </FlexList>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageProductListContent on HomepageProductList {
    id
    kicker
    heading
    text
    content {
      id
      heading
      text
      link {
        url
        title
      }
      image {
        alt
        id
        gatsbyImageData
      }
      links {
        id
        href
        text
      }
    }
  }
`
