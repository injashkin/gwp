import * as React from "react"
import { formControl, button } from "./feedback.css"
import { underline } from "./footer.css"
import { Box, NavLink, Subhead, Text } from "./ui"

export default function Feedback({ props }) {
  const {
    intro,
    placeholderName,
    placeholderPhone,
    outro,
    link,
    buttonText,
    heading,
  } = props.wpPage.feedback
  return (
    <Box width="third">
      <Subhead className={underline}>{heading}</Subhead>
      <Box>
        <Text as="p">{intro}</Text>
        <Box as="form">
          <Box paddingY={2}>
            <input
              type="text"
              placeholder={placeholderName}
              className={formControl}
            ></input>
          </Box>
          <Box paddingY={2}>
            <input
              type="text"
              placeholder={placeholderPhone}
              className={formControl}
            ></input>
          </Box>
        </Box>
        <Box paddingY={3}>
          <Text as="small">
            {outro}{" "}
            {
              <NavLink target={link.target} to={link.url}>
                {link.title}
              </NavLink>
            }
          </Text>
        </Box>
        <button type="submit" className={button}>
          {buttonText}
        </button>
      </Box>
    </Box>
  )
}
