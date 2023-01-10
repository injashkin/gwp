import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"

const slideBase = style({
  position: "absolute",
  transitionProperty: "opacity",
  transitionDuration: "0.3s",
  transitionTimingFunction: "ease-in-out",
})

export const slide = styleVariants({
  under: [slideBase, { zIndex: 1, opacity: 0 }],
  over: [slideBase, { zIndex: 2, opacity: 1 }],
})

export const height = style({
  height: "12rem",
  position: "relative",
})

export const wrapPointer = style({
  padding: "32px",
})

const dotBase = style({
  backgroundColor: theme.colors.primary,
  border: `1px solid ${theme.colors.primary}`,
  width: "10px",
  height: "10px",
  borderRadius: "50%",
})

export const dot = styleVariants({
  active: [dotBase],
  passive: [dotBase, { opacity: 0.5 }],
})

export const wrapAvatar = style({
  paddingTop: "0",
})

export const author = style({
  ":before": {
    content: "- ",
  },
})

export const slider = style({
  marginBottom: theme.space[4],
})
