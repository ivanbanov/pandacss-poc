/* eslint-disable */
export type Token = "colors.red" | "colors.green" | "colors.blue" | "colors.gold" | "colors.pink" | "colors.white" | "breakpoints.@mobile" | "breakpoints.@tablet" | "breakpoints.@desktop" | "sizes.breakpoint-@mobile" | "sizes.breakpoint-@tablet" | "sizes.breakpoint-@desktop" | "colors.error" | "colors.success" | "colors.info" | "colors.warning" | "colors.off" | "colors.none" | "colors.colorPalette"

export type ColorPalette = "red" | "green" | "blue" | "gold" | "pink" | "white" | "error" | "success" | "info" | "warning" | "off" | "none"

export type ColorToken = "red" | "green" | "blue" | "gold" | "pink" | "white" | "error" | "success" | "info" | "warning" | "off" | "none" | "colorPalette"

export type BreakpointToken = "@mobile" | "@tablet" | "@desktop"

export type SizeToken = "breakpoint-@mobile" | "breakpoint-@tablet" | "breakpoint-@desktop"

export type Tokens = {
		colors: ColorToken
		breakpoints: BreakpointToken
		sizes: SizeToken
} & { [token: string]: never }

export type TokenCategory = "aspectRatios" | "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "borderWidths" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"