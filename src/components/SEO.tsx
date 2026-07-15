import { Helmet } from 'react-helmet-async'
import {
  SITE,
  breadcrumbSchema,
  faqSchema,
  webPageSchema,
  type Crumb,
  type Faq,
} from '../lib/seo'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  noIndex?: boolean
  /** Breadcrumb trail (Home is added automatically) → BreadcrumbList JSON-LD + helps AEO. */
  breadcrumbs?: Crumb[]
  /** Q&A pairs → FAQPage JSON-LD (rich results + quotable by ChatGPT/Gemini/Claude/Perplexity). */
  faq?: Faq[]
  /** Any additional JSON-LD nodes (e.g. Service) to inject for this route. */
  jsonLd?: Array<Record<string, unknown>>
}

const SITE_NAME = SITE.name
const BASE_URL = SITE.url
const DEFAULT_OG_IMAGE = SITE.ogImage
const DEFAULT_KEYWORDS =
  'Webdesign Ostschweiz, Webagentur Ostschweiz, Webdesign St. Gallen, Website erstellen lassen Ostschweiz, Webentwickler Ostschweiz, Webdesign Wil, Webagentur Wil, React Webentwicklung Schweiz, Next.js Agentur Schweiz, Serviweb'

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noIndex = false,
  breadcrumbs,
  faq,
  jsonLd,
}: SEOProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} – Webdesign & Webagentur Ostschweiz`
  const fullCanonical = canonical ? `${BASE_URL}${canonical}` : undefined

  // Assemble per-route structured data. The Organization / LocalBusiness / WebSite
  // entity graph lives in index.html (served to non-JS crawlers); here we add the
  // page-specific nodes that depend on the route.
  const nodes: Array<Record<string, unknown>> = []
  if (canonical && title) {
    nodes.push(webPageSchema({ name: fullTitle, description: description ?? '', url: canonical }))
  }
  if (breadcrumbs?.length) nodes.push(breadcrumbSchema(breadcrumbs))
  if (faq?.length) nodes.push(faqSchema(faq))
  if (jsonLd?.length) nodes.push(...jsonLd)

  return (
    <Helmet>
      <html lang="de-CH" />
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta name="keywords" content={keywords ?? DEFAULT_KEYWORDS} />
      <meta name="author" content="Kevin Schmid – Serviweb" />
      <meta name="geo.region" content="CH-SG" />
      <meta name="geo.placename" content="St. Gallen, Ostschweiz" />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={`${SITE_NAME} – ${title ?? 'Webdesign & Webagentur Ostschweiz'}`} />
      <meta property="og:locale" content="de_CH" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />

      {/* Per-route JSON-LD */}
      {nodes.map((node, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(node)}
        </script>
      ))}
    </Helmet>
  )
}
