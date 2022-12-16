import {style} from "@vanilla-extract/css"

export const parallax = style({
    position: "relative",
    perspective: "1px",
    height: "60vh",
    overflow: "hidden",
    overflowY: "auto",
})

export const parallaxLayer = style({
    position: "absolute",
    inset: "0",
})

export const parallaxImage = style({
    position: "absolute",
    inset: "0",
    transform: "translateZ(0)",
})

export const parallaxText = style({
    fontSize: "72px",
    position: "absolute",
    inset: "0",
    transform: "translateZ(-2px) translateX(30%) translateY(110%) scale(3)",
})