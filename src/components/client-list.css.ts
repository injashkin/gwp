import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"

export const clientItem = style({
  width: "175px",
  float: "left",
  marginRight: "25px",
  position: "relative",
})

const slideBase = style({
  transition: "all 1s ease 0s",
  width: "2000px",
})

export const slide = styleVariants({
  one: [slideBase],
  two: [slideBase, {transform: "translate3d(-800px, 0px, 0px)"}],
  
})

export const visible = style({
  overflow: "hidden",
})

const dotBase = style({
  width: "10px",
  height: "10px",
  backgroundColor: theme.colors.primary,
  border: `1px solid ${theme.colors.primary}`,
  borderRadius: "50%",
  margin: "30px 4px 0 4px",
  transition: "all 0.3s ease",
  cursor: "pointer",
})

export const dot = styleVariants({
  active: [dotBase],
  passive: [dotBase, { opacity: 0.5 }],
})
