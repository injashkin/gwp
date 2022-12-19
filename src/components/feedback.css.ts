import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"

export const formControl = style({
  width: "100%",
  padding: "0.375rem 0.75rem",
  backgroundClip: "padding-box",
  border: "1px solid #ced4da",
})

export const button = style({
  borderRadius: theme.radii.circle,
  color: theme.colors.background,
  backgroundColor: theme.colors.primary,
  textDecoration: "none",
  fontWeight: theme.fontWeights.bold,
  fontSize: theme.fontSizes[2],
  padding: theme.space[3],
})
