// The syntax highlighting roles and their palette colors, flavor-agnostic; ports resolve them to hex.

import { type ColorName } from "./palette.js";

export const syntaxRoles = [
  "comment",
  "punctuation",
  "operator",
  "variable",
  "keyword",
  "function",
  "string",
  "constant",
  "type",
  "property",
  "tag",
] as const;

export type SyntaxRole = (typeof syntaxRoles)[number];

export const syntax: Record<SyntaxRole, ColorName> = {
  comment: "subtext",
  punctuation: "subtext",
  operator: "subtext",
  variable: "text",
  keyword: "purple",
  function: "blue",
  string: "green",
  constant: "orange",
  type: "yellow",
  property: "teal",
  tag: "red",
};
