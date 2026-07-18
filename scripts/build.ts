// Write the generated artifacts next to the compiled modules; runs after tsc, hence the dist import.

import { writeFileSync } from "node:fs";

import { paletteCss } from "../dist/index.js";

// Each artifact in dist/, mapped to the generator of its contents.
const artifacts = {
  "palette.css": paletteCss,
};

for (const [name, generate] of Object.entries(artifacts)) {
  writeFileSync(new URL(`../dist/${name}`, import.meta.url), generate());
}
