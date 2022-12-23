import { style } from "@vanilla-extract/css"
import { colors } from "../colors.css"

export const backImage = style({
  //position: "relative",
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

export const hoverBenefit = style({
  ":hover": {}
  
})

export const backgroundIcon = style({
  color: "inherit",
  display: "flex",
  width: "94px",
  height: "94px",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: colors.background,
  border: "1px solid",
  borderColor: colors.primary,
  ":hover": {
    backgroundColor: colors.muted,
  },
})


