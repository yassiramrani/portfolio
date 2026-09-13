# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are recruiters and hiring managers evaluating Yassir Amrani for full-stack engineering roles. They need to understand his role fit, project ownership, technical range, and a direct way to download a CV or start a conversation.

## Product Purpose

This portfolio presents Yassir's verified engineering work, experience, awards, and contact paths in a concise recruiter-facing format. Success means a recruiter can identify his full-stack fit, assess his strongest work, and contact him within a single visit.

## Positioning

The portfolio pairs React/FastAPI and Laravel-based product work with documented hackathon recognition, engineering internships, and technical community leadership.

## Operating Context

Recruiters commonly review the site quickly on desktop or mobile, open project repositories or demonstrations, download a CV, and use email or LinkedIn to contact Yassir. The site supports English, French, and Arabic.

## Capabilities and Constraints

- React, TypeScript, Vite, and static deployment.
- English, French, and Arabic with right-to-left Arabic layout.
- Claims must remain factual and verifiable; no invented metrics, testimonials, or project outcomes.
- A factual CV PDF now ships at `public/Yassir-Amrani-CV.pdf`; factual screenshots for VoiceLegacy, PetyPlant, and Wijha are still outstanding.
- The CV section renders the résumé in all three languages and prints to a single A4 page; the PDF download button resolves at runtime and only appears while `public/Yassir-Amrani-CV.pdf` exists.

## Brand Commitments

Use the name Yassir Amrani, existing GitHub and LinkedIn profiles, and an assured technical-editorial voice. Replace the incumbent dark glass visual identity.

## Evidence on Hand

- Project descriptions and repository links in `src/components/Projects.tsx`.
- Experience and recognition descriptions in `src/components/Roadmap.tsx`.
- Résumé content in `src/data/portfolio.ts` (`cvToolbox`, `cvEducation`, `cvLanguages`, `cvSoftSkills`) and `src/locales/*/translation.json` under `cv`.
- Portrait at `public/me.jpeg`.
- CV PDF at `public/Yassir-Amrani-CV.pdf` (1 page, French, dated 01/2024–present study record).
- Retired: `cv_yassir.pdf` at the repository root is a 0-byte placeholder and is not deployed.

## Open Discrepancies

The published CV and the older site copy disagree on several facts. The CV section currently follows the CV; the project and experience sections still carry the earlier values. These must be reconciled with Yassir before the site is treated as accurate:

- **Positioning:** the CV describes a second-year engineering student seeking a position; the site markets "Full-stack Engineer".
- **English level:** CV states C1 (EF SET); the evidence section states C2 Proficient.
- **Guidini award:** CV attributes a 2nd prize at the LSInnovXTech competition; the experience section attributes a 2nd prize at Hackathon IA & Villes Résilientes 2030.
- **InfraGuard:** the CV credits it with a 2nd prize at Hackathon AI & Villes Résilientes 2030; the site lists it as an archive project with no recognition.
- **VoiceLegacy:** CV cites an AgorAI Hackathon 1st prize; the site cites top-20 at The Merge Hackathon 2026.
- **Lear internship:** CV states 09/2024–10/2024; the experience section states Jul–Aug 2024.
- **Certifications:** the two lists are entirely different (CV: Coursera JavaScript, PHP, C++ and Oracle Java SE 17).
- **Not on the CV:** the HapPlant and PetyPlant prizes and the cybersecurity workshop do not appear in the CV.
- **Not on the site:** the LOOP AI project coaching role, the PFA recruitment platform, and soft skills appear only in the CV.

## Product Principles

- Lead with concrete evidence rather than a broad skills inventory.
- Make the strongest projects understandable in seconds.
- Keep every language and interaction equally usable.
- Provide a frictionless path to the CV and direct contact.
