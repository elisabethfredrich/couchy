# Couchy

Couchy ist ein Prototyp einer webbasierten Couchsurfing-Plattform. Die Anwendung ermöglicht es Nutzerinnen und Nutzern, Übernachtungsangebote in verschiedenen Städten zu suchen und die Details eines Angebots einschließlich der Informationen zur anbietenden Person einzusehen.

Die Anwendung wurde mit Angular umgesetzt und verwendet aktuell lokale JSON-Daten als Datenquelle. Der Fokus des Prototyps liegt auf der grundlegenden Benutzerführung, der Suche nach Angeboten und der Darstellung von Angebots- und Nutzerdaten.

## Abhängigkeiten

Für die Entwicklung werden folgende Technologien und Pakete verwendet:

- **Angular 22** – Framework für die Webanwendung
- **TypeScript** – Programmiersprache
- **Tailwind CSS** – Styling und responsive Layouts
- **RxJS** – Verarbeitung asynchroner Daten und Observables
- **Angular HttpClient** – Laden der lokalen JSON-Daten
- **Material Symbols** – Icons
- **Source Sans Pro** – verwendete Schriftart
- **Node.js / npm** – Entwicklungsumgebung und Paketverwaltung

Die benötigten Abhängigkeiten sind in der `package.json` definiert.

## Architektur und Aufbau

Couchy ist als Angular-Anwendung mit einer komponentenbasierten Struktur aufgebaut. Die Benutzeroberfläche ist in einzelne Komponenten aufgeteilt, die jeweils für einen bestimmten Teil der Anwendung verantwortlich sind.

Die Anwendung verwendet unter anderem:

- **Components** – Darstellung und Benutzerinteraktionen
- **Services** – Verwaltung und Bereitstellung von Daten und Anwendungszuständen
- **Models** – Definition der verwendeten Datenstrukturen
- **Guards** – Kontrolle des Zugriffs auf geschützte Bereiche
- **Routing** – Navigation zwischen den einzelnen Ansichten

Die Daten werden aktuell über den `UserDataService` aus der lokalen Datei `user_data.json` geladen. Der `AuthService` verwaltet den Authentifizierungszustand. Für die Speicherung des Suchzustands zwischen den Ansichten wird ein eigener `SearchStateService` verwendet.

Die Anwendung ist in verschiedene Bereiche wie Login, Home, Suche und Angebotsdetails aufgeteilt. Dadurch bleiben die einzelnen Komponenten möglichst übersichtlich und voneinander getrennt.

## Responsive Design / Mobile First

Die Benutzeroberfläche wurde nach dem **Mobile-First-Prinzip** entwickelt und mit Tailwind CSS gestylt, sodass die Anwendung auf allen Engeräten funktioniert.

Dabei werden zunächst Layouts für kleinere Bildschirmgrößen definiert. Über responsive Tailwind-Klassen wie `sm:` und `md:` können Abstände, Größen und Layouts für größere Bildschirme angepasst werden.

## Installation

### Voraussetzungen

Folgende Software muss installiert sein:

- Node.js
- npm
- Angular CLI

### Projekt installieren

Repository klonen:

```bash
git clone https://github.com/elisabethfredrich/couchy
cd couchy
```

Abhängigkeiten installieren:

```bash
npm install
```

Anschließend kann die Anwendung mit dem Angular Development Server gestartet werden:

```bash
ng serve
```

Die Anwendung ist anschließend standardmäßig unter

```text
http://localhost:4200
```

erreichbar.

## Features

### 1. Login

Die Anwendung verfügt über eine einfache Login-Oberfläche. Die Authentifizierung ist im aktuellen Prototypen simuliert und dient hauptsächlich zur Darstellung des Anmelde- und Navigationsablaufs.

### 2. Begrüßungsseite

Nach der Anmeldung gelangen Nutzerinnen und Nutzer auf die Begrüßungsseite. Dort werden der aktuelle Benutzername, der Posteingang sowie die Suchfunktion dargestellt.

### 3. Posteingang

Der Posteingang zeigt die fünf neuesten eingegangene Anfragen mit:

- Absender (Username)
- Datum
- Betreff
- Nachricht

Die Daten sind im aktuellen Prototypen beispielhaft hinterlegt.

### 4. Suche nach Angeboten

Über die Suchfunktion können Übernachtungsangebote anhand einer Stadt gesucht werden.

Die Suche:

- akzeptiert eine Stadt als Eingabe
- berücksichtigt Groß- und Kleinschreibung
- zeigt passende Angebote anderer Nutzerinnen und Nutzer
- unterstützt eine Seitennavigation bei mehr als 5 Ergebnissen

### 5. Angebotsdetails

Für ein Suchergebnis kann eine Detailseite geöffnet werden. Diese zeigt:

- Titel des Angebots
- Datum
- Beschreibung
- Profilbild der anbietenden Person
- Name und Benutzername
- Alter
- Ort
- persönliche Bio

Über die Zurück-Funktion kann zur vorherigen Suchansicht zurückgekehrt werden. Der aktuelle Suchzustand wird dabei im Prototypen zwischengespeichert.

## Mögliche zukünftige Erweiterungen

Der aktuelle Stand dient als funktionaler Prototyp. Für eine weiterführende Implementierung könnten unter anderem folgende Bereiche ausgebaut werden:

- **Splashscreen:** Ein eigener Splashscreen für den Start der Anwendung könnte ergänzt werden.
- **Erweiterte Suche:** Die Suche könnte um weitere Parameter wie Datum, Zeitraum, Anzahl der Personen oder weitere Ortsinformationen ergänzt werden.
- **Verbessertes Styling:** Das Styling der einzelnen Komponenten könnte weiter vereinheitlicht und detaillierter ausgearbeitet werden.
- **Responsive Weiterentwicklung:** Der bestehende Mobile-First-Ansatz könnte für weitere Bildschirmgrößen und Geräte noch detaillierter optimiert werden.
- **Profilverwaltung:** Nutzer könnten ihre persönlichen Daten, Profilbilder, Beschreibung und Übernachtungsangebote selbst verwalten.
- **Anfragen verwalten:** Nutzer könnten Anfragen zu Angeboten senden, empfangene Anfragen einsehen sowie Anfragen annehmen oder ablehnen.
- **Fehler- und Ladezustände:** Ladeanimationen, aussagekräftigere Fehlermeldungen und Zustände für leere Suchergebnisse könnten weiter ausgebaut werden.
- **Validierung:** Eingaben in Login-, Such- und weiteren Formularen könnten um eine umfangreichere Validierung und entsprechende Fehlermeldungen ergänzt werden.

## Projektinformationen

- **Autor:** Elisabeth Fredrich
- **Datum:** 17.09.2026
