import * as React from "react"
import { underline } from "./footer.css"
import { Box, Flex, Subhead, Text } from "./ui"
import * as I from "react-feather"

function Contact({ props }) {
  const FeatherIcon = I[props.icon]
  return (
    <Flex variant="start">
      <>
        {props.icon && <FeatherIcon />}
        <Text as="p">{props.contact}</Text>
      </>
    </Flex>
  )
}

export default function Contacts({ props }) {
  const { heading, phone, address, email } = props.wpPage.contacts
  return (
    <Box width="third">
      <Subhead className={underline}>{heading}</Subhead>
      <Contact props={phone}></Contact>
      <Contact props={address}></Contact>
      <Contact props={email}></Contact>
    </Box>
  )
}
