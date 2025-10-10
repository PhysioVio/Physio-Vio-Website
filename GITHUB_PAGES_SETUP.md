# 🚀 GitHub Pages Deployment - Schnellstart

## Was du jetzt machen musst:

### 1️⃣ In GitHub Settings:

1. Gehe zu: https://github.com/privlab-org/physio-flow-genesis/settings/pages
2. Unter **"Source"**: Wähle **"GitHub Actions"**
3. Fertig! (kein Save-Button nötig)

### 2️⃣ Workflow Permissions setzen:

1. Gehe zu: https://github.com/privlab-org/physio-flow-genesis/settings/actions
2. Runterscrollen zu **"Workflow permissions"**
3. Wähle: ✅ **"Read and write permissions"**
4. Klick auf **"Save"**

### 3️⃣ Pushen:

```bash
git add .
git commit -m "🚀 Deploy to GitHub Pages"
git push origin main
```

### 4️⃣ Fertig!

Nach 2-3 Minuten ist die Website live unter:
**https://privlab-org.github.io/physio-flow-genesis/**

---

## ✅ Was bereits konfiguriert ist:

- ✅ Vite config mit korrektem `base` path
- ✅ React Router mit `basename`
- ✅ 404 Fallback für Client-Side Routing
- ✅ GitHub Actions Workflow
- ✅ Automatisches Deployment bei Push auf main

## 📝 Weitere Details:

Siehe: `DEPLOYMENT.md` für ausführliche Anleitung

---

**Das war's! Einfach pushen und es funktioniert! 🎉**
