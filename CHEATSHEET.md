# 🚀 Deployment Cheatsheet

## Schnelles Deployment

```bash
pnpm deploy
```

Das war's! 🎉

---

## Einzelne Commands

```bash
# Development
pnpm dev                  # Start dev server

# Checks
pnpm typecheck           # TypeScript prüfen
pnpm lint                # ESLint prüfen
pnpm lint:fix            # ESLint auto-fix
pnpm format              # Code formatieren
pnpm format:check        # Format prüfen

# Build
pnpm build               # Production build
pnpm preview             # Build preview

# Deploy
pnpm deploy              # Alles automatisch!
```

---

## Was macht `pnpm deploy`?

1. ✅ Prüft Git Branch (main)
2. ✅ Prüft uncommitted changes
3. ✅ TypeScript Check
4. ✅ ESLint Check
5. ✅ Prettier Format
6. ✅ Production Build
7. ✅ Git Push
8. ✅ Triggert GitHub Actions

---

## Nach dem Deploy

- **Status prüfen**: https://github.com/privlab-org/physio-flow-genesis/actions
- **Live URL**: https://privlab-org.github.io/physio-flow-genesis/
- **Dauer**: 2-3 Minuten

---

## Tipps

- Committe oft während der Entwicklung
- Teste lokal mit `pnpm dev` vor Deploy
- Bei Fehlern: Einzelne Commands ausführen zum Debuggen
- `pnpm deploy` macht alles für dich! 🚀
