// Central SEO / GEO / AEO configuration and Schema.org (JSON-LD) builders for Serviweb.
// One source of truth for NAP, entity ids and structured-data graphs so titles,
// metadata and schema stay consistent across every route.

export const SITE = {
  name: 'Serviweb',
  legalName: 'Serviweb – Kevin Schmid',
  url: 'https://www.serviweb.ch',
  logo: 'https://www.serviweb.ch/logo.png',
  ogImage: 'https://www.serviweb.ch/og-image.jpg',
  email: 'info@serviweb.ch',
  phone: '+41795350603',
  phoneDisplay: '+41 79 535 06 03',
  founder: 'Kevin Schmid',
  founderTitle: 'Webentwickler & Webdesigner',
  addressRegion: 'St. Gallen',
  addressCountry: 'CH',
  geo: { lat: 47.4245, lng: 9.3767 },
  inLanguage: 'de-CH',
  priceRange: 'CHF 890 – CHF 9000',
  // Stable @id anchors — reused across every JSON-LD node so search/AI engines
  // can merge them into a single entity.
  ids: {
    org: 'https://www.serviweb.ch/#organization',
    business: 'https://www.serviweb.ch/#business',
    website: 'https://www.serviweb.ch/#website',
    founder: 'https://www.serviweb.ch/#kevin-schmid',
  },
  // ⚠️ BRAND ENTITY — list of real public profiles for the knowledge graph.
  // IMPORTANT: this is the documented source of truth, but the entity graph that
  // crawlers (and non-JS AI bots) actually read lives in /index.html. Until the
  // site is pre-rendered, you MUST mirror any change here into the three "sameAs"
  // arrays in index.html (Organization, LocalBusiness, Person). Do NOT invent URLs.
  sameAs: [
    // 'https://www.linkedin.com/company/serviweb',
    'https://www.instagram.com/serviweb.ch',
    'https://github.com/selluxhenner',
    // 'https://www.google.com/maps/place/?q=place_id:YOUR_GBP_PLACE_ID',
  ] as string[],
  areasServed: [
    'St. Gallen', 'Wil SG', 'Toggenburg', 'Ostschweiz',
    'Thurgau', 'Appenzell', 'Wattwil', 'Lichtensteig', 'Schweiz',
  ],
} as const

export interface Crumb { name: string; url: string }
export interface Faq { question: string; answer: string }

const abs = (path: string) => (path.startsWith('http') ? path : `${SITE.url}${path}`)

/** BreadcrumbList for a route. Pass page paths ("/leistungen") — Home is prepended. */
export function breadcrumbSchema(items: Crumb[]) {
  const all: Crumb[] = [{ name: 'Startseite', url: '/' }, ...items]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.url),
    })),
  }
}

/** FAQPage from question/answer pairs — eligible for FAQ rich results and quoted by AI engines. */
export function faqSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}

/** A single Service offered, linked back to the business entity and scoped to an area. */
export function serviceSchema(opts: {
  name: string
  description: string
  url: string
  areaServed?: string[]
  serviceType?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    serviceType: opts.serviceType ?? opts.name,
    description: opts.description,
    url: abs(opts.url),
    provider: { '@id': SITE.ids.business },
    areaServed: (opts.areaServed ?? [...SITE.areasServed]).map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
  }
}

/** WebPage node tying a page to the site + primary image (helps entity association). */
export function webPageSchema(opts: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${abs(opts.url)}#webpage`,
    url: abs(opts.url),
    name: opts.name,
    description: opts.description,
    inLanguage: SITE.inLanguage,
    isPartOf: { '@id': SITE.ids.website },
    about: { '@id': SITE.ids.business },
    publisher: { '@id': SITE.ids.org },
  }
}
