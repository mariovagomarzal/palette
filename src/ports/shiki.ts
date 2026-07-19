// The palette as Shiki themes, one per flavor, built from the syntax roles.

import type { ThemeRegistration } from "@shikijs/types";

import { type Flavor, type FlavorName, flavors } from "../palette.js";
import { type SyntaxRole, syntax, syntaxRoles } from "../syntax.js";

// The TextMate scopes each role colors.
const scopes: Record<SyntaxRole, string[]> = {
  comment: ["comment", "punctuation.definition.comment"],
  punctuation: ["punctuation", "meta.brace"],
  operator: ["keyword.operator"],
  variable: ["variable"],
  keyword: ["keyword", "storage.type", "storage.modifier"],
  function: ["entity.name.function", "support.function"],
  string: ["string", "punctuation.definition.string"],
  constant: ["constant", "support.constant", "variable.other.constant"],
  type: ["entity.name.type", "entity.name.class", "support.type", "support.class"],
  property: ["variable.other.property", "support.variable.property", "entity.other.attribute-name"],
  tag: ["entity.name.tag", "punctuation.definition.tag"],
};

function theme(name: FlavorName, flavor: Flavor): ThemeRegistration {
  return {
    name: `palette-${name}`,
    type: name,
    colors: {
      "editor.background": flavor.base,
      "editor.foreground": flavor.text,
    },
    tokenColors: syntaxRoles.map((role) => ({
      scope: scopes[role],
      settings: { foreground: flavor[syntax[role]] },
    })),
  };
}

export const shikiThemes = {
  light: theme("light", flavors.light),
  dark: theme("dark", flavors.dark),
};
