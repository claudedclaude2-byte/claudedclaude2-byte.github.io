# Records Intelligence — development progress

Last checked: 2026-10-12.

The combined fictional pilot has completed automated Windows checks, and Windows remains the authoritative platform. Final technical acceptance remains open: the corrected candidate has not received an independent review, and its partial Linux/Docker verification is in progress. No release is authorized, and a public product download is not available.

## Completed

- [x] **Records and evidence foundations** — Records requests, response gaps, evidence search, source provenance and versioned dossier components are implemented in private development.
- [x] **PDF review and correction workflow** — Source-page citations, explicit match and unread states, a correction round and preserved earlier revisions are implemented in the fictional pilot.
- [x] **Combined Windows pilot** — Usability, packaging, source-wording and startup changes are combined in one candidate. Its recorded Windows suite completed with 6,332 tests passed and 424 skipped.
- [x] **Installed Windows journey** — The final candidate completed 484 installed tests, with three skipped, 13 smoke checks and 281 browser checks. These are automated results on the development machine.
- [x] **Reproducible package** — Two builds of the final fictional pilot produced identical package bytes. Installation and package identity were checked on the development machine.
- [x] **First-use rehearsal on a development machine** — The corrected candidate's package was unpacked, set up and checked in a new folder on a development machine, using fictional records only. The package checks, the one correction round and both recipient checks passed. A separate clean machine and participant feedback are still open, so this is not the clean-machine first use below, an acceptance result or a release.
- [x] **Public project presentation** — This website and its public roadmap are hosted online. Product source and private research remain separate.

## Acceptance still open

- [ ] **Final technical review** — The previous candidate received a blocking review finding. The one planned review and one correction pass have been used. The correction pass has machine evidence, but no independent review of the corrected candidate has been run.
- [ ] **In progress: Linux and Docker verification (partial)** — The Linux run on the corrected candidate passed 5,443 tests and held 11 known failures (9 Windows-only file-access cases and 2 shell-portability cases). They are now being repaired on a new candidate: the 9 file-access cases get explicit platform guards, so Linux reports them as visible skips while native Windows still runs them, and the 2 shell tests are being made portable to shells that do not search the command path. Also in progress on that candidate: a fix so cropped page images in the review bundle cannot reveal hidden marks in the footer strip, and two output-path boundary fixes (transcript-anchor output across revisions, and '..' handling on POSIX systems). None of this is verified yet. A partial platform check, not a substitute for the Windows suite, not acceptance or release.
- [ ] **Lint and security baseline** — Repository-wide checks still retain existing findings. Recorded changes add no new findings in the checked code and security rules; this does not mean the entire repository is clean.

## Next milestones

- [ ] **Verify the repaired candidate** — Planned, after the repairs above: one native Windows test suite and one complete partial Linux run on the new candidate, then package and installed checks. Results will be recorded here only after they exist; none of this is acceptance or release.
- [ ] **Clean-machine first use** — Verify the accepted final package on a separate clean machine and record its first-use journey.
- [ ] **Guided fictional evaluations** — Use fictional samples with evaluation partners to learn where onboarding, source inspection and revision review can improve.
- [ ] **Prepare a runnable release** — Close the remaining technical and release obligations before offering a public product download.

[Project website](https://claudedclaude2-byte.github.io/#progress) · [Full roadmap](ROADMAP.md) · [GitHub profile](https://github.com/claudedclaude2-byte)
