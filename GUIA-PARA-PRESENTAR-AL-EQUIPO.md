# Guía para presentar las CLI features al equipo de SACS

Este documento es la agenda para presentarle a SACS lo que se investigó y
probó de las features de "Extensibilidad y composición" de Claude Code. Cada
punto usa el proyecto `Notas` (este mismo repo) como demo en vivo — no hay
que preparar diapositivas nuevas, solo abrir el proyecto y correr los
comandos indicados.

**Duración sugerida:** ~25-30 min (≈3-4 min por feature) + preguntas. Si el
tiempo es corto, las partes 1, 2 y 5 son las de beneficio más inmediato para
el día a día del equipo — se pueden presentar solas en una sesión de 15 min
y dejar el resto para una segunda sesión.

---

## Antes de empezar

Ten `Notas` corriendo (`npm install && npm run dev`) y una terminal abierta
en la raíz del proyecto con `claude` listo para usarse. El README del
proyecto trae el paso manual de una sola vez para dejar las skills y el
subagente en su lugar (`.claude/`).

---

## 1 — CLAUDE.md (~2 min)

**Qué mostrar:** abre `CLAUDE.md`, pide "escríbeme una función que sume dos
números" y señala que el comentario sale en español y sigue las reglas del
archivo, sin que nadie se las haya repetido.

**El pitch para SACS:** nadie tiene que explicarle las convenciones del
equipo a Claude cada vez que alguien nuevo lo usa — se escriben una vez y
quedan.

## 2 — Skills (~4 min)

**Qué mostrar:** corre `/agregar-campo-a-nota favorito boolean` en vivo y
enseña los 4 archivos que tocó (`types.ts`, `useNotes.ts`, `NoteForm.tsx`,
`NoteCard.tsx`). Conecta directamente con el caso de SACS: "esto es lo mismo
que agregar una variable de template — varios archivos, un solo comando".

**El pitch para SACS:** una tarea repetitiva y fácil de hacer a medias
(como agregar una variable de template) queda encapsulada una sola vez, para
todo el equipo.

## 3 — Plugins (~3 min)

**Qué mostrar:** `claude --plugin-dir ./plugin-notas-kit` y luego
`/nuevo-componente NotaDestacada`. Explica que es la misma idea de skill,
pero empaquetada para instalarse en otros proyectos.

**El pitch para SACS:** una skill que solo vive en un repo no escala —
empaquetada en un plugin, se instala en los demás proyectos del equipo con
un comando, sin copiar carpetas a mano.

## 4 — MCP (~3 min)

**Qué mostrar:** no hay demo en vivo dentro de este proyecto (no tiene
backend todavía) — usa `docs/mcp.md` para explicar el escenario con el
ejemplo del servidor de GitHub, o hazlo en vivo si alguien del equipo tiene
un token a la mano.

**El pitch para SACS:** Claude puede ir a buscar información real (una base
de datos, un API interno de SACS) en vez de que alguien la copie y pegue a
mano.

## 5 — Hooks (~3 min)

**Qué mostrar:** copia `docs/settings.hooks-example.json` a
`.claude/settings.json`, pide que edite cualquier archivo, y señala que el
chequeo de tipos corrió solo, sin que nadie lo pidiera.

**El pitch para SACS:** hay pasos (un chequeo, un lint, una validación) que
no deberían depender de que alguien se acuerde de correrlos — un hook los
corre siempre, pase lo que pase.

## 6 — Subagentes (~3 min)

**Qué mostrar:** pide "usa al subagente revisor-de-componentes para revisar
NoteCard.tsx" y señala que solo audita — no puede editar nada, ni por
accidente.

**El pitch para SACS:** se puede pedir una segunda opinión sobre el código
sin arriesgar que algo lo edite sin querer.

## 7 — Workflows dinámicos (~3 min)

**Qué mostrar:** pide "crea un workflow que revise cada componente de
`src/components` en paralelo, uno por agente, buscando problemas de
accesibilidad" y señala cómo se reparte el trabajo entre varios agentes a la
vez.

**El pitch para SACS:** una auditoría completa de código (que tomaría
revisar archivo por archivo) se reparte entre varios agentes en paralelo.

---

## Próximos pasos

Esta guía cubre solo la categoría "Extensibilidad y composición". Quedan
pendientes de investigar e implementar de la misma forma: **Automatización
recurrente** (`/loop`, tareas en la nube) y **Persistencia y contexto**
(sesiones, checkpoints, gestión de contexto) — la idea es repetir el mismo
formato: un proyecto de práctica + un repo de demo + esta misma guía, una
vez que estén listos.
