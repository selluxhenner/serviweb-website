# ServiWeb — SEO / GEO / AEO Re-Audit (#2)

**Site:** https://www.serviweb.ch · **Stack:** Vite + React 18 (client-only SPA) + React Router + react-helmet-async + Tailwind
**Re-audited & patched:** 2026-06-18 (follow-up to `SEO-AUDIT.md`) · **Auditor:** `seo-audit` skill
**Trigger:** brand `sameAs` profiles were added to `src/lib/seo.ts` after audit #1.

---

## 1. SEO Score

| | Score |
|---|---|
| Audit #1 baseline | 52 / 100 |
| Audit #1 after implementation | 76 / 100 |
| **Audit #2 (now)** | **77 / 100** |
| Projected after roadmap (prerender + images + GBP + backlinks) | 88–92 / 100 |

> The score barely moved (+1) **on purpose** — the two real `sameAs` profiles only touch the 4%-weighted Brand-entity dimension. The score is still gated by two un-deployed high-weight blockers: **prerendering** (Technical 18%) and **image weight** (CWV 6%). Until those ship, the ceiling is ~78.

### Per-dimension (Δ vs audit #1)

| Dimension | Weight | #1 → #2 | Note |
|---|---|---|---|
| Technical SEO | 18 | 65 → 65 | Unchanged. Still client-only SPA; `react-snap` declared but **not installed / not deployed**. |
| On-page SEO | 14 | 82 → 82 | Unchanged. |
| Local SEO | 12 | 72 → 72 | Unchanged. GBP still not linked/created. |
| Schema.org | 12 | 90 → 92 | `sameAs` now populated on Organization + LocalBusiness + Person in `index.html`. |
| GEO/AEO | 12 | 80 → 80 | Unchanged. |
| Metadata | 8 | 82 → 82 | Unchanged. `og-image.jpg` still missing. |
| Heading structure | 6 | 82 → 82 | Unchanged. |
| Internal linking | 8 | 85 → 85 | Unchanged. |
| Core Web Vitals | 6 | 45 → 45 | Unchanged. Images still 1–3 MB each. |
| Brand entity | 4 | 70 → 80 | Instagram + GitHub now live in the entity graph. Capped: no GBP / LinkedIn / Wikidata. |

---

## 2. What this re-audit found & fixed

### 🔴 New finding (now fixed): `sameAs` was added but had **zero live effect**
- The profiles were added to `SITE.sameAs` in `src/lib/seo.ts:32`, **but `SITE.sameAs` is referenced nowhere in `src/`** (verified: no matches for `.sameAs`). It was dead config.
- The entity graph crawlers and non-JS AI bots actually read is the **static `index.html`**, where all three `"sameAs"` arrays were still `[]`.
- **Fix applied:** propagated the two real profiles into `index.html` → Organization, LocalBusiness, and Person nodes. Verified present in `dist/index.html` after `npm run build` (green).
- **Fix applied:** updated the `src/lib/seo.ts` comment to state it's the documented source of truth that **must be mirrored into `index.html`** until the site is pre-rendered (then the static graph can be replaced by a single injected one).

| Profile | Used | Where |
|---|---|---|
| `https://www.instagram.com/serviweb.ch` | ✅ live | index.html (Org, LocalBusiness, Person) + seo.ts |
| `https://github.com/selluxhenner` | ✅ live | index.html (Org, LocalBusiness, Person) + seo.ts |

> Treated as truthful per your edit. `github.com/selluxhenner` reads as a personal handle — if it's Kevin's, it's correctly placed on the **Person** node (it is); if there's also a dedicated ServiWeb/company GitHub or org, add it to the Organization node too.

### No regressions detected
All audit-#1 implementations are intact: entity graph, location pages, breadcrumbs, FAQ schema, internal-link fixes, robots/sitemap/llms.txt, hydration-safe entry. Build still passes (tsc + vite, 441 modules).

---

## 3. Top open issues (sorted by impact) — unchanged from #1, still pending

| # | Issue | Dim. | Impact | Status / next action |
|---|---|---|---|---|
| 1 | **Client-only SPA, no prerender deployed** — AI bots & first-pass crawlers see an empty root. | Technical/GEO | 🔴 High | `react-snap` is wired but **not installed**. Run `npm install` then `npm run build:static`, deploy that `dist/`. |
| 2 | **Images 1–3 MB each** (e.g. `arts.png` 3.0 MB) — kills LCP on `/projekte`. | CWV | 🔴 High | Convert to WebP/AVIF + responsive `srcset`; lazy-load below-fold. |
| 3 | **`og-image.jpg` missing** — broken social/AI link previews (referenced in `index.html` + `seo.ts`). | Metadata | 🟠 Med | Create `public/og-image.jpg` (1200×630). |
| 4 | **No Google Business Profile** linked/created. | Local/Brand | 🟠 High | Create GBP "ServiWeb" (cat. Webdesigner); then add its URL to all `sameAs`. |
| 5 | **Brand `sameAs` still thin** — only IG + GitHub. | Brand | 🟡 Med | Add LinkedIn (company + Kevin), GBP, later Wikidata. |
| 6 | **No backlinks / citations** strategy executed. | Off-page | 🟠 Med | "Website by ServiWeb" links on client sites; local.ch / search.ch / moneyhouse listings. |
| 7 | **498 KB single JS chunk**, no route splitting. | CWV | 🟡 Med | `React.lazy` per route. |
| 8 | **No analytics / Search Console** connected. | Measurement | 🟡 Med | Add GSC + Bing + Plausible/GA4; submit sitemap. |

There are no new on-site code issues beyond the `sameAs` divergence fixed above. The full roadmap, top-30 keyword table, and brand-building plan from **`SEO-AUDIT.md` (audit #1) remain current** — nothing there has changed.

---

## 4. Single highest-leverage next step

**Deploy a pre-rendered build.** Everything else (schema, location pages, FAQ, llms.txt, the `sameAs` you just added) is *invisible to non-JS AI crawlers and weaker for Google* until static HTML per route exists:

```bash
cd serviweb
npm install              # pulls react-snap (declared in package.json)
npm run build:static     # build + prerender all routes in reactSnap.include
# deploy the resulting dist/
```

That one action is what unlocks the jump from 77 → ~88. Then create `og-image.jpg`, set up Google Business Profile, and the score moves into the low 90s.
