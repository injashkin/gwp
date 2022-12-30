import { style } from "@vanilla-extract/css"

export const sliderTop = style({
  position: "absolute",
  zIndex: 2,
  opacity: 1,
})

export const sliderBottom = style({
  position: "absolute",
  zIndex: 1,
  opacity: 0,
})

export const height = style({
  height: "10rem",
})

export const relative = style({
  position: "relative",
})
