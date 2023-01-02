import { style, styleVariants } from "@vanilla-extract/css"
import { colors } from "../colors.css"

export const sliderTop = style({
  position: "absolute",
  zIndex: 2,
  opacity: 1,

  transitionProperty: "opacity",
  transitionDuration: "0.3s",
  transitionTimingFunction: "ease-in-out",
})

export const sliderBottom = style({
  position: "absolute",
  zIndex: 1,
  opacity: 0,

  transitionProperty: "opacity",
  transitionDuration: "0.3s",
  transitionTimingFunction: "ease-in-out",
})

export const height = style({
  height: "10rem",
  position: "relative",
})

const pointerBase = style({
  backgroundColor: `${colors.primary}`,
  border: `1px solid ${colors.primary}`,
  width: "10px",
  height: "10px",
  borderRadius: "50%",
})

export const pointerStyle = styleVariants({
  active: [pointerBase],
  noActive: [pointerBase, { opacity: 0.5 }],
})
