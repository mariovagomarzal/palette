# Mario's color palette

My personal color palette, packaged as a JavaScript module so my projects can consume it.

## The palette

The palette comes in two flavors, `light` and `dark`. Both share the same structure: a monochrome sub-palette meant for
UI elements and a colorful one meant for everything expressive.

The monochrome scale, ordered from background to foreground:

| Color     | Intended use                               |
| --------- | ------------------------------------------ |
| `base`    | Default background                         |
| `surface` | Raised panes: cards, code blocks, inputs   |
| `overlay` | Borders, separators and other subtle lines |
| `subtext` | Secondary text                             |
| `text`    | Body text                                  |

The hues, in spectral order: `red`, `orange`, `yellow`, `green`, `teal`, `blue` and `purple`. They are meant for
anything that needs to stand out from the monochrome structure, such as accents, states and syntax.

The palette assigns no roles: each consumer maps colors to its own semantic tokens. To keep everything looking like one
identity, the recommended mapping is `orange` for the accent, `red` for errors, `yellow` for warnings, `green` for
success and `blue` for links and info. Deviate when legibility asks for it.

> [!NOTE]
> The philosophy of this palette, with its flavors, its monochrome and colorful split and even this guide, is borrowed
> from [Catppuccin][catppuccin] and its [style guide][catppuccin-style-guide].

## Ports

Ports adapt the palette to the formats its consumers speak. All of them ship with the package:

- **CSS** (`@mariovagomarzal/palette/palette.css`): the palette as `--color-*` custom properties, with the light flavor
  on `:root` and the dark one behind `data-theme="dark"`.
- **Shiki** (`@mariovagomarzal/palette/shiki`): syntax highlighting themes for [Shiki][shiki], one per flavor.

## Development environment

The development environment is set up using Nix and [Devenv][devenv]. Run the following command to enter the development
environment:

```bash
devenv shell
```

Run `just` to see the available commands or check the `justfile` for more details.

## Conventions

This project follows the [Conventional Commits][conventional-commits] specification for commit messages. There are no
strict rules for branching in this repository.

<!-- External links -->

[catppuccin]: https://github.com/catppuccin/catppuccin
[catppuccin-style-guide]: https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md
[shiki]: https://shiki.style
[devenv]: https://devenv.sh
[conventional-commits]: https://www.conventionalcommits.org/en/v1.0.0/
