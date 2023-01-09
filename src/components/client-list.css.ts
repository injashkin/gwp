import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"

export const clientItem = style({
  width: "175px",
  float: "left",
  marginRight: "25px",
  position: "relative",
})

export const clientsWrap = style({
  width: "2000px",
})

export const slide = style({
  overflow: "hidden",
})

export const dot = style({
  width: "10px",
  height: "10px",
  backgroundColor: theme.colors.primary,
  borderRadius: "50%",
  margin: "30px 4px 0 4px",
})
