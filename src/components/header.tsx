import * as React from "react"
import { graphql } from "gatsby"
import { Menu, X } from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Space,
  NavLink,
  Button,
  InteractiveIcon,
  Nudge,
  VisuallyHidden,
} from "./ui"
import {
  mobileNavOverlay,
  mobileNavLink,
  desktopHeaderNavWrapper,
  mobileHeaderNavWrapper,
  mobileNavSVGColorWrapper,
} from "./header.css"
import BrandLogo from "./brand-logo"
import NavItemGroup from "./nav-item-group"

/*
type NavItem = {
  id: string
  navItemType: "Link"
  href: string
  text: string
}


type NavItemGroup = {
  id: string
  navItemType: "Group"
  name: string
  navItems: NavItemGroupNavItem[]
}

interface HeaderData {
  navItems: NavItem[] | NavItemGroup[]
  cta: {
    id: string
    href: string
    text: string
  }
}


const data: HeaderData = {
  navItems: [
    {
      id: "0",
      navItemType: "Link",
      href: "#!",
      text: "Products",
    },
    {
      id: "1",
      navItemType: "Link",
      href: "#!",
      text: "Pricing",
    },
    {
      id: "2",
      navItemType: "Link",
      href: "#!",
      text: "About",
    },
    {
      id: "3",
      navItemType: "Link",
      href: "#!",
      text: "Blog",
    },
  ],
  cta: {
    id: "0",
    href: "#!",
    text: "Sign Up",
  },
}
*/

interface HeaderData {
  cta: {
    id: string
    href: string
    text: string
  }
}

const data: HeaderData = {
  cta: {
    id: "0",
    href: "#!",
    text: "Sign Up",
  },
}

export default function Header(props) {
  const { cta } = data
  const [isOpen, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "visible"
    }
  }, [isOpen])

  return (
    <header>
      <Container className={desktopHeaderNavWrapper}>
        <Space size={2} />
        <Flex variant="spaceBetween">
          <NavLink to="/">
            <VisuallyHidden>Home</VisuallyHidden>
            <BrandLogo />
          </NavLink>
          <nav>
            <FlexList gap={4}>
              {props.data.allWpMenuItem.nodes.map(
                (node) =>
                  node.parentId === null &&
                  (node.childItems.nodes.length === 0 ? (
                    <li key={node.id}>
                      <NavLink to={node.uri}>{node.label}</NavLink>
                    </li>
                  ) : (
                    node.childItems.nodes.length > 0 && (
                      <NavItemGroup
                        name={node.label}
                        navItems={props.data.allWpMenuItem.nodes}
                      ></NavItemGroup>
                    )
                  ))
              )}
            </FlexList>
          </nav>

          <div>{cta && <Button to={cta.href}>{cta.text}</Button>}</div>
        </Flex>
      </Container>
      <Container className={mobileHeaderNavWrapper[isOpen ? "open" : "closed"]}>
        <Space size={1} />
        <Flex variant="spaceBetween">
          <span
            className={
              mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]
            }
          >
            <Space />
            <InteractiveIcon
              title="Toggle menu"
              onClick={() => setOpen(!isOpen)}
              className={
                mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]
              }
            >
              {isOpen ? <X /> : <Menu />}
            </InteractiveIcon>
          </span>

          <Nudge right={3}>
            <NavLink to="/">
              <VisuallyHidden>Home</VisuallyHidden>
              <BrandLogo />
            </NavLink>
          </Nudge>
          <div>
            {cta && (
              <Button to={cta.href} variant={isOpen ? "reversed" : "primary"}>
                {cta.text}
              </Button>
            )}
          </div>
        </Flex>
      </Container>
      {isOpen && (
        <div className={mobileNavOverlay}>
          <nav>
            <FlexList responsive variant="stretch">
              {props.data.allWpMenuItem.nodes?.map((node) => (
                <li key={node.id}>
                  <NavLink to={node.id} className={mobileNavLink}>
                    {node.label}
                  </NavLink>
                </li>
              ))}
            </FlexList>
          </nav>
        </div>
      )}
    </header>
  )
}

export const query = graphql`
  {
    allWpMenuItem {
      nodes {
        id
        uri
        url
        label
        parentId
        childItems {
          nodes {
            id
            uri
            url
            label
            description
          }
        }
      }
    }
  }
`
