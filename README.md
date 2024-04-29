# Lean Mode for Obsidian

This **WIP** plugin aims to integrate the [Lean](https://lean-lang.org) programming language and
theorem prover into Obsidian. The hope is that it will provide a way to work with theories and logic
as a natural part of the note-taking experience, much like a [Jupyter](https://jupyter.org) notebook
directly in your notes.

Planned features are as follows:

- Lean running locally in Obsidian via a WASM build.
- Support for the lean infoview to provide interactive assistance while programming.
- The ability to execute lean code blocks in a one-shot or live view, and display results below
  them. At the same time, the ability to open lean files directly in a standalone editor.
- Support for the language server, including completions, semantic highlighting, hover, and text
  replacement for symbols.
- Inclusion of the basic libraries, including the bundled
  [standard library](https://github.com/leanprover/std4),
  [mathlib](https://github.com/leanprover-community/mathlib4), and a number of other basic and
  useful lean libraries.
- Support for [lake](https://github.com/leanprover/lean4/tree/master/src/lake) to assist in working
  with independent non-notebook projects.

> ### WORK IN PROGRESS
>
> Please note that this plugin is _heavily_ work in progress and may be totally broken at any time.
> This notice will be removed when things are ready for testing, and updated when there are any
> actual features implemented.

## Installation

You can install the plugin using the following two installation methods.

### Community Plugins (NOT YET AVAILABLE)

1. Go to Settings and select the Community Plugins tab.
2. Open the Browse view, and search for "Lean Mode".
3. Select this plugin, and press "Install" and then "Enable".
4. It should now work!

### BRAT

1. Install [BRAT](https://github.com/TfTHacker/obsidian42-brat).
2. In BRAT settings, select "Add Beta Plugin" and paste
   `https://github.com/iamrecursion/obsidian-lean` as the URL.
3. Go to the "Community Plugins" tab and enable the plugin.

## Contributing

If you are interested in contributing code, documentation, or ideas to this project, please take a
look at the [CONTRIBUTING](./CONTRIBUTING.md) guide.
