// The palette as CSS custom properties: the light flavor on `:root`, the dark one gated behind `data-theme`.

import { type Flavor, colorNames, light, dark } from "../palette.js";

function block(selector: string, colorScheme: string, flavor: Flavor): string {
  const lines = colorNames.map((name) => `  --color-${name}: ${flavor[name]};`);
  return `${selector} {\n  color-scheme: ${colorScheme};\n${lines.join("\n")}\n}`;
}

export function paletteCss(): string {
  return `${block(":root", "light", light)}\n\n${block(':root[data-theme="dark"]', "dark", dark)}\n`;
}
