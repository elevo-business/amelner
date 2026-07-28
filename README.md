# Amelner Getreidebrand — Website

Statische Mehrseiten-Website für die traditionsreiche Brennerei
**Amelner Getreidebrand** (Andreas Dering, Titz / Ameln).

Kein Build nötig — die Dateien sind fertiges HTML.

## Gestaltungsidee — „Das Brennbuch"

Kein generisches Getränke-Layout, sondern eine editoriale Handschrift:
Die Seite liest sich wie ein altes **Brennbuch** mit nummerierten Kapiteln.

- **Papier & Tinte:** warmer Cremeton mit Papierkorn, dunkles Flaschengrün
  für die Kontrastflächen, Bernstein und Siegellack-Rot als Akzente.
- **Etikett-Ästhetik:** doppelte Rahmen, Archiv-Bildtafeln mit
  Kapitälchen-Bildunterschriften, ein rundes **Wachssiegel** (Weizengarbe
  im Kelch mit umlaufender Schrift) als Wiedererkennungszeichen.
- **Schriften:** *Fraunces* (Display-Serife) für Überschriften,
  *Newsreader* (Lese-Serife) für Fließtext, *Archivo* für Kapitälchen und
  Bedienelemente — via Google Fonts.

## Aufbau

```
index.html         Startseite mit Kapitelregister
chronik.html       № I   — Die Chronik (1901 · 2003 · 2010)
rezeptur.html      № II  — Die Rezeptur (drei Zutaten)
likoere.html       № III — Treffer & Tropfen, mit Vergleichstafel
genuss.html        № IV  — Servieren, Glas, Anlässe, Aufbewahrung
herkunft.html      № V   — Ameln, Titz, Jülicher Börde
haendler.html      № VI  — Händlerregister & Feste
bestellen.html     Bestellung & Kontakt
impressum.html     Impressum
datenschutz.html   Datenschutzerklärung
css/style.css      Design-System & Layout (responsiv)
js/main.js         Altersabfrage, Header, Mobil-Menü, Reveal, Parallaxe
assets/img/        Bildmaterial
```

Jede Kapitelseite endet mit einer Blätterleiste (zurück / weiter), sodass
man das Brennbuch auch der Reihe nach durchlesen kann.

## Bildmaterial

**Die Originalaufnahmen bleiben unverändert im Repository.** Sie werden
weder überschrieben noch gelöscht:

| Original | Inhalt |
|---|---|
| `treffer.jpg`, `tropfen.jpg` | Echte Produktaufnahmen (196 × 259 px) |
| `gutshof-ameln.jpg` | Gutshof in Ameln (345 × 261 px) |
| `logo-original.jpg`, `logo-gold.png` | Historisches Signet |
| `hero-field-sunset.jpg`, `grain-*.jpg`, `genuss-rosemary.jpg` | Bisherige Stockmotive |

Für die Website werden daraus **Derivate** mit dem Zusatz `-r3` erzeugt:
eingebrannter weißer Rahmen samt Schlagschatten weggeschnitten, JPEG-Ringing
gemildert, Lanczos-Vergrößerung mit Nachschärfen, Lichter behutsam Richtung
Papierton eingewärmt.

**Auflösungsgrenze:** Die Produktaufnahmen stammen aus einer alten
Website-Fassung und enthalten nur rund 180 px echte Bilddetails. Sie werden
deshalb bewusst klein und in einer Archivtafel gezeigt, statt sie
großzuziehen. Neue Produktfotografie wäre die einzige echte Verbesserung.

Alle Bilder liegen als **WebP und JPEG in mehreren Breiten** vor und werden
per `srcset`/`sizes` ausgeliefert; `width`/`height` sind gesetzt, damit beim
Laden nichts springt. Geprüft: kein Bild wird über den Faktor 1,2
hochskaliert (bei einfacher Pixeldichte gar nicht).

Neue großformatige Stimmungsmotive (`hero-korn-abend`, `feld-boerde`,
`kraeuter-hero`, `kraeuter-schale`, `weizen-nah`) sind lizenzfreie
Aufnahmen von Unsplash.

## Inhalte

Produktangaben (Preise, Serviertemperaturen), Händlerliste, Kontaktdaten und
die Eckdaten der Chronik stammen von der bestehenden Website amelner.de.
Die Kapiteltexte ordnen diese Angaben redaktionell ein; allgemeine Passagen
(etwa zur Geschichte bäuerlicher Genossenschaftsbrennereien oder zur
Jülicher Börde) sind als solche formuliert.

**Bewusst nicht angegeben,** weil auf den Originalaufnahmen nicht sicher
lesbar und nicht anderweitig belegt: Alkoholgehalt und Flaschenvolumen.
Vom Etikett gesichert sind „Original", „Kräuter-Likör",
„Deutsches Erzeugnis" sowie die Weizengarbe im Kelch.

## Jugendschutz & Datenschutz

Eine Altersabfrage (18+) erscheint beim ersten Besuch und wird per
`localStorage` gemerkt — kein Cookie, keine Übertragung an Dritte. Die
Datenschutzerklärung weist das aus.

## Lokal ansehen

```bash
python3 -m http.server 8000
# http://localhost:8000
```
