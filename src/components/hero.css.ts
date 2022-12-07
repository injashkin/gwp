import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

// Класс grid присваиваем родительскому элементу
export const grid = style({
  display: "grid",
})

// Класс desktopHeroBottomLayer присваиваем изображению
export const desktopHeroBottomLayer = style({
  gridArea: "1/1",
  maxHeight: 700,
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
})
