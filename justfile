[private]
default:
    @just --list --unsorted

[doc("Check the project for type errors.")]
check:
  pnpm check

alias c := check

[doc("Build the package.")]
build:
  pnpm build

alias b := build

[doc("Publish the package to npm.")]
publish:
  pnpm publish

alias p := publish

[doc("Remove build artifacts.")]
[confirm]
clean:
  rm -rf dist

alias cl := clean
