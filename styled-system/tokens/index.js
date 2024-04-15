const tokens = {
  "colors.red": {
    "value": "#ff0000",
    "variable": "var(--colors-red)"
  },
  "colors.green": {
    "value": "#00ff00",
    "variable": "var(--colors-green)"
  },
  "colors.blue": {
    "value": "#0000ff",
    "variable": "var(--colors-blue)"
  },
  "colors.gold": {
    "value": "#ffd700",
    "variable": "var(--colors-gold)"
  },
  "colors.pink": {
    "value": "#ffc0cb",
    "variable": "var(--colors-pink)"
  },
  "colors.white": {
    "value": "#ffffff",
    "variable": "var(--colors-white)"
  },
  "breakpoints.@mobile": {
    "value": "0px",
    "variable": "var(--breakpoints-\\@mobile)"
  },
  "breakpoints.@tablet": {
    "value": "768px",
    "variable": "var(--breakpoints-\\@tablet)"
  },
  "breakpoints.@desktop": {
    "value": "1024px",
    "variable": "var(--breakpoints-\\@desktop)"
  },
  "sizes.breakpoint-@mobile": {
    "value": "0px",
    "variable": "var(--sizes-breakpoint-\\@mobile)"
  },
  "sizes.breakpoint-@tablet": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-\\@tablet)"
  },
  "sizes.breakpoint-@desktop": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-\\@desktop)"
  },
  "colors.error": {
    "value": "var(--colors-red)",
    "variable": "var(--colors-error)"
  },
  "colors.success": {
    "value": "var(--colors-green)",
    "variable": "var(--colors-success)"
  },
  "colors.info": {
    "value": "var(--colors-blue)",
    "variable": "var(--colors-info)"
  },
  "colors.warning": {
    "value": "var(--colors-gold)",
    "variable": "var(--colors-warning)"
  },
  "colors.off": {
    "value": "var(--colors-pink)",
    "variable": "var(--colors-off)"
  },
  "colors.none": {
    "value": "var(--colors-white)",
    "variable": "var(--colors-none)"
  },
  "colors.colorPalette": {
    "value": "var(--colors-color-palette)",
    "variable": "var(--colors-color-palette)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar