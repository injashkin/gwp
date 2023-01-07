import * as React from "react"
import { formControl, button } from "./feedback.css"
import { Box, NavLink, Text } from "./ui"

export default function Feedback({ data }) {
  return (
    <Box>
      <Text as="p">{data.wpPage.feedback.newGroup.intro}</Text>
      <Box as="form">
        <Box paddingY={2}>
          <input
            type="text"
            placeholder={data.wpPage.feedback.newGroup.placeholderName}
            className={formControl}
          ></input>
        </Box>
        <Box paddingY={2}>
          <input
            type="text"
            placeholder={data.wpPage.feedback.newGroup.placeholderPhone}
            className={formControl}
          ></input>
        </Box>
      </Box>
      <Box paddingY={3}>
        <Text as="small">
          {data.wpPage.feedback.newGroup.outro}{" "}
          {
            <NavLink
              target={data.wpPage.feedback.newGroup.link.target}
              to={data.wpPage.feedback.newGroup.link.url}
            >
              {data.wpPage.feedback.newGroup.link.title}
            </NavLink>
          }
        </Text>
      </Box>
      <button type="submit" className={button}>
      {data.wpPage.feedback.newGroup.buttonText}
      </button>
    </Box>
  )
}
