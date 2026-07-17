# Action Plan — www.serviweb.ch (2026-07-17)

> **Execution status (2026-07-17):** Items 1–6 executed in the repo where possible.
> - ✅ Done in code (rebuilt, in `dist/`): homepage title de-duplicated (#4), robots.txt Disallow removed (#5), 404 page created + prerendered to `dist/404.html` (#1, app side), noindex changed to `noindex, follow`.
> - 📄 Ready to deploy: [`deploy/nginx-serviweb.conf`](../deploy/nginx-serviweb.conf) covers #1 (404 status), #2 (asset caching), #3 (security headers). Apply on the Ubuntu server: merge into the site config, `sudo nginx -t && sudo systemctl reload nginx`, then upload the fresh `dist/`.
> - ❌ Retracted (false positives — already implemented): #6 schema type (`LocalBusiness` entity already in index.html), og:site_name.
> - ⏭️ Needs your accounts: #7 GSC/Bing verification. Deferred: #8 blog, #9 code splitting (React.lazy breaks `renderToString` prerendering — needs a Suspense-aware SSG setup first), #10 WebP.

## Phase 1: Critical fixes (this week) — all nginx config, ~1h total

1. **[C1] Real 404s** — unknown paths currently return 200 + homepage. Restrict the SPA fallback to known routes and return 404 with a proper error page otherwise.
2. **[H1] Asset caching** — `Cache-Control: public, max-age=31536000, immutable` on `/assets/` (content-hashed files).
3. **[H3] Security headers** — HSTS, X-Content-Type-Options, Referrer-Policy; `server_tokens off`.

## Phase 2: High-impact (weeks 2–3)

4. **[H2] De-duplicate homepage vs. /webdesign-ostschweiz title** — give the homepage a brand+offer title, leave "Webdesign & Webagentur Ostschweiz" to the location page. Update og:title/twitter:title too.
5. **[M2] robots.txt** — remove `Disallow: /impressum` and `/datenschutz`; rely on meta noindex (or make Impressum indexable for trust).
6. **[M3] Schema type** — root entity `Organization` → `["ProfessionalService","LocalBusiness"]`; validate with Rich Results Test.
7. **[L2] Verify Google Search Console + Bing Webmaster Tools** if not already done; submit sitemap.

## Phase 3: Content & performance (month 2)

8. **[M5] Start a Ratgeber/Blog** — 1–2 German articles/month for Ostschweiz KMU ("Was kostet eine Website?", "Website für Restaurants", "Google Business Profil einrichten"). Biggest organic growth lever; also feeds AI citations.
9. **[M1] Code-split the 483 KB bundle** — `React.lazy` per route; enable brotli in nginx.
10. **[M4] WebP images + width/height + srcset** for project images.

## Phase 4: Ongoing

11. Monthly: GSC coverage + query report; watch for soft-404 reports disappearing after Phase 1.
12. Collect client reviews → add `AggregateRating` schema once you have 3+.
13. Keep sitemap `lastmod` accurate when pages change (currently accurate).
14. Re-audit in ~3 months to track the score (baseline: 82/100).
