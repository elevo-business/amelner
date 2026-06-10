# Amelner Getreidebrand — Website

High-end, statische One-Page-Website für die traditionsreiche Brennerei
**Amelner Getreidebrand** (Andreas Dering, Titz / Ameln).

Die Seite präsentiert die beiden Kräuterliköre *Amelner Treffer* und
*Amelner Tropfen*, die Geschichte der 1901 gegründeten und 2010
wiederbelebten Brennerei sowie Händler, Region und Kontakt.

## Aufbau

```
index.html         Startseite (alle Sektionen)
impressum.html     Impressum
datenschutz.html   Datenschutzerklärung
css/style.css      Design-System & Layout (responsiv)
js/main.js         Scroll-Progress, Header, Mobile-Menü, Reveal, Zähler
assets/img/        Bildmaterial
```

## Design

- **Schriften:** Cormorant Garamond (Display-Serife) + Jost (Fließtext),
  via Google Fonts.
- **Farbwelt:** warmes Creme/Espresso mit Gold-/Bernsteinakzent und der
  Heritage-Grün-Note aus der originalen Brennerei-Marke.
- **Logo:** als Inline-SVG nachgebaut (Weizengarbe im Kelch), skaliert
  verlustfrei und färbt sich kontextabhängig (`assets/img/logo-mark.svg`).
- Vollständig responsiv (Breakpoints bei 1024 / 880 / 620 px) inkl.
  Mobile-Navigation und `prefers-reduced-motion`-Support.

## Inhalte

Texte, Produktangaben (Preise, Serviertemperaturen), Händlerliste und
Kontaktdaten stammen von der bestehenden Website amelner.de. Die echten
Produkt- und Gutshof-Aufnahmen wurden übernommen; atmosphärische Motive
(Kornfeld, Getreide, Genuss-Szenen) sind lizenzfreie Stockfotos
(Unsplash).

## Lokal ansehen

Es ist kein Build nötig — die Dateien direkt öffnen oder einen einfachen
Server starten:

```bash
python3 -m http.server 8000
# http://localhost:8000
```
