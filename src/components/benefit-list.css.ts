import { createVar, style } from "@vanilla-extract/css"
import { colors } from "../colors.css"

export const colorText = style({
  color: colors.background,
})

export const colorIcon = createVar()
export const hoverBenefit = style({})

export const backgroundIcon = style({
  display: "flex",
  width: "94px",
  height: "94px",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: colors.background,
  border: "1px solid",
  borderColor: colors.primary,

  transitionProperty: "background-color",
  transitionDuration: "0.2s",
  transitionTimingFunction: "ease-in-out",

  vars: {
    [colorIcon]: colors.primary
  },
  selectors: {
    [`${hoverBenefit}:hover &`]: {
      backgroundColor: colors.text,
      borderColor: colors.background,
      vars: {
        [colorIcon]: colors.background
      }
    },
  },
})
