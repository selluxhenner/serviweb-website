# SEO Audit — www.serviweb.ch

**Date:** 2026-07-17
**Pages crawled:** 14 (11 sitemap URLs + Impressum, Datenschutz, 404 test)
**Business type:** Local service provider (Webagentur / hybrid service-area business, Ostschweiz CH, de-CH)

## SEO Health Score: 82 / 100

| Category | Score | Weight |
|---|---|---|
| Technical SEO | 78 | 22% |
| Content Quality | 80 | 23% |
| On-Page SEO | 85 | 20% |
| Schema / Structured Data | 88 | 10% |
| Performance | 70 | 10% |
| AI Search Readiness (GEO) | 95 | 10% |
| Images | 75 | 5% |

---

## What already works well

- **Prerendering:** Every route serves full static HTML (25–74 KB) — crawlers and AI bots get complete content without JavaScript. This is the single most important thing for a React SPA and it's done right.
- **Canonical hygiene:** All 4 URL variants (http/https × www/non-www) 301 directly to `https://www.serviweb.ch/`; every page has a correct self-referencing canonical.
- **Unique per-page meta:** Titles, descriptions, H1s, and OG/Twitter tags are page-specific (one exception, see findings).
- **AI search readiness:** `llms.txt` with services, prices, regions and references; robots.txt explicitly welcomes GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot; FAQPage schema on home + location pages. Best-in-class for a site this size.
- **Rich structured data:** Organization + Person (Kevin Schmid) + Place/Geo + OpeningHours + 4 Services with Offers + FAQPage + BreadcrumbList, sitewide.
- **Server speed:** TTFB ~93 ms, gzip enabled (homepage 74 KB → 14 KB), zero console errors.
- **Images:** All have descriptive alt text and `loading="lazy"`; project JPGs are 53–109 KB.
- **Sitemap:** Valid, 11 URLs, correct lastmod dates, referenced from robots.txt; noindex pages (Impressum/Datenschutz) correctly excluded.
- **Local landing pages:** Dedicated, indexable pages for Ostschweiz, Wil, Toggenburg, Thurgau, each interlinked from every page footer.

---

## Findings

### CRITICAL

#### C1. Soft-404: unknown URLs return HTTP 200 with homepage content
`GET /does-not-exist-404test` → **200 OK**, full homepage HTML, `robots: index, follow`, canonical → `/`.
The nginx SPA fallback (`try_files … /index.html`) serves the prerendered homepage for *any* path. Google will classify these as soft 404s; typo/spam URLs can get crawled and waste crawl budget, and canonical-to-home only partially mitigates it.
**Fix:** Serve a real 404. Options: (a) nginx `error_page 404` + only fall back to index.html for known routes; (b) prerender a `404.html` and use `try_files $uri /404.html =404`-style config for unknown paths; (c) at minimum have the React router render a 404 page with `noindex` — but the correct HTTP status requires the nginx fix.

### HIGH

#### H1. No Cache-Control headers on static assets
`/assets/index-fkdm2mS3.js` (483 KB) and `/assets/index-DgRoyVEn.css` (23 KB) are served **without any Cache-Control header**. Filenames are content-hashed, so they could be cached forever — instead every visit re-negotiates (ETag revalidation at best).
**Fix (nginx):**
```nginx
location /assets/ {
  add_header Cache-Control "public, max-age=31536000, immutable";
}
```

#### H2. Duplicate title: homepage vs. /webdesign-ostschweiz
Both pages use **"Webdesign & Webagentur Ostschweiz | Serviweb"**. Two indexable pages competing for the identical query = keyword cannibalization; Google may filter one out.
**Fix:** Differentiate. E.g. homepage → "Serviweb – Webdesign & App-Entwicklung Ostschweiz | Websites ab CHF 890" and keep the location page on "Webdesign & Webagentur Ostschweiz". Also differentiate og:title accordingly.

#### H3. No security headers
Response has no `Strict-Transport-Security`, `X-Content-Type-Options`, `Referrer-Policy`, or `Content-Security-Policy`. Not a direct ranking factor, but HSTS is a trust/quality signal and standard practice; `Server: nginx/1.24.0 (Ubuntu)` also discloses the version.
**Fix (nginx):**
```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
server_tokens off;
```

### MEDIUM

#### M1. Single 483 KB JavaScript bundle
One monolithic bundle; DOMContentLoaded ~2.6 s on first load (TTFB is only 93 ms — the rest is JS). Content is prerendered so SEO impact is limited, but INP/interactivity and mobile CWV suffer.
**Fix:** Route-based code splitting (`React.lazy` per route), and check bundle for heavy deps (animation libs). Enable brotli in nginx (`brotli on;`) for a further ~15–20% over gzip.

#### M2. robots.txt Disallow conflicts with noindex on /impressum and /datenschutz
Both pages carry `noindex, nofollow` **and** are Disallowed in robots.txt. Blocked crawling means Google never sees the noindex — the URLs can still appear as "indexed without content" if linked. Also, a hidden Impressum is an odd trust signal for a Swiss business.
**Fix:** Remove the two `Disallow` lines from robots.txt and rely on the meta `noindex` alone (or better: let Impressum be indexable — it's an E-E-A-T/trust page).

#### ~~M3. Root schema entity is `Organization`, not `LocalBusiness`~~ — RETRACTED
**Correction (2026-07-17):** false positive. The schema graph in `index.html` already contains a `["LocalBusiness", "ProfessionalService"]` entity (`#business`) with address, geo, opening hours, and offers, linked to the Organization. The audit's type-extraction regex missed array-form `@type` values. No change needed.

#### M4. Images: no modern formats, no intrinsic dimensions, no srcset
JPGs only (53–109 KB each; ~500 KB on /projekte), no WebP/AVIF, no `width`/`height` attributes, no responsive `srcset`. CLS risk is low (images are absolutely positioned in sized containers) but bytes are ~2× what they need to be.
**Fix:** Convert project images to WebP (e.g. `vite-imagetools` or a build step), add `width`/`height`, serve 2 sizes via `srcset`.

#### M5. No content/blog section — limited topical surface
The site has 11 pages, all commercial. There's no informational content capturing top-of-funnel queries ("Was kostet eine Website in der Schweiz", "Website für Restaurant erstellen", "Google Business Profil einrichten"). This is the biggest growth lever for both classic SEO and AI citations.
**Fix:** Add a `/blog` or `/ratgeber` hub; 1–2 German articles/month targeting Ostschweiz KMU questions; interlink to service/location pages.

### LOW

- **L1.** `Content-Type: text/html` without `; charset=utf-8` (meta tag compensates; add it in nginx anyway).
- **L2.** Google Search Console + Bing Webmaster: no verification detectable — if not yet connected, do it (free indexation + query data; Bing feeds ChatGPT search).
- **L3.** ~~`og:site_name` missing~~ — RETRACTED: it exists in `SEO.tsx:72`; the audit regex missed the underscore in the property name.
- **L4.** Hero paragraph in the a11y tree renders as "…in der Schweiz – , ohne…" during the split-text animation — cosmetic; screen readers may announce fragmented text. Consider `aria-label` on the animated paragraph.
- **L5.** Location pages share a near-identical template (~850 words each). Fine now, but add more locally unique content (local references, town names in body copy already good) to keep them from converging.

---

## Category details

### Technical (78)
Crawlable, prerendered, canonicalized, compressed, fast. Held back by the soft-404 (C1), missing caching (H1) and security headers (H3), robots conflict (M2).

### Content (80)
Good local-intent coverage, real prices (rare and good for conversions + AI answers), personal E-E-A-T (founder named everywhere, real client references with links). Held back by the duplicate-title cannibalization risk (H2) and zero informational content (M5).

### On-Page (85)
Titles 35–55 chars, descriptions 120–160 chars, one H1 per page, breadcrumb schema on inner pages, footer interlinking of all location pages from every page.

### Schema (88)
Comprehensive graph on every page. Upgrade root type (M3); consider adding `Review`/`AggregateRating` if you collect client reviews, and `Service` → `areaServed` is already present.

### Performance (70)
TTFB 93 ms / gzip / lazy images vs. 483 KB JS, no asset caching, no brotli, JPG-only images. Lab-only measurement (no CrUX field data available for this audit).

### AI Readiness (95)
llms.txt, explicit AI-bot allows, FAQPage schema, entity-rich content, prices in plain text. Only gap: no citable informational content (M5).

### Images (75)
Alt + lazy ✓; formats, dimensions, srcset ✗ (M4).
