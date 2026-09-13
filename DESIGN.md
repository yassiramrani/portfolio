
---
name: Yassir Amrani Portfolio
description: Recruiter-facing technical editorial portfolio for a full-stack engineer.
colors:
  paper: "#f5f4f0"
  paper-tint: "#ebf0eb"
  ink: "#17191a"
  muted: "#5e6463"
  line: "#c9c9c3"
  soft-line: "#dcddd8"
  sheet: "#fdfdfb"
  index: "#9a9ddc"
  accent: "#565b94"
  accent-soft: "#dedff0"
  focus: "#174c43"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(3.6rem, 8.2vw, 7.2rem)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.055em"
  headline:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(2.15rem, 4vw, 4.4rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.05em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "DM Mono, monospace"
    fontSize: "0.66rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.1em"
spacing:
  xs: "0.35rem"
  sm: "0.75rem"
  md: "1.15rem"
  lg: "2rem"
  section: "clamp(5.5rem, 10vw, 9.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
    padding: "0 1.15rem"
    height: "3.1rem"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    padding: "0 1.15rem"
    height: "3.1rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "0 1.15rem"
    height: "3.1rem"
---

# Design System: Yassir Amrani Portfolio

## Overview

**Creative North Star: "The Technical Dossier"**

This is a paper-and-ink editorial portfolio built for quick professional evaluation. It uses generous white space, hard rules, dense proof blocks, and calm portrait photography to let verified engineering work read as evidence instead of marketing. The visual direction is grounded in the composition reference at `.impeccable/mocks/technical-editorial-direction.png`: a ruled editorial canvas, asymmetrical hero, article-like work record, and ledger-like supporting sections.

The interface stays deliberately flat. Near-black type carries authority; muted lavender appears only for availability, indexes, and record metadata. It avoids the discarded glass-card visual language: project work is organized as one bordered composition, not a collection of floating panels.

**Key Characteristics:**

- Paper-toned backgrounds, ink-black structure, and thin gray rules.
- Oversized Manrope headlines paired with compact DM Mono metadata.
- Evidence-first layouts: selected work, chronological record, concise supporting proof.
- A printable résumé sheet that restates the record in formal CV form and stands alone on paper.
- Quiet interaction feedback and accessible, multilingual navigation.

## Colors

The palette behaves like a printed technical report with one restrained, cool-lavender signal color.

### Primary

- **Dossier Lavender:** used for availability labels, project indices, and active/hover emphasis; it is never a page-filling background.

### Neutral

- **Warm Paper:** the default canvas for all light sections and project cells.
- **Minted Paper:** a pale alternate ground for the page gradient, the selected project treatment, and the CV section that hosts the résumé sheet.
- **Carbon Ink:** structural text, dark sections, primary actions, and high-contrast dividers.
- **Sheet White:** the near-white ground of the résumé sheet itself; the only surface lighter than Warm Paper and the closest the system comes to printed stock.
- **Index Lavender:** a muted lavender reserved for chronological indices on the dark experience ledger, where Dossier Lavender would fall below comfortable contrast.
- **Measured Gray:** secondary reading text and non-primary captions.
- **Ledger Rule:** the standard divider for sections, project grids, and archival rows.
- **Soft Ledger Rule:** the lighter mobile navigation divider and the résumé's intra-entry rule.

### Named Rules

**The Single-Signal Rule.** Use the lavender accent for metadata, selection, and interaction feedback; ink remains the dominant action and hierarchy color.

**The Sheet-on-Desk Rule.** The CV section is the one place where a lighter surface sits on a tonal ground: a Sheet White sheet with a hairline border on Minted Paper. It replaces the section rule line as the container for that block and must not gain a shadow or a larger corner treatment.

## Typography

**Display Font:** Manrope (with Arial fallback)

**Body Font:** Manrope (with Arial fallback)

**Label/Mono Font:** DM Mono (with monospace fallback)

**Delivery:** both faces are self-hosted from `public/fonts` and declared with `@font-face` in `src/index.css`; no third-party font host is contacted, which keeps CV print and PDF export deterministic. Manrope ships as a single variable file spanning `400–800`, and both faces are subset to Latin with an explicit `unicode-range`, so Arabic copy deliberately resolves to the system Arabic face rather than to a Latin fallback.

**Character:** Manrope supplies an assured, contemporary editorial voice through tight tracking and oversized headlines. DM Mono makes dates, labels, technology tags, and compact annotations feel factual and indexable rather than decorative.

### Hierarchy

- **Display:** the hero name uses the display token; the role sits as a separate, smaller lavender line beneath it.
- **Headline:** section titles use the headline token to create high-contrast wayfinding without competing with the hero.
- **Title:** project titles scale from `clamp(1.65rem, 3vw, 3.1rem)` with tight tracking; ledger and archive titles use smaller Manrope weights.
- **Body:** descriptions use relaxed `1.7` leading and stay constrained to roughly 45–57 characters where the layout permits.
- **Label:** uppercase DM Mono annotations distinguish availability, record kinds, evidence labels, dates, and technology tags.

### Named Rules

**The Evidence Label Rule.** Use mono uppercase labels only to identify proof, time, technology, or navigation state; never use them for body copy.

## Layout

The page is a single scrollable dossier with a maximum content width of `1240px` and a `min(calc(100% - 3rem), var(--max-width))` desktop container. Sections use large vertical spacing and a top ledger rule. The sticky header is compact and translucent, keeping the record accessible while preserving the reading flow. The reading order is hero → selected work → experience → engineering evidence → résumé → contact, and a 2px ink progress rule along the base of the masthead reports position within that record.

The desktop hero uses an asymmetric `1.25fr / .75fr` split for copy and portrait. Selected work is a 12-column ruled composition: the first feature spans seven columns, the second five, and the third the full width with a separate index column. The experience record is a dark two-column ledger; engineering evidence is a balanced two-column list; the résumé is a bordered sheet on Minted Paper; contact returns to a two-column close.

At `760px` and below, the system becomes a single-column document: the mobile menu drops below the header, featured projects stack, evidence proof fields stack, ledger entries lose their date/content split, and the portrait moves to the trailing edge at a contained width. RTL retains the same structural order while reversing direction-sensitive archive alignment.

### Print Layout

The résumé sheet is the document's printable artefact and owns a dedicated print stylesheet. In print, the masthead, skip link, reading-progress rule, and every section other than the CV are removed; the sheet loses its border, padding, and tonal grounds and prints black on white inside a `10mm` page margin. The two résumé columns are preserved, and `.cv-block`, `.cv-record li`, and list rows carry `break-inside: avoid` so no record is split across pages. Type in the print context steps down to a compact scale so the full résumé resolves on a single A4 page.

**Breakpoint Trap.** A4 with `10mm` margins is roughly `718px` wide, which is narrower than the `760px` mobile breakpoint — so the mobile single-column rules also match in print. Every layout rule that print depends on (`.cv-masthead`, `.cv-contact`, `.cv-toolbox`, `.cv-columns`) is therefore declared explicitly inside the print block rather than inherited. Adding a new CV block means adding its print layout here too.

## Elevation & Depth

This is a flat-by-default system. Depth comes from paper-tone changes, 1px rules, the dark experience field, and the portrait's offset lavender plate. The only soft elevation is the language menu shadow (`0 12px 24px rgba(23, 25, 26, .18)`), used to separate a temporary overlay from its document context. The sticky header uses a low-opacity paper backdrop with blur rather than a raised card.

### Named Rules

**The Printed-Page Rule.** Do not add shadows, floating containers, or frosted glass to ordinary content; divide and group information with rule lines and tonal grounds.

## Shapes

Forms are intentionally square and rectilinear. Buttons, project cells, archive rows, contact icons, and the portrait plate rely on straight edges and hairline borders. The system has no reusable corner-radius scale; the one rounded exception is the browser scrollbar thumb, which is not a product component.

## Components

### Buttons

**Character:** compact, direct, and document-like rather than pill-shaped.

- **Shape:** square corners, `3.1rem` minimum height, and inline icon-plus-label composition.
- **Primary:** Carbon Ink background with white text; on hover it shifts to Dossier Lavender.
- **Secondary:** transparent with a Carbon Ink border. It carries the résumé entry point in the hero and the "Print / Save as PDF" action on the CV.
- **Download state:** the CV PDF button is a primary action that only renders once a real PDF is published at `profile.resumeUrl`; while the file is absent the slot shows a mono status line instead, so the surface never offers a broken download.
- **Focus:** every link and button receives a `3px` Focus Green outline with a `4px` offset through `:focus-visible`.

### Tags

**Character:** technical index labels.

- **Style:** each technology tag is a DM Mono capsule in content only: thin Ledger Rule border, square geometry, and compact padding.
- **State:** static evidence labels, not filters or decorative badges.

### Cards / Containers

**Character:** ruled report cells, never floating cards.

- **Corner Style:** square.
- **Background:** Warm Paper by default; the second featured project uses a pale alternate paper tone.
- **Shadow Strategy:** none; borders and shared grid lines create containment.
- **Internal Padding:** responsive project padding from `1.3rem` to `2.4rem`.

### Navigation

**Character:** a compact editorial masthead.

- **Style:** wordmark pairs a Manrope first name with a DM Mono surname; links are small, bold, and underlined only in active/hover states.
- **CV chip:** when a CV PDF is published, the link list gains a thin-bordered "Download CV" chip that inverts to Carbon Ink on hover; on mobile it flattens back into the plain link row.
- **Reading progress:** a 2px ink rule is anchored to the base of the masthead and scales from the inline start of the document.
- **Language menu:** a semantic menu opens as a Carbon Ink overlay with white items and a lavender selected/hover state; Escape and outside pointer events close it.
- **Mobile treatment:** a semantic menu button controls the fixed, full-width link list below the header.

### Signature Components

**Featured Project Ledger.** The selected-work composition combines a numbered mono index, large project title, verified contribution/outcome definition list, technology tags, and repository/demo actions. Its three irregular spans are intentional evidence hierarchy, not a reusable card grid.

**Experience Ledger.** A dark full-width section maps period, kind, organization, title, and description into reverse-chronological ruled rows; pale lavender record labels maintain continuity with project metadata. Each row opens with a mono index in Index Lavender so the record can be cited by position.

**Résumé Sheet.** The CV section hosts a bordered Sheet White document that restates the dossier in a formal, printable structure: an identity masthead with a two-column contact grid (email, phone, location, portfolio, LinkedIn, GitHub), a profile paragraph, a core-skills matrix of four labelled groups, and a two-column body splitting experience and education from awards, certifications, languages, and soft-skill tags, closed by a mono footnote. Its content mirrors the published PDF at `public/Yassir-Amrani-CV.pdf`, which remains the authoritative full document.

**Download Slot.** The primary action of the CV section resolves at runtime: when a real PDF is published the slot becomes a Carbon Ink "Download PDF" button, and while the file is missing it degrades to a mono status line. The neighbouring print action is always present as the fallback path.

## Do's and Don'ts

### Do:

- **Do** preserve the paper/ink/rule composition and use the visual reference `.impeccable/mocks/technical-editorial-direction.png` when extending this surface.
- **Do** make the project outcome and contribution as easy to find as the project title.
- **Do** keep the résumé traceable to the same evidence as the project and experience sections; it restates the record rather than opening a new claim surface.
- **Do** re-check the résumé at A4 width after content changes, since the print stylesheet is tuned to resolve it on one page.
- **Do** keep the CV download conditional on the PDF actually existing, with the print action as the always-available path.
- **Do** preserve keyboard focus, the skip link, Escape/outside-close menu behavior, and the reduced-motion override.
- **Do** keep Arabic layouts RTL-aware while leaving Latin wordmark and caption treatment legible.

### Don't:

- **Don't** reintroduce glassmorphism, soft floating cards, gradient-filled panels, or decorative shadows.
- **Don't** add a shadow, corner radius, or gradient to the résumé sheet; its containment is a hairline border on a tonal ground.
- **Don't** introduce dates, metrics, or credentials into the résumé that are not already present in the project record.
- **Don't** use lavender as a dominant page field or replace the Carbon Ink primary action state.
- **Don't** turn archive work into equal-weight feature cards; featured work carries deliberate asymmetry.
- **Don't** hide interaction state in color alone or remove visible focus treatment.
