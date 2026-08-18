// Framer Motion bakes an element's `initial` state into the prerendered HTML
// (scripts/prerender.mjs). For entrance animations that means the markup ships
// as style="opacity:0" — the page exists but is invisible until the ~480 kB
// client bundle has downloaded, parsed and hydrated. On a slow connection that
// is a white page for a second or more; if the bundle never loads (stale cached
// HTML pointing at an asset hash that no longer exists, blocked script, JS
// error) the page stays white forever.
//
// hasHydrated() is false during prerendering AND during the hydration render,
// so components gate their `initial` on it: the first paint comes out fully
// visible. It flips to true after mount, so client-side route changes still
// animate normally.
let hydrated = false

export const hasHydrated = () => hydrated
export const markHydrated = () => { hydrated = true }
