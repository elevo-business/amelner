# Amelner Getreidebrand — Website

High-End, statische One-Page-Website für die traditionsreiche Brennerei
**Amelner Getreidebrand** (Andreas Dering, Titz / Ameln).

Die Seite präsentiert die beiden Kräuterliköre *Amelner Treffer* und
*Amelner Tropfen*, die Chronik der 1901 gegründeten und 2010
wiederbelebten Brennerei sowie Rezeptur, Herkunft, Händler und Kontakt.

## Gestaltungsidee — „Das Brennbuch"

Kein generisches Getränke-Layout, sondern eine editoriale Handschrift, die
zum Produkt passt: die Seite liest sich wie ein altes **Brennbuch**.

- **Kapitelstruktur:** Jede Sektion ist ein nummeriertes Kapitel
  (№ I Chronik, № II Rezeptur, № III Die Liköre, …) mit gesperrter
  Kopfzeile und Ornamentlinie.
- **Papier & Tinte:** Warmer Cremeton mit Papierkorn, dunkles Flaschengrün
  für die Kontrastflächen, Bernstein und Siegellack-Rot als Akzente.
- **Etikett-Ästhetik:** Doppelte Rahmen, Archiv-Bildtafeln mit Kapitälchen-
  Bildunterschriften, ein rundes **Wachssiegel** (Weizengarbe im Kelch mit
  umlaufender Schrift) als Wiedererkennungszeichen.
- **Die beiden Liköre** werden als **Diptychon** gegenübergestellt — dunkle
  und helle Hälfte, mittige Trennlinie, Etikett-Spezifikationstabelle.
- **Register statt Karten:** Die Händlerliste ist ein zweispaltiges
  Verzeichnis mit Punktführung, wie ein gedrucktes Bezugsquellenregister.

## Aufbau

```
index.html         Startseite (alle Kapitel)
impressum.html     Impressum
datenschutz.html   Datenschutzerklärung
css/style.css      Design-System & Layout (responsiv)
js/main.js         Altersabfrage, Header, Mobile-Menü, Reveal, Parallaxe
assets/img/        Bildmaterial
```

## Design-Details

- **Schriften:** *Fraunces* (Display-Serife mit optischer Achse) für
  Überschriften, *Newsreader* (Lese-Serife) für den Fließtext, *Archivo*
  (Grotesk) für Kapitälchen, Labels und Buttons — via Google Fonts.
- **Logo/Siegel:** als Inline-SVG-Symbole nachgebaut (Weizengarbe im Kelch),
  skaliert verlustfrei und färbt sich kontextabhängig.
- **Altersabfrage:** dezente, DSGVO-freundliche 18+-Bestätigung, die per
  `localStorage` gemerkt wird (kein Cookie, keine Übertragung an Dritte).
- Vollständig responsiv (Breakpoints bei 1080 / 900 / 620 px) inkl.
  Mobile-Navigation, `prefers-reduced-motion`- und Fokus-Support.

## Inhalte

Texte, Produktangaben (Preise, Serviertemperaturen), Händlerliste und
Kontaktdaten stammen von der bestehenden Website amelner.de. Die echten
Produkt- und Gutshof-Aufnahmen sowie das historische Signet wurden
übernommen; atmosphärische Motive (Kornfeld, Getreide, Genuss-Szene) sind
lizenzfreie Stockfotos.

## Lokal ansehen

Es ist kein Build nötig — die Dateien direkt öffnen oder einen einfachen
Server starten:

```bash
python3 -m http.server 8000
# http://localhost:8000
```
