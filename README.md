# Notas

Una app de notas sencilla — crea notas y se guardan en `localStorage` — hecha
en **Preact + TypeScript + Vite**. No es el objetivo en sí: es el proyecto
real sobre el que se practican, paso a paso y con código de verdad, las 7
features de "Extensibilidad y composición" de Claude Code.

Este repo funciona como una práctica guiada de 7 partes — cada archivo clave
trae su propio "Parte N de la implementación" con una guía para quien la
esté presentando. Para el material pensado para el equipo de SACS
específicamente, ver `GUIA-PARA-PRESENTAR-AL-EQUIPO.md`.

## Correrlo

```bash
npm install
npm run dev
```

Abre la URL que te muestre la terminal. Para compilar: `npm run build`.

**Stack:** Preact 10.29, Vite 8.3, TypeScript 6 — sin librerías extra, a
propósito, para que el ejemplo sea fácil de leer completo en un rato.

## Estructura

```
src/
  types.ts                     — la forma de una nota (Note)
  hooks/useNotes.ts             — toda la lógica de localStorage vive aquí
  components/
    NoteForm.tsx                — formulario para crear una nota
    NoteList.tsx                — la lista completa
    NoteCard.tsx                — una nota individual
  app.tsx                       — junta todo
CLAUDE.md                       — Parte 1 · CLAUDE.md
.claude/skills/agregar-campo-a-nota/SKILL.md — Parte 2 · Skills
plugin-notas-kit/                — Parte 3 · Plugins
docs/mcp.md                      — Parte 4 · MCP
docs/hooks.md + settings.hooks-example.json — Parte 5 · Hooks
.claude/agents/revisor-de-componentes.md — Parte 6 · Subagentes
docs/workflows-dinamicos.md      — Parte 7 · Workflows dinámicos
GUIA-PARA-PRESENTAR-AL-EQUIPO.md — guía para presentarlo en SACS
```

---

## Las 7 partes de la práctica

Cada una trae, dentro del archivo mismo, su número de parte y una guía corta
para quien la esté presentando ("Guía para el instructor"). El orden importa
— cada parte da por hecho que ya viste la anterior.

| Parte | Tema | Dónde está |
|---|---|---|
| 1 | CLAUDE.md | `CLAUDE.md` (ya activo) |
| 2 | Skills | `.claude/skills/agregar-campo-a-nota/SKILL.md` |
| 3 | Plugins | `plugin-notas-kit/README.md` |
| 4 | MCP | `docs/mcp.md` |
| 5 | Hooks | `docs/hooks.md` |
| 6 | Subagentes | `.claude/agents/revisor-de-componentes.md` |
| 7 | Workflows dinámicos | `docs/workflows-dinamicos.md` |

### Resumen rápido de cada una

**Parte 1 — CLAUDE.md:** ya está activo. Pide algo simple y confirma que
Claude sigue las reglas del archivo sin que se las repitas.

**Parte 2 — Skills:** trae `/agregar-campo-a-nota` — igual que agregar una
variable de template toca varios archivos, agregar un campo a una nota toca
`types.ts`, `useNotes.ts`, `NoteForm.tsx` y `NoteCard.tsx`, y la skill los
toca todos sin que se te olvide ninguno. Prueba:
`/agregar-campo-a-nota favorito boolean`.

**Parte 3 — Plugins:** `plugin-notas-kit/` empaqueta otra skill
(`/nuevo-componente`) de forma instalable. Cárgalo con
`claude --plugin-dir ./plugin-notas-kit`.

**Parte 4 — MCP:** este proyecto no tiene backend todavía, así que
`docs/mcp.md` explica el escenario real (cuando lo tenga) y un ejemplo que sí
puedes probar hoy con un servidor público.

**Parte 5 — Hooks:** `docs/hooks.md` corre el chequeo de tipos
automáticamente al editar un archivo — desactivado a propósito hasta que lo
actives tú mismo.

**Parte 6 — Subagentes:** `revisor-de-componentes` solo audita, nunca edita.

**Parte 7 — Workflows dinámicos:** solo un prompt — reparte una auditoría
completa entre varios agentes en paralelo.

---

## Paso manual antes de probar Skills y Subagentes (una sola vez)

Dos archivos no se pueden escribir directamente dentro de `.claude/` de
forma remota, así que créalos tú mismo con este bloque (crea las carpetas y
el contenido en un solo paso). Desde la raíz del proyecto, en PowerShell:

```powershell
New-Item -ItemType Directory -Force .claude\skills\agregar-campo-a-nota, .claude\agents | Out-Null

@'
---
description: Agrega un campo nuevo a las notas, tocando todos los archivos donde debe reflejarse (tipo, guardado, formulario y tarjeta)
---

### Parte 2 de la implementación — Extensibilidad y composición — tema: Skills

**Guía para el instructor:** paso 2 de 7. Aquí el punto es ver una skill real
resolviendo el mismo problema de "tocar varios archivos sin que se te olvide
ninguno" que ya vieron con SACS, pero sobre código de verdad. Prueben
/agregar-campo-a-nota favorito boolean en vivo. Cuando quede claro, sigan
con el paso 3 (Plugins).

---

Cuando te invoquen con /agregar-campo-a-nota <nombre-del-campo> <tipo>:

1. Agrega el campo a la interfaz `Note` en `src/types.ts`.
2. Si el campo necesita un valor por default al crear una nota, actualízalo
   en `addNote` dentro de `src/hooks/useNotes.ts`.
3. Si el campo se debe capturar al crear la nota, agrega el control
   correspondiente en `src/components/NoteForm.tsx`.
4. Si el campo se debe mostrar, agrégalo a `src/components/NoteCard.tsx`.
5. Al final, dime en qué archivos NO hiciste cambios y por qué (por ejemplo:
   "no toqué NoteForm porque el campo se genera solo, no se captura").
'@ | Set-Content .claude\skills\agregar-campo-a-nota\SKILL.md -Encoding utf8

@'
---
name: revisor-de-componentes
description: Revisa componentes de Preact contra las convenciones de CLAUDE.md, sin editar nada
tools: [Read, Grep]
---

### Parte 6 de la implementación — Extensibilidad y composición — tema: Subagentes

**Guía para el instructor:** paso 6 de 7. El punto es mostrar un subagente
que solo puede leer, nunca editar — para pedir una segunda opinión sin
riesgo. Pídanle en vivo que revise NoteCard.tsx. Cuando quede claro, sigan
con el paso 7 (Workflows dinámicos).

---

Revisa los componentes que te indiquen (o todos los de `src/components` si no
te dicen cuáles) contra las reglas de `CLAUDE.md`:

- ¿Es un componente funcional con props tipadas con una `interface`?
- ¿Accede a `localStorage` directamente en vez de usar un hook de
  `src/hooks/`?
- ¿Tiene estilos inline en vez de clases en `app.css`?

Da un reporte corto por componente. Nunca edites ni corrijas nada tú
mismo — tu trabajo es solo investigar y reportar.
'@ | Set-Content .claude\agents\revisor-de-componentes.md -Encoding utf8
```

## Subirlo a Git / GitHub

```bash
git init
git add .
git commit -m "Notas: practica guiada de 7 partes de CLI features de Claude Code"
```

Luego crea un repo vacío en GitHub y:

```bash
git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
git branch -M main
git push -u origin main
```
