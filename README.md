# Records Intelligence — public website

[Open the website](https://claudedclaude2-byte.github.io/) · [Roadmap](ROADMAP.md) · [Development progress](PROGRESS.md)

The modern project presentation includes the interactive fictional example, platform guide, six-stage roadmap and a named progress checklist. Completed work is ticked; current work and next milestones are shown separately. The implementation repository and investigation records remain private.

## Keep progress current

The website reads `progress.json` on page load. Update its dated `done`, `working` and `next` groups when the corresponding work changes, and keep `PROGRESS.md` in agreement. Check the relevant completion or validation evidence before moving an item into Completed. Describe the specific completed task, rather than implying that the whole product is released.

Normal updates go through a pull request. GitHub Pages deploys `main` from the repository root. Branch protections remain enabled.

## Website files

- `index.html`: overview, fictional interactive example, current progress and roadmap summary.
- `platform.html`: platform and bounded-pilot guide.
- `roadmap.html`: built capabilities, current priorities and future ambitions, plus the progress checklist.
- `trust.html`: source, revision and review principles.
- `assets/` and `mark.svg`: the built styles, scripts, bundled Manrope fonts and project mark.

This repository contains only the public website and its public progress data. Keep product source, private records, runtime databases, credentials and internal work logs out of it.
