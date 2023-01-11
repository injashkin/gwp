import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"

// Класс grid присваиваем родительскому элементу
export const grid = style({
  display: "grid",
  backgroundColor: theme.colors.primary,
})

// Класс desktopHeroBottomLayer присваиваем изображению
const imageBase = style({
  gridArea: "1/1",
})

export type HeroSizes = "small" | "medium"

export const imageBg: Record<HeroSizes, string> = styleVariants({
  small: [imageBase, { maxHeight: 400 }],
  medium: [imageBase, { maxHeight: 700 }],
})

// Класс desktopHeroTopLayer присваиваем элементу, который должен
// быть на изображении
export const desktopHeroTopLayer = style({
  // Используя одну и ту же область сетки элементы укладываются друг на друга
  gridArea: "1/1",
  position: "relative",

  placeItems: "center",
  display: "grid",
  // gridTemplateRows: "38% 1fr 1fr 1fr 25%",
  backgroundColor: "rgba(0, 0, 0, 0.45)",
})
