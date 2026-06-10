# Einfache Enzymreaktion

Interaktive Web-Simulation für den Biologieunterricht in der EF / Klasse 11.
Die App zeigt vereinfacht, wie ein Substrat an das aktive Zentrum eines Enzyms
bindet, wie ein Enzym-Substrat-Komplex entsteht und wie anschließend Produkte
freigesetzt werden. Eine zusätzliche Seite erklärt das Schlüssel-Schloss-Prinzip.

## Dateien

- `index.html`: Hauptseite mit der Enzymreaktion
- `schluessel-schloss.html`: Zusatzseite zum Schlüssel-Schloss-Prinzip
- `style.css`: Gestaltung, responsives Layout und Animationen
- `script.js`: Schrittsteuerung, Automatiklauf und Infokarten der Hauptseite
- `lock-key.js`: Interaktion auf der Zusatzseite
- `README.md`: kurze Projektbeschreibung

## Lokal nutzen

Die App braucht keinen Build-Schritt.

1. Lade alle Dateien in einen Ordner.
2. Öffne `index.html` im Browser.
3. Nutze den Button "Schlüssel-Schloss-Prinzip", um zur Zusatzseite zu wechseln.

Alternativ kann der Ordner mit einem einfachen lokalen Webserver geöffnet
werden, zum Beispiel mit einer Editor-Erweiterung wie "Live Server".

## Veröffentlichung mit GitHub Pages

1. Erstelle ein GitHub-Repository.
2. Lade alle HTML-, CSS- und JavaScript-Dateien sowie `README.md` in das Repository.
3. Öffne in GitHub die Einstellungen des Repositorys.
4. Wähle unter "Pages" den Branch `main` und den Ordner `/root` aus.
5. Speichere die Einstellung. Nach kurzer Zeit stellt GitHub die Seite über
   eine Pages-Adresse bereit.

## Anpassen

Texte zu den einzelnen Schritten können in `script.js` im Array `steps`
angepasst werden. Die Rückmeldungen zum Schlüssel-Schloss-Prinzip liegen in
`lock-key.js`. Farben, Größen und Abstände liegen in `style.css`. Die sichtbaren
Formen der Simulation befinden sich als SVG in den HTML-Dateien.

## Didaktischer Hinweis

Die Simulation ist ein vereinfachtes Modell. Enzyme sind in Wirklichkeit
dreidimensionale Moleküle und können ihre Form leicht verändern. Das Modell
konzentriert sich bewusst auf Bindung, Enzym-Substrat-Komplex, Produktbildung,
Wiederverwendbarkeit des Enzyms und die passende Bindungsstelle beim
Schlüssel-Schloss-Prinzip.
