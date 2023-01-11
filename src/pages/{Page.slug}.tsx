import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Box, Heading } from "../components/ui"
import SEOHead from "../components/head"
import Hero, { HeroProps } from "../components/hero"
import {imageBg } from "../components/hero.css"

interface PageProps {
  data: {
    page: {
      id: string
      title: string
      slug: string
      description: string
      image: { id: string; url: string }
      html: string
    }
    homepageHero: HeroProps
  }
}

export default function Page(props: PageProps) {
  const { page, homepageHero } = props.data

  return (
    <Layout>
      <Hero styles={imageBg.small} {...homepageHero}></Hero>
      <Box paddingY={5}>
        <Container width="narrow">
          <Heading as="h1">{page.title}</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: page.html,
            }}
          />
        </Container>
      </Box>
    </Layout>
  )
}

export const Head = (props: PageProps) => {
  const { page } = props.data
  return <SEOHead {...page} />
}

export const query = graphql`
  query PageContent($id: String!) {
    page(id: { eq: $id }) {
      id
      title
      slug
      description
      image {
        id
        url
      }
      html
    }
    homepageHero {
      id
      kicker
      h1: heading
      subhead
      text
      links {
        id
        href
        text
      }
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
