# ServiWeb — SEO / GEO / AEO Audit & Implementation Report

**Site:** https://www.serviweb.ch · **Stack:** Vite + React 18 (client-only SPA) + React Router + react-helmet-async + Tailwind
**Audited & implemented:** 2026-06-18 · **Auditor:** `seo-audit` skill
**Goal:** rank locally for Webdesign/Webagentur in Ostschweiz, Wil & Toggenburg, plus React/Next.js terms; make **ServiWeb** a searchable brand entity.

---

## 1. SEO Score

| | Score |
|---|---|
| **Baseline (before this audit)** | **52 / 100** |
| **After implementation in this PR** | **76 / 100** |
| **Projected after roadmap (prerender + images + GBP + backlinks)** | **88–92 / 100** |

### Per-dimension (after implementation)

| Dimension | Weight | Before | After | Note |
|---|---|---|---|---|
| Technical SEO | 18 | 55 | 65 | Robots now name AI bots, icons fixed, hydration-ready. **Still a client-only SPA → prerender pending (capped).** |
| On-page SEO | 14 | 60 | 82 | 3 keyword-targeted location pages, broadened titles, FAQ copy, React/Next.js terms. |
| Local SEO | 12 | 45 | 72 | areaServed expanded (Wil/Toggenburg/Thurgau/Appenzell), city pages, Service areaServed. Capped: no GBP/street address. |
| Schema.org | 12 | 50 | 90 | Full connected `@graph`: Organization · LocalBusiness · Person · WebSite + Breadcrumb + FAQ + Service + WebPage. |
| GEO/AEO | 12 | 35 | 80 | `llms.txt`, FAQPage on every key page, extractable lead answers, entity clarity. Capped until prerender (non-JS AI bots). |
| Metadata | 8 | 70 | 82 | Per-route title/desc/OG/Twitter, `og:image:alt`, `max-image-preview:large`. Capped: `og-image.jpg` file missing. |
| Heading structure | 6 | 75 | 82 | Single H1/page, semantic H2/H3 in FAQ & location pages. |
| Internal linking | 8 | 45 | 85 | Dead `#kontakt`/`#ueber-mich` anchors fixed, footer routes, keyword-anchored region links, breadcrumbs. |
| Core Web Vitals | 6 | 40 | 45 | **Unchanged blocker:** 20+ unoptimized PNGs (1–3 MB each) + 498 KB JS. See issue #2. |
| Brand entity | 4 | 40 | 70 | Organization node, Person, slogan, alternateName, knowsAbout. Capped: `sameAs` still empty. |

---

## 2. Top 20 Issues (sorted by impact)

| # | Issue | Dim. | Impact | Effort | Status |
|---|---|---|---|---|---|
| 1 | **Client-only SPA** — crawlers/AI bots receive an empty `<div id="root">`; content only exists after JS runs. AI engines (GPTBot/ClaudeBot/PerplexityBot) largely don't execute JS. | Technical/GEO | 🔴 High | M | ⚙️ Prerender wired as opt-in (`build:static`) — **deploy required** |
| 2 | **Huge unoptimized images** — 20+ PNGs 1–3 MB (e.g. `arts.png` 3.0 MB) bundled; kills LCP/CWV on `/projekte`. | CWV | 🔴 High | M | ⏳ Roadmap (convert to WebP/AVIF + responsive) |
| 3 | **No pages for target keywords** (Ostschweiz/Wil/Toggenburg, "webagentur"). | On-page/Local | 🔴 High | M | ✅ Fixed — 3 location pages |
| 4 | **Dead internal links** — `#kontakt` matches no element anywhere; `#ueber-mich` doesn't exist; footer hash links break on sub-routes. | Internal links | 🟠 High | S | ✅ Fixed |
| 5 | **Empty `sameAs`** on every entity → no brand/knowledge-graph signal. | Brand | 🟠 High | S | 🔧 Config slot ready — **add real profiles** |
| 6 | **Thin structured data** — only LocalBusiness + WebSite; no Organization, Breadcrumb, FAQ, Service. | Schema | 🟠 High | M | ✅ Fixed — full graph |
| 7 | **No `llms.txt`** — nothing guiding AI answer engines. | GEO/AEO | 🟠 High | S | ✅ Fixed |
| 8 | **No FAQ / extractable answers** — nothing for featured snippets or AI quoting. | AEO | 🟠 High | M | ✅ Fixed (home + 3 location pages) |
| 9 | **`og-image.jpg` referenced but missing** → broken social/AI link previews. | Metadata | 🟠 Med | S | ⏳ Asset to create (1200×630) |
| 10 | **`icon.svg` / `apple-icon.png` referenced but absent**; favicons sat in non-served `src/public`. | Technical | 🟡 Med | S | ✅ Fixed (added `public/icon.svg`, copied PNG/ICO) |
| 11 | **Brand under-targeted** — "Webagentur" barely used; titles St. Gallen-only. | On-page/Brand | 🟠 Med | S | ✅ Fixed (titles, copy, graph) |
| 12 | **No street address / NAP incomplete** for LocalBusiness; GBP not linked. | Local | 🟠 Med | S | 🔧 Add when available + create/verify Google Business Profile |
| 13 | **areaServed too narrow** (St. Gallen/Ostschweiz/CH only). | Local | 🟡 Med | S | ✅ Fixed (Wil, Toggenburg, Thurgau, Appenzell) |
| 14 | **No BreadcrumbList** schema or visible breadcrumbs. | Schema/UX | 🟡 Med | S | ✅ Fixed |
| 15 | **No Person entity** for Kevin Schmid (E-E-A-T). | Brand | 🟡 Med | S | ✅ Fixed (`#kevin-schmid`, expand `sameAs`) |
| 16 | **Backlink/citation profile** unknown/thin — no local directories. | Off-page | 🟠 Med | M | ⏳ Roadmap (local.ch, search.ch, etc.) |
| 17 | **498 KB JS** single chunk, no code-splitting/lazy routes. | CWV | 🟡 Med | M | ⏳ Roadmap (`React.lazy` per route) |
| 18 | **No analytics / Search Console** evidence (can't measure). | Measurement | 🟡 Med | S | ⏳ Roadmap (GSC + Plausible/GA4) |
| 19 | **Sitemap stale** (`lastmod` 2026-04-26, missing new pages). | Technical | 🟡 Low | S | ✅ Fixed |
| 20 | **Non-Swiss spelling** ("ß" in meta) — DACH polish. | On-page | 🟢 Low | S | ✅ Fixed in touched files (sweep remaining) |

Legend: ✅ done · ⚙️ wired, needs deploy · 🔧 needs your data · ⏳ roadmap

---

## 3. Exact code changes (implemented)

| File | Change |
|---|---|
| `src/lib/seo.ts` *(new)* | Central NAP/entity config + schema builders (breadcrumb, FAQ, Service, WebPage). |
| `src/components/SEO.tsx` | Per-route JSON-LD injection (WebPage/Breadcrumb/FAQ/custom), `og:image:alt`, robots `max-image-preview:large`, keyword defaults shifted to Ostschweiz/Webagentur. |
| `src/components/Breadcrumbs.tsx` *(new)* | Accessible visible breadcrumb trail. |
| `src/components/FAQ.tsx` *(new)* | Accessible FAQ accordion (answers crawlable). |
| `src/data/locations.ts` *(new)* | Ostschweiz / Wil / Toggenburg content + FAQs + areaServed. |
| `src/pages/LocationPage.tsx` *(new)* | Location landing template (H1 + extractable lead, services, region, FAQ, Service+FAQ+Breadcrumb schema, internal links). |
| `src/App.tsx` | Routes `/webdesign-ostschweiz`, `/webdesign-wil`, `/webdesign-toggenburg`. |
| `src/pages/Home.tsx` | Brand-entity FAQ section + FAQPage schema; title → "Webdesign & Webagentur Ostschweiz". |
| `src/components/Footer.tsx` | Hash anchors → real routes; brand link fixed; new keyword-anchored **Regionen** column. |
| `src/components/Services.tsx`, `Pricing.tsx` | Dead `#kontakt` anchors → `<Link to="/leistungen">` / `/kontakt`. |
| `src/pages/ServicesPage.tsx`, `ContactPage.tsx` | Breadcrumbs (schema + UI), broadened keywords, Swiss spelling. |
| `index.html` | Broadened title/description/OG; **single connected entity `@graph`** (Organization·LocalBusiness·Person·WebSite); fixed icon links. |
| `src/main.tsx` | Hydration-safe mount (`hydrateRoot` if pre-rendered, else `createRoot`). |
| `public/robots.txt` | Explicit allow for GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, PerplexityBot, Google-Extended, Applebot. |
| `public/sitemap.xml` | New location pages, refreshed `lastmod`. |
| `public/llms.txt` *(new)* | Brand summary, services, regions, prices, key pages, referenced facts for AI engines. |
| `public/icon.svg` *(new)*, `icon-light-32x32.png`, `favicon.ico` | Real served favicon assets. |
| `package.json` | Opt-in `build:static` (react-snap) + `reactSnap` config + devDependency. |

> ✅ `npm run build` passes (tsc + vite). Also removed one pre-existing dead-code line in `Hero.tsx` (`contentOpacity`) that was blocking the build.

---

## 4. Still required (your input / deploy)

### Missing pages / content
- **Future location pages** (high ROI next): `/webdesign-thurgau`, `/webagentur-st-gallen` (dedicated), `/webdesign-gossau`, `/webdesign-wattwil`. Same template — just add to `src/data/locations.ts`.
- **Blog / guides** for informational + AEO terms: "Was kostet eine Website in der Schweiz?", "Website für Restaurants", "React vs. Baukasten". Each = a quotable AEO asset.
- **`/ueber-mich` (About)** page — strengthens the Person/E-E-A-T entity (referenced in old footer, never existed).

### Missing schema (add when data exists — never fabricate)
- `Review` / `AggregateRating` once you have real client reviews.
- `ImageObject` for project case studies; `CreativeWork`/`WebSite` per referenced client.

### Missing brand/entity & backlink signals
- **Fill every `sameAs: []`** (in `index.html` graph + `src/lib/seo.ts`) with real LinkedIn, Instagram, GitHub, and Google Business Profile URLs.
- **Create the `og-image.jpg`** (1200×630, brand + "Webdesign & Webagentur Ostschweiz") at `public/og-image.jpg`.
- **Local citations:** local.ch, search.ch, moneyhouse, herold.ch, kmu.admin listings — consistent NAP.
- **Backlinks:** "Website by ServiWeb" footer link on every client site (vision-wil.ch, trinkstubezumhartz.ch, ilge-pianobar.ch …), local/industry directories, guest content.

### Missing local SEO signals
- **Google Business Profile** (the single biggest local lever) — create, categorize "Webdesigner", add service area, photos, posts; then link it in `sameAs`.
- Complete **NAP** with a real (or service-area) address.
- Generate **reviews** on GBP (then add AggregateRating schema).

### Deploy steps
1. `npm install` (pulls `react-snap`), then `npm run build:static` to pre-render → ship `dist/`. *(Needs a Chromium download; run in CI/local, not in a locked sandbox.)*
2. Add `public/og-image.jpg`.
3. Fill `sameAs` arrays; redeploy.
4. Submit `sitemap.xml` in Google Search Console + Bing Webmaster Tools.

---

## 5. 6-Month SEO Roadmap

**Month 1 — Foundation & deploy.** Ship this PR. Deploy `build:static` prerender. Create `og-image.jpg`. Set up Google Search Console + Bing + a lightweight analytics (Plausible/GA4). Create & verify **Google Business Profile**. Fill `sameAs`. Submit sitemap.

**Month 2 — Local & citations.** Build NAP citations (local.ch, search.ch, moneyhouse, herold). Add GBP posts/photos. Convert project images to WebP/AVIF + responsive `srcset` (fixes CWV). Add `React.lazy` route splitting.

**Month 3 — Content depth.** Add `/ueber-mich`, `/webdesign-thurgau`, `/webagentur-st-gallen`. Launch a blog with 3 cornerstone guides (Website-Kosten Schweiz; Website für Restaurants; React/Next.js vs. Baukasten) — each with FAQPage + extractable answers.

**Month 4 — Authority & backlinks.** Add "Website by ServiWeb → serviweb.ch" credit links on all client sites. Pursue 5–10 local/industry directory + partner links. Publish 2 case studies (with client permission) as `CreativeWork`.

**Month 5 — Reviews & AEO.** Collect Google reviews (→ AggregateRating schema). Expand FAQs across pages. Test prompts in ChatGPT/Gemini/Claude/Perplexity ("Webagentur Ostschweiz?") and tune `llms.txt` + on-page answers to what they cite.

**Month 6 — Measure & iterate.** Review GSC: impressions/clicks/positions per target keyword. Double down on pages ranking p.2 → p.1 (more content, internal links). Add the next 2–3 location pages based on demand. Re-run this `seo-audit`.

---

## 6. Top 30 Target Keywords

> Volumes are **rough CH/month estimates** (no live keyword-tool data was queried) — treat as relative priority, validate in GSC/Keyword Planner.

| # | Keyword | Intent | Difficulty | Est. vol/mo | Traffic potential | Target page |
|---|---|---|---|---|---|---|
| 1 | webdesign ostschweiz | Commercial | Med | ~140 | High | /webdesign-ostschweiz |
| 2 | webagentur ostschweiz | Commercial | Med | ~110 | High | /webdesign-ostschweiz |
| 3 | webdesign st. gallen | Commercial | Med-High | ~210 | High | / · /webdesign-ostschweiz |
| 4 | webagentur st. gallen | Commercial | Med-High | ~170 | High | / (future dedicated page) |
| 5 | website erstellen lassen ostschweiz | Transactional | Med | ~50 | High | /webdesign-ostschweiz |
| 6 | webentwickler ostschweiz | Commercial | Low-Med | ~40 | Med | /webdesign-ostschweiz |
| 7 | webdesign wil | Commercial | Low-Med | ~40 | Med | /webdesign-wil |
| 8 | webagentur wil | Commercial | Low | ~20 | Med | /webdesign-wil |
| 9 | webdesign toggenburg | Commercial | Low | ~10–20 | Med | /webdesign-toggenburg |
| 10 | webagentur toggenburg | Commercial | Low | ~10 | Low-Med | /webdesign-toggenburg |
| 11 | react webentwicklung schweiz | Commercial | Med | ~30 | Med | /leistungen |
| 12 | nextjs agentur schweiz | Commercial | Med | ~20 | Med | /leistungen |
| 13 | website erstellen st. gallen | Transactional | Med | ~70 | High | /kontakt · / |
| 14 | homepage erstellen lassen schweiz | Transactional | Med | ~140 | Med | /leistungen |
| 15 | webdesigner st. gallen | Commercial | Med | ~50 | Med | / |
| 16 | was kostet eine website schweiz | Informational | Med | ~210 | Med | Blog/FAQ (Month 3) |
| 17 | website kosten schweiz | Informational | Med | ~170 | Med | Blog/FAQ |
| 18 | app entwicklung ostschweiz | Commercial | Low | ~20 | Med | /leistungen#app |
| 19 | react native agentur schweiz | Commercial | Med | ~20 | Med | /leistungen#app |
| 20 | restaurant website erstellen | Transactional | Med | ~90 | Med | /webdesign-ostschweiz |
| 21 | webdesign thurgau | Commercial | Med | ~90 | Med | future /webdesign-thurgau |
| 22 | webagentur thurgau | Commercial | Med | ~70 | Med | future /webdesign-thurgau |
| 23 | seo ostschweiz | Commercial | Med | ~40 | Med | /leistungen#seo |
| 24 | günstige webagentur schweiz | Commercial | Med | ~50 | Med | /leistungen |
| 25 | kleine website erstellen lassen | Transactional | Low-Med | ~40 | Med | /leistungen |
| 26 | webdesign gossau | Commercial | Low | ~20 | Low-Med | future page |
| 27 | webdesign wattwil | Commercial | Low | <10 | Low | /webdesign-toggenburg |
| 28 | webdesign appenzell | Commercial | Low | ~20 | Low-Med | future page |
| 29 | online shop erstellen schweiz | Transactional | High | ~170 | Med | /leistungen |
| 30 | **serviweb** | Navigational/Brand | Low | low (grows) | High | / |

---

## 7. Brand-building — make "ServiWeb" rank for its own name

A brand only becomes "searchable" when it's a recognised **entity** with consistent signals and external mentions. Priority order:

1. **Google Business Profile** named exactly "ServiWeb" (category: Webdesigner) — the strongest brand-name signal; enables a Knowledge Panel.
2. **Consistent NAP everywhere** — same "ServiWeb", phone, region across site, GBP, directories, socials. (Schema already uses one `@id` graph + `alternateName`.)
3. **Fill `sameAs`** with real LinkedIn (company + Kevin Schmid), Instagram, GitHub, GBP — the explicit "these are all ServiWeb" links search/AI engines follow.
4. **Branded backlinks** — "Website by **ServiWeb**" credit on every client site (anchor = brand). Cheapest, most on-brand link source you already control.
5. **Directory listings** — local.ch, search.ch, moneyhouse, kmu portals; industry lists of Swiss web agencies.
6. **Content that names the brand** — case studies, an `/ueber-mich` story, occasional posts. Mentions (even unlinked) build entity strength.
7. **Reviews** on GBP — volume + recency reinforce the entity and unlock star rich results.
8. **Wikidata entry** (once notable: real address, a few citations) — a strong knowledge-graph anchor.
9. **AEO loop** — periodically ask ChatGPT/Gemini/Claude/Perplexity "Was ist ServiWeb?" / "Webagentur Ostschweiz"; keep `llms.txt` and on-page FAQ answers aligned with how you want to be described.

> The `llms.txt`, FAQ "Was ist ServiWeb?", Organization+Person graph, and `alternateName: "ServiWeb Webagentur Ostschweiz"` shipped in this PR are the on-site half. Items 1, 3, 4, 7 (off-site) are now the highest-leverage next actions.
