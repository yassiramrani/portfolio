# portfolio

Personal portfolio website built with React, TypeScript, and Vite.

The site includes English, French, and Arabic content and is configured for static deployment with the included custom domain configuration.

## Development

```bash
npm install
npm run dev
```

Build the production bundle with `npm run build`.

## Fonts

Manrope and DM Mono are self-hosted from `public/fonts` and declared with `@font-face` in
`src/index.css`. Nothing is fetched from a third-party font host, so CV print and PDF export render
the same everywhere. Both faces are subset to Latin, so Arabic text intentionally falls back to the
system Arabic font.

## The CV

`public/Yassir-Amrani-CV.pdf` is the authoritative one-page CV, and the source of truth for the
résumé section. The download button resolves at runtime, so it disappears automatically if that file
is ever removed and the "Print / Save as PDF" fallback takes over.

The on-page résumé is a condensed, trilingual restatement, not a re-typeset copy. When the PDF
changes, update:

- `src/locales/{en,fr,ar}/translation.json` under `cv` — profile, education, awards, soft skills.
- `src/data/portfolio.ts` — `cvToolbox`, `cvEducation`, `cvLanguages`, `cvSoftSkills`.

Two constraints worth knowing before you edit:

- The résumé prints to a single A4 page. A4 content width (~`718px`) is narrower than the `760px`
  mobile breakpoint, so the mobile single-column rules also match in print. Print layout is declared
  explicitly in the `@media print` block — add a matching rule for any new block.
- `PRODUCT.md` tracks the facts where the PDF and the older project/experience copy disagree. They
  are not yet reconciled, so the CV section follows the PDF while the project sections do not.
