# GitHub Pages Deployment Anleitung

## ✅ Was wurde vorbereitet:

### 1. Vite Konfiguration

- `base: "/physio-flow-genesis/"` in vite.config.ts
- Stellt sicher dass alle Assets mit korrektem Pfad geladen werden

### 2. React Router

- `basename="/physio-flow-genesis"` im BrowserRouter
- Alle Routen funktionieren korrekt unter dem Subpath

### 3. 404 Fallback

- `public/404.html` für Client-Side Routing
- Redirect-Script in `index.html`
- URLs wie `/physio-flow-genesis/team` funktionieren auch nach Reload

### 4. GitHub Actions Workflow

- `.github/workflows/deploy.yml`
- Automatisches Deployment bei jedem Push auf main
- Verwendet pnpm und die neuesten Actions

## 📋 Was du in GitHub machen musst:

### Schritt 1: Repository Settings

1. Gehe zu deinem Repository: https://github.com/privlab-org/physio-flow-genesis
2. Klicke auf **Settings** (oben rechts)
3. Scrolle runter zu **Pages** (linke Sidebar)

### Schritt 2: GitHub Pages aktivieren

1. Unter **Source** wähle: **GitHub Actions**
2. Das war's! Speichern nicht nötig, wird automatisch aktiviert

### Schritt 3: Workflow Permissions (wichtig!)

1. Gehe zu **Settings** → **Actions** → **General**
2. Scrolle runter zu **Workflow permissions**
3. Wähle: **Read and write permissions**
4. Aktiviere: **Allow GitHub Actions to create and approve pull requests**
5. Klicke auf **Save**

### Schritt 4: Push und Deploy

```bash
git add .
git commit -m "🚀 Prepare for GitHub Pages deployment"
git push origin main
```

### Schritt 5: Warten und Prüfen

1. Gehe zu **Actions** Tab in deinem Repository
2. Du siehst den Workflow "Deploy to GitHub Pages" laufen
3. Nach ca. 2-3 Minuten ist die Seite live!
4. URL: **https://privlab-org.github.io/physio-flow-genesis/**

## 🔄 Zukünftige Updates

Ab jetzt wird bei jedem Push auf `main` automatisch deployed:

```bash
git add .
git commit -m "Update XYZ"
git push
```

Nach 2-3 Minuten sind die Änderungen live!

## 🌐 Custom Domain (optional)

Falls du eine eigene Domain verwenden willst:

1. Gehe zu **Settings** → **Pages**
2. Unter **Custom domain** trage deine Domain ein (z.B. `physiovio.de`)
3. Erstelle einen CNAME Record bei deinem DNS-Provider:
   - Host: `@` oder `www`
   - Value: `privlab-org.github.io`
4. Warte auf DNS-Propagierung (kann 1-48h dauern)
5. Aktiviere **Enforce HTTPS**

**Dann musst du auch die Konfiguration anpassen:**

- In `vite.config.ts`: `base: "/"` (statt `/physio-flow-genesis/`)
- In `src/App.tsx`: `basename="/"` (statt `basename="/physio-flow-genesis"`)
- 404.html anpassen: `pathSegmentsToKeep = 0;` (statt `1`)

## 🐛 Troubleshooting

### Workflow schlägt fehl?

- Prüfe die Permissions (Schritt 3 oben)
- Gehe zu Actions → Failed Workflow → Klick drauf um Fehler zu sehen

### 404 Error nach Deployment?

- Prüfe ob GitHub Pages auf "GitHub Actions" steht
- Warte ein paar Minuten, manchmal dauert es

### Assets laden nicht?

- Prüfe ob `base` in vite.config.ts korrekt ist
- Sollte `/physio-flow-genesis/` sein (mit Slashes)

### Routes funktionieren nicht?

- Prüfe ob `basename` im BrowserRouter korrekt ist
- Prüfe ob 404.html im dist Ordner ist

## ✅ Checklist vor dem Pushen

- [ ] Alle Dateien commited
- [ ] GitHub Pages Permissions gesetzt
- [ ] Workflow-Datei existiert: `.github/workflows/deploy.yml`
- [ ] Build funktioniert lokal: `pnpm build`

Dann einfach pushen und fertig! 🚀
