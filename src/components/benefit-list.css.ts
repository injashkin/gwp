import { createVar, style } from "@vanilla-extract/css"
import { colors } from "../colors.css"

export const backImage = style({
  background:
    "url(http://2166.wp.shabloner.ru/themes/shabloner_2166/files/st_block_102814_4_bg.jpg)",
  backgroundPosition: "left 50% top 50%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  marginTop: "unset",
  marginBottom: "unset",
})

export const opasity = style({
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  paddingTop: "60px",
  paddingBottom: "60px",
})

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
