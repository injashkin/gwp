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
  contacts: { id: string; icon: JSX.Element; contact: string }[]
}

const data: FooterData = {
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
  contacts: [
    {
      id: "0",
      icon: <Phone />,
      contact: "+7 (123) 456 78 90",
    },
    {
      id: "1",
      icon: <MapPin />,
      contact: "ул Терская, 217, офис 123",
    },
    {
      id: "2",
      icon: <Mail />,
      contact: "mail@mail.ru",
    },
  ],
  copyright: "© 2022 Gatsby Inc. All rights reserved",
}

export default function Footer() {
  const { links, meta, socialLinks, copyright, contacts } = data

  return (
    <Box as="footer" paddingY={4}>
      <Container>
        <Flex gap={4} variant="centerNoWrap">
          <Box width="third">
            <Subhead className={underline}>{"Название компании"}</Subhead>
            <Text as="p">
              Перепечатка, а равно и использование материалов данного сайта
              разрешается только по согласию с владельцем.
            </Text>
          </Box>
          <Box width="third">
            <Subhead className={underline}>Обратная связь</Subhead>
            <Text as="p">
              Оставьте заявку и наши менеджеры свяжутся с вами в течении 15
              минут
            </Text>
            <Text as="p">Здесь установить форму обратной связи</Text>
          </Box>
          <Box width="third">
            <Subhead className={underline}>Контакты</Subhead>
            {contacts &&
              contacts.map((item) => {
                return (
                  <Flex key={item.id} variant="start">
                    <>
                      {item.icon}
                      <Text as="p">{item.contact}</Text>
                    </>
                  </Flex>
                )
              })}
          </Box>
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
