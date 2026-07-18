// Mario's color palette.
//
// Each flavor has two sub-palettes: a monochrome scale meant for UI elements and a set of hues meant for
// everything colorful.

// The monochrome scale, ordered from background to foreground.
export const monochromeNames = [
  "base",
  "surface",
  "overlay",
  "subtext",
  "text",
] as const;

// The hues, in spectral order.
export const hueNames = [
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "purple",
] as const;

export const colorNames = [...monochromeNames, ...hueNames] as const;

export type MonochromeName = (typeof monochromeNames)[number];
export type HueName = (typeof hueNames)[number];
export type ColorName = (typeof colorNames)[number];
export type Flavor = Record<ColorName, string>;

export const light: Flavor = {
  base: "#f2ede0",
  surface: "#e9e2cf",
  overlay: "#cfcdc1",
  subtext: "#6a7268",
  text: "#17271f",

  red: "#a53c2c",
  orange: "#b96f28",
  yellow: "#85630e",
  green: "#4f7340",
  teal: "#2f7565",
  blue: "#3d6485",
  purple: "#7c4f79",
};

export const dark: Flavor = {
  base: "#151b17",
  surface: "#1e2620",
  overlay: "#3b3f38",
  subtext: "#949285",
  text: "#e8e1cf",

  red: "#d0654e",
  orange: "#cf8542",
  yellow: "#cba55a",
  green: "#8cab72",
  teal: "#72ad9c",
  blue: "#7fa8c9",
  purple: "#b391b8",
};

export const flavors = { light, dark };
export type FlavorName = keyof typeof flavors;
