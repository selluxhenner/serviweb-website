import { Link } from 'react-router-dom'
import type { Crumb } from '../lib/seo'

/**
 * Visible breadcrumb trail. Pairs with the BreadcrumbList JSON-LD emitted by <SEO />.
 * "Startseite" is rendered automatically as the first crumb.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: 'Startseite', url: '/' }, ...items]
  return (
    <nav aria-label="Brotkrümelnavigation" className="max-w-6xl mx-auto px-6 pt-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500" role="list">
        {all.map((c, i) => {
          const last = i === all.length - 1
          return (
            <li key={c.url} className="flex items-center gap-1.5">
              {last ? (
                <span className="text-slate-700" aria-current="page">{c.name}</span>
              ) : (
                <Link to={c.url} className="hover:text-blue-600 transition-colors">{c.name}</Link>
              )}
              {!last && <span className="text-slate-300" aria-hidden="true">/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
