import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"

export const map = style({
  height: "500px",
})

export const section = style({
  backgroundColor: "#f9f9f9",
  paddingTop: theme.space[5],
  paddingBottom: theme.space[0],
})