import type { Faq } from '../lib/seo'

export interface LocationData {
  slug: string                // route path, e.g. "/webdesign-wil"
  city: string                // "Wil"
  /** <title> — keep ≤ ~60 chars incl. the " | Serviweb" suffix added by <SEO />. */
  title: string
  metaDescription: string     // 140–160 chars
  keywords: string
  h1: string
  /** 1–2 sentence self-contained answer placed directly under the H1 (AEO / featured-snippet bait). */
  lead: string
  intro: string[]             // supporting paragraphs
  /** Areas this page primarily targets — also feeds the Service schema areaServed. */
  areaServed: string[]
  nearby: string[]            // towns/communities named in the body for local relevance
  highlights: { title: string; body: string }[]
  faq: Faq[]
}

export const LOCATIONS: LocationData[] = [
  {
    slug: '/webdesign-ostschweiz',
    city: 'Ostschweiz',
    title: 'Webdesign & Webagentur Ostschweiz',
    metaDescription:
      'Webdesign & Webagentur in der Ostschweiz: Serviweb erstellt moderne, schnelle Websites mit React & Next.js für Unternehmen in St. Gallen, Wil, Thurgau & Appenzell.',
    keywords:
      'Webdesign Ostschweiz, Webagentur Ostschweiz, Website erstellen lassen Ostschweiz, Webentwickler Ostschweiz, React Webentwicklung Schweiz, Next.js Agentur Schweiz',
    h1: 'Webdesign & Webagentur in der Ostschweiz',
    lead: 'Serviweb ist eine persönliche Webagentur aus der Ostschweiz und entwickelt moderne, schnelle Websites und Web-Apps mit React und Next.js – für Unternehmen in St. Gallen, Wil, im Toggenburg, im Thurgau und in Appenzell.',
    intro: [
      'Statt Agentur-Overhead und anonymer Tickets arbeiten Sie direkt mit Kevin Schmid – vom ersten Gespräch bis zum Go-Live. Das hält die Wege kurz, die Preise fair und das Ergebnis nah an Ihrem Betrieb.',
      'Ich baue Websites technisch sauber mit React und Next.js: schnelle Ladezeiten, sehr gute Google-Werte und eine Grundlage, die mit Ihrem Unternehmen mitwächst – von der Landing Page bis zum Shop oder Buchungssystem.',
    ],
    areaServed: ['Ostschweiz', 'St. Gallen', 'Wil SG', 'Toggenburg', 'Thurgau', 'Appenzell'],
    nearby: ['St. Gallen', 'Wil', 'Gossau', 'Wattwil', 'Frauenfeld', 'Herisau'],
    highlights: [
      { title: 'Lokal verankert', body: 'In der Ostschweiz zuhause – ich kenne den Markt, die Region und arbeite gerne auch persönlich vor Ort.' },
      { title: 'React & Next.js', body: 'Moderne Webentwicklung statt Baukasten: schnell, sicher, suchmaschinenoptimiert und langfristig wartbar.' },
      { title: 'Persönlich & fair', body: 'Ein fester Ansprechpartner, transparente Preise ab CHF 890.– und ehrliche Beratung ohne Fachchinesisch.' },
    ],
    faq: [
      {
        question: 'Was kostet eine Website in der Ostschweiz?',
        answer:
          'Bei Serviweb starten Websites ab CHF 890.– für eine professionelle Landing Page. Mehrseitige Unternehmensseiten liegen meist zwischen CHF 1’500.– und CHF 4’000.–, komplexere Web-Apps mit Shop oder Buchungssystem darüber. Sie erhalten vorab ein transparentes Fixpreis-Angebot.',
      },
      {
        question: 'Arbeitet Serviweb in der ganzen Ostschweiz?',
        answer:
          'Ja. Serviweb betreut Unternehmen in der gesamten Ostschweiz – darunter St. Gallen, Wil, das Toggenburg, der Thurgau und Appenzell. Termine sind persönlich vor Ort oder online möglich.',
      },
      {
        question: 'Mit welcher Technologie werden die Websites gebaut?',
        answer:
          'Serviweb entwickelt mit React und Next.js – modernen Web-Technologien für schnelle Ladezeiten, gute Core Web Vitals und sauberes, wartbares HTML, das Google und KI-Suchen gut verstehen.',
      },
      {
        question: 'Wie lange dauert die Umsetzung?',
        answer:
          'Eine Website ist in der Regel in 2–4 Wochen fertig, eine App in 4–10 Wochen. Der genaue Zeitrahmen hängt vom Umfang ab und wird im kostenlosen Erstgespräch festgelegt.',
      },
    ],
  },
  {
    slug: '/webdesign-wil',
    city: 'Wil',
    title: 'Webdesign Wil & Webagentur Wil SG',
    metaDescription:
      'Webdesign & Webagentur in Wil SG: Serviweb gestaltet moderne Websites für Gewerbe, Gastronomie und Dienstleister in Wil und Umgebung – persönlich, schnell und fair.',
    keywords:
      'Webdesign Wil, Webagentur Wil, Website erstellen Wil, Webentwickler Wil SG, Homepage Wil, Webdesign Wil SG',
    h1: 'Webdesign & Webagentur in Wil (SG)',
    lead: 'Serviweb gestaltet professionelle Websites für Unternehmen in Wil SG und Umgebung – von der Gastronomie über das lokale Gewerbe bis zu Dienstleistern. Persönlich betreut von Kevin Schmid, mit modernem Design und sauberer Technik.',
    intro: [
      'Wil ist das Tor zum Toggenburg und ein lebendiger Wirtschaftsstandort. Ich helfe Betrieben aus der Region, online sichtbar zu werden – mit Websites, die auf dem Handy gleich gut aussehen wie am Desktop und die bei Google gefunden werden.',
      'Für die Kunstbar «Vision» in Wil durfte ich bereits den Online-Auftritt umsetzen. Ob Restaurant, Bar, Coiffeur, Handwerk oder Praxis: Ich entwickle eine Seite, die zu Ihrem Betrieb passt – und bin als fester Ansprechpartner direkt erreichbar.',
    ],
    areaServed: ['Wil SG', 'Toggenburg', 'St. Gallen', 'Ostschweiz'],
    nearby: ['Wil', 'Bronschhofen', 'Rickenbach', 'Uzwil', 'Flawil', 'Sirnach'],
    highlights: [
      { title: 'Aus der Region', body: 'Projekte in und um Wil – u. a. der Auftritt der Kunstbar Vision in Wil. Ich kenne den lokalen Markt.' },
      { title: 'Für lokale Betriebe', body: 'Restaurants, Bars, Gewerbe und Dienstleister: Websites, die Anrufe, Reservierungen und Anfragen bringen.' },
      { title: 'Direkt erreichbar', body: 'Kein Callcenter – Sie erreichen mich persönlich per Telefon, mit Antwort meist innerhalb von 24 Stunden.' },
    ],
    faq: [
      {
        question: 'Macht Serviweb Websites für Unternehmen in Wil?',
        answer:
          'Ja. Serviweb erstellt Websites für Betriebe in Wil SG und der näheren Umgebung – darunter Gastronomie, Gewerbe und Dienstleister. Ein Beispiel aus der Region ist der Online-Auftritt der Kunstbar Vision in Wil.',
      },
      {
        question: 'Was kostet eine Website in Wil?',
        answer:
          'Eine professionelle Website beginnt bei Serviweb ab CHF 890.–. Der genaue Preis richtet sich nach Umfang und Funktionen und wird vorab als transparentes Fixpreis-Angebot festgehalten.',
      },
      {
        question: 'Können wir uns persönlich in Wil treffen?',
        answer:
          'Ja, ein persönliches Treffen in Wil oder Umgebung ist problemlos möglich. Alternativ läuft die Zusammenarbeit auch komplett online per Telefon und Video.',
      },
      {
        question: 'Wird meine Website bei Google gefunden?',
        answer:
          'Jede Website von Serviweb wird mit SEO-Grundoptimierung, sauberer Technik und lokalen Signalen für Wil und die Region ausgeliefert – die Basis, um bei Google lokal gefunden zu werden.',
      },
    ],
  },
  {
    slug: '/webdesign-toggenburg',
    city: 'Toggenburg',
    title: 'Webdesign & Webagentur Toggenburg',
    metaDescription:
      'Webagentur fürs Toggenburg: Serviweb erstellt moderne Websites für Gewerbe, Gastronomie und Tourismus in Wattwil, Lichtensteig, Nesslau & der ganzen Region.',
    keywords:
      'Webdesign Toggenburg, Webagentur Toggenburg, Website erstellen Toggenburg, Webentwickler Toggenburg, Homepage Wattwil, Webdesign Lichtensteig',
    h1: 'Webdesign & Webagentur fürs Toggenburg',
    lead: 'Serviweb ist die persönliche Webagentur fürs Toggenburg und erstellt moderne Websites für Gewerbe, Gastronomie, Tourismus und Dienstleister – von Wattwil über Lichtensteig bis Nesslau und ins obere Toggenburg.',
    intro: [
      'Das Toggenburg lebt von engagierten lokalen Betrieben und einem starken Tourismus. Eine schnelle, gut auffindbare Website hilft Gästen und Kundinnen, Sie online zu finden – egal ob Bergrestaurant, Hofladen, Handwerksbetrieb oder Praxis.',
      'Ich entwickle Ihre Seite mit moderner Technik (React & Next.js), optimiert für Handy und Suchmaschinen, und betreue Sie persönlich. Als Entwickler aus der Ostschweiz sind mir die Region und die kurzen Wege wichtig.',
    ],
    areaServed: ['Toggenburg', 'Wil SG', 'St. Gallen', 'Ostschweiz'],
    nearby: ['Wattwil', 'Lichtensteig', 'Ebnat-Kappel', 'Nesslau', 'Wildhaus', 'Alt St. Johann'],
    highlights: [
      { title: 'Für die Region', body: 'Websites für Betriebe von Wattwil bis Wildhaus – mit Gespür für lokale Kundschaft und Tourismus.' },
      { title: 'Mobil & schnell', body: 'Optimiert fürs Handy und für schnelle Ladezeiten – wichtig für Gäste, die unterwegs suchen.' },
      { title: 'Persönlich vor Ort', body: 'Direkter Draht zu mir und Treffen in der Region möglich – keine anonyme Grossagentur.' },
    ],
    faq: [
      {
        question: 'Erstellt Serviweb Websites im Toggenburg?',
        answer:
          'Ja. Serviweb betreut Betriebe in der ganzen Region Toggenburg – darunter Wattwil, Lichtensteig, Ebnat-Kappel, Nesslau und das obere Toggenburg rund um Wildhaus und Alt St. Johann.',
      },
      {
        question: 'Eignet sich das auch für Gastronomie und Tourismus?',
        answer:
          'Gerade dafür. Serviweb hat Erfahrung mit Websites für Restaurants und Bars und erstellt mobil-optimierte Seiten mit Menü, Öffnungszeiten, Galerie und Reservierungsmöglichkeit – ideal für Gastronomie- und Tourismusbetriebe im Toggenburg.',
      },
      {
        question: 'Was kostet eine Website fürs Toggenburg?',
        answer:
          'Die Preise starten bei CHF 890.– für eine Landing Page. Mehrseitige Websites werden individuell und transparent offeriert – ohne versteckte Kosten.',
      },
      {
        question: 'Geht die Zusammenarbeit auch aus der Ferne?',
        answer:
          'Ja. Die Zusammenarbeit funktioniert persönlich vor Ort oder vollständig online per Telefon und Video – ganz nach Ihren Wünschen.',
      },
    ],
  },
  {
    slug: '/webdesign-thurgau',
    city: 'Thurgau',
    title: 'Webdesign & Webagentur Thurgau',
    metaDescription:
      'Webdesign & Webagentur für den Thurgau: Serviweb erstellt moderne, schnelle Websites für KMU, Gastronomie und Dienstleister in Frauenfeld, Kreuzlingen, Weinfelden & Umgebung.',
    keywords:
      'Webdesign Thurgau, Webagentur Thurgau, Website erstellen Thurgau, Webentwickler Thurgau, Homepage Frauenfeld, Webdesign Kreuzlingen, Webdesign Weinfelden',
    h1: 'Webdesign & Webagentur im Thurgau',
    lead: 'Serviweb erstellt moderne Websites für Unternehmen im Thurgau – von Frauenfeld über Weinfelden bis Kreuzlingen und an den Bodensee. Persönlich betreut von Kevin Schmid, entwickelt mit React und Next.js für schnelle Ladezeiten und gute Auffindbarkeit bei Google.',
    intro: [
      'Der Thurgau ist ein starker KMU-Kanton: Handwerk, Produktion, Landwirtschaft, Gastronomie und Tourismus am Bodensee. Genau für solche Betriebe baue ich Websites, die auf dem Handy überzeugen, bei Google gefunden werden und Anfragen bringen – statt nur schön auszusehen.',
      'Serviweb sitzt in der Ostschweiz, direkt an der Thurgauer Grenze. Termine in Frauenfeld, Weinfelden oder Kreuzlingen sind schnell organisiert – oder die Zusammenarbeit läuft komplett online. Sie arbeiten dabei immer direkt mit mir, ohne Agentur-Overhead.',
    ],
    areaServed: ['Thurgau', 'Frauenfeld', 'Kreuzlingen', 'Weinfelden', 'Ostschweiz'],
    nearby: ['Frauenfeld', 'Kreuzlingen', 'Weinfelden', 'Amriswil', 'Romanshorn', 'Arbon'],
    highlights: [
      { title: 'Nah am Thurgau', body: 'Aus der Ostschweiz, direkt an der Kantonsgrenze – persönliche Treffen von Frauenfeld bis an den Bodensee sind kurzfristig möglich.' },
      { title: 'Für Thurgauer KMU', body: 'Websites für Handwerk, Gewerbe, Gastronomie und Dienstleister – klar strukturiert, mobiloptimiert und auf Anfragen ausgelegt.' },
      { title: 'Technik, die rankt', body: 'React & Next.js statt Baukasten: schnelle Ladezeiten, saubere Struktur und lokale SEO-Signale für den Thurgau ab dem ersten Tag.' },
    ],
    faq: [
      {
        question: 'Erstellt Serviweb Websites für Unternehmen im Thurgau?',
        answer:
          'Ja. Serviweb betreut Betriebe im ganzen Kanton Thurgau – darunter Frauenfeld, Kreuzlingen, Weinfelden, Amriswil, Romanshorn und Arbon. Termine sind persönlich vor Ort oder online möglich.',
      },
      {
        question: 'Was kostet eine Website im Thurgau?',
        answer:
          'Websites starten bei Serviweb ab CHF 890.– für eine professionelle Landing Page. Mehrseitige Unternehmensseiten liegen meist zwischen CHF 1’500.– und CHF 4’000.– – immer mit transparentem Fixpreis-Angebot vorab.',
      },
      {
        question: 'Lohnt sich eine eigene Website für ein Thurgauer KMU?',
        answer:
          'Ja. Kundinnen und Kunden suchen lokal bei Google nach Handwerkern, Restaurants und Dienstleistern. Eine schnelle, lokal optimierte Website sorgt dafür, dass Ihr Betrieb im Thurgau gefunden wird – auch gegenüber grösseren Mitbewerbern.',
      },
      {
        question: 'Wie schnell ist eine Website für meinen Betrieb fertig?',
        answer:
          'Eine Website ist in der Regel in 2–4 Wochen online. Der genaue Zeitrahmen hängt vom Umfang ab und wird im kostenlosen Erstgespräch gemeinsam festgelegt.',
      },
    ],
  },
]

export const LOCATION_BY_SLUG = Object.fromEntries(LOCATIONS.map((l) => [l.slug, l]))
