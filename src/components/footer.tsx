import * as React from "react"
import {
  Twitter,
  Twitch,
  Instagram,
  Facebook,
  Youtube,
  GitHub,
  Phone,
  MapPin,
  Mail,
} from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Box,
  Space,
  NavLink,
  Text,
  IconLink,
  VisuallyHidden,
  Subhead,
} from "./ui"
import BrandLogo from "./brand-logo"
import { underline } from "./footer.css"
import Feedback from "./feedback"
import { graphql } from "gatsby"
import Contacts from "./contacts"

const socialMedia = {
  TWITTER: {
    url: "https://twitter.com",
    name: "Twitter",
    icon: <Twitter />,
  },
  INSTAGRAM: {
    url: "https://instagram.com",
    name: "Instagram",
    icon: <Instagram />,
  },
  FACEBOOK: {
    url: "https://facebook.com",
    name: "Facebook",
    icon: <Facebook />,
  },
  YOUTUBE: {
    url: "https://youtube.com",
    name: "YouTube",
    icon: <Youtube />,
  },
  GITHUB: {
    url: "https://github.com",
    name: "GitHub",
    icon: <GitHub />,
  },
  TWITCH: {
    url: "https://twitch.tv",
    name: "Twitch",
    icon: <Twitch />,
  },
}

const getSocialURL = ({ service, username }) => {
  const domain = socialMedia[service]?.url
  if (!domain) return false
  return `${domain}/${username}`
}

const getSocialIcon = ({ service }) => {
  return socialMedia[service]?.icon
}

const getSocialName = ({ service }) => {
  return socialMedia[service]?.name
}

interface FooterData {
  links: { id: string; href: string; text: string }[]
  meta: { id: string; href: string; text: string }[]
  copyright: string
  socialLinks: { id: string; service: string; username: string }[]
  //contacts: { id: string; icon: JSX.Element; contact: string }[]
}

const datas: FooterData = {
  links: [
    {
      id: "0",
      href: "#!",
      text: "Products",
    },
    {
      id: "1",
      href: "#!",
      text: "Pricing",
    },
    {
      id: "2",
      href: "#!",
      text: "About",
    },
    {
      id: "3",
      href: "#!",
      text: "Blog",
    },
  ],
  meta: [
    {
      id: "0",
      href: "/terms",
      text: "Terms",
    },
    {
      id: "1",
      href: "/privacy",
      text: "Privacy Policy",
    },
  ],
  socialLinks: [
    {
      id: "0",
      service: "TWITTER",
      username: "gatsbyjs",
    },
    {
      id: "1",
      service: "INSTAGRAM",
      username: "gatsbyjs",
    },
    {
      id: "2",
      service: "GITHUB",
      username: "gatsbyjs",
    },
    {
      id: "3",
      service: "FACEBOOK",
      username: "gatsbyjs",
    },
    {
      id: "4",
      service: "YOUTUBE",
      username: "gatsbyjs",
    },
    {
      id: "5",
      service: "TWITCH",
      username: "gatsbyjs",
    },
  ],
  copyright: "© 2022 Gatsby Inc. All rights reserved",
}

export default function Footer({ data, sliceContext }) {
  const { links, meta, socialLinks, copyright } = datas

  return (
    <Box as="footer" paddingY={4}>
      <Container>
        <Flex gap={4} variant="start" responsive>
          <Box width="third">
            <Subhead className={underline}>{"Название компании"}</Subhead>
            <Text as="p">{sliceContext.license}</Text>
          </Box>
          <Feedback props={data}></Feedback>
          <Contacts props={data}></Contacts>
        </Flex>
      </Container>
      <Container>
        <Flex variant="start" responsive>
          <NavLink to="/">
            <VisuallyHidden>Home</VisuallyHidden>
            <BrandLogo />
          </NavLink>
          <Space />
          <FlexList>
            {socialLinks &&
              socialLinks.map((link) => {
                const url = getSocialURL(link)
                return (
                  url && (
                    <li key={link.id}>
                      <IconLink to={url}>
                        <VisuallyHidden>{getSocialName(link)}</VisuallyHidden>
                        {getSocialIcon(link)}
                      </IconLink>
                    </li>
                  )
                )
              })}
          </FlexList>
        </Flex>
        <Space size={5} />
        <Flex variant="start" responsive>
          <FlexList variant="start" responsive>
            {links &&
              links.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.href}>{link.text}</NavLink>
                </li>
              ))}
          </FlexList>
          <Space />
          <FlexList>
            {meta &&
              meta.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.href}>
                    <Text variant="small">{link.text}</Text>
                  </NavLink>
                </li>
              ))}
          </FlexList>
          <Text variant="small">{copyright}</Text>
        </Flex>
      </Container>
      <Space size={3} />
    </Box>
  )
}

export const query = graphql`
  {
    wpPage(uri: { eq: "/" }) {
      feedback {
        intro
        heading
        placeholderName
        placeholderPhone
        outro
        link {
          title
          url
          target
        }
        buttonText
      }
      contacts {
        heading
        address {
          contact
          icon
        }
        email {
          contact
          icon
        }
        phone {
          contact
          icon
        }
      }
    }
  }
`
