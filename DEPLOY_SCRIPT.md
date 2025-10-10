# 🚀 Deploy Script

## Verwendung

Einfach ausführen:

```bash
pnpm deploy
```

## Was passiert beim Deploy?

Das Script führt automatisch folgende Schritte durch:

### 1. 🌿 Git Branch Check

- Prüft ob du auf `main` bist
- Warnt wenn du auf einem anderen Branch bist
- Fragt ob du trotzdem deployen willst

### 2. 📝 Uncommitted Changes Check

- Prüft ob es uncommittete Änderungen gibt
- Fragt ob du sie committen willst
- Wenn ja: Fragt nach Commit-Message
- Staged und committed automatisch

### 3. 🔍 TypeScript Type Check

```bash
pnpm typecheck
```

- Prüft TypeScript Fehler
- Bricht ab bei Fehlern

### 4. ✨ ESLint Check

```bash
pnpm lint
```

- Prüft Code-Qualität
- Bricht ab bei Fehlern

### 5. 💅 Prettier Formatting

```bash
pnpm format:check
```

- Prüft Code-Formatierung
- Bei Problemen: Formatiert automatisch
- Committed automatisch mit "style: auto-format code"

### 6. 🏗️ Build

```bash
pnpm build
```

- Baut das Projekt für Production
- Bricht ab bei Fehlern

### 7. ⬆️ Git Push

```bash
git push origin main
```

- Pusht alle Commits zu GitHub

### 8. 🎉 Deployment

- GitHub Actions übernimmt automatisch
- Nach 2-3 Minuten ist die Seite live

## Einzelne Schritte ausführen

Du kannst auch einzelne Checks manuell ausführen:

```bash
# TypeScript Check
pnpm typecheck

# ESLint
pnpm lint

# ESLint mit Auto-Fix
pnpm lint:fix

# Prettier Check
pnpm format:check

# Prettier Auto-Format
pnpm format

# Build
pnpm build
```

## Tipps

- **Vor dem Deploy**: Teste lokal mit `pnpm dev`
- **Nach dem Deploy**: Check GitHub Actions unter https://github.com/privlab-org/physio-flow-genesis/actions
- **Live URL**: https://privlab-org.github.io/physio-flow-genesis/

## Fehlerbehebung

### TypeScript Fehler

```bash
pnpm typecheck
```

Zeigt dir wo die Fehler sind

### Linting Fehler

```bash
pnpm lint:fix
```

Versucht Fehler automatisch zu fixen

### Formatting Fehler

```bash
pnpm format
```

Formatiert automatisch

### Build Fehler

Prüfe die Konsole für Details, meist TypeScript oder Import-Fehler

## Abbruch

Drücke `Ctrl+C` um das Deploy-Script jederzeit abzubrechen.
