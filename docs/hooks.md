# Hooks en este proyecto

### Parte 5 de la implementación — Extensibilidad y composición — tema: Hooks

**Guía para el instructor:** paso 5 de 7. La idea a transmitir es que un hook
no depende de que Claude "decida" hacerlo — corre siempre que se cumple la
condición, a diferencia de una skill (que solo corre si alguien la invoca).
Actívenlo juntos y editen un archivo cualquiera para verlo dispararse solo.
Cuando quede claro, sigan con el paso 6 (Subagentes).

---

El ejemplo vive en `settings.hooks-example.json`, en esta misma carpeta, en
vez de estar activo desde el día 1 — así no se dispara antes de que llegues
aquí a propósito.

## Cómo probarlo

1. Copia (o mueve) `docs/settings.hooks-example.json` a `.claude/settings.json`,
   en la raíz del proyecto. Si ya existe ese archivo, agrega el bloque
   `"hooks"` al que ya tengas en vez de reemplazarlo entero.
2. Abre `claude` en la raíz del proyecto.
3. Pídele que edite cualquier archivo (por ejemplo, "agrégale un comentario a
   `CLAUDE.md`").
4. Deberías ver correr el chequeo de tipos de TypeScript solo, sin que tú lo
   pidas — eso es el hook disparándose.

## Por qué le conviene a un equipo real

Hay cosas (correr un chequeo, un lint, una validación) que no deberían
depender de que alguien se acuerde de hacerlas cada vez. Un hook las hace
pase lo que pase, sin importar quién esté usando Claude ese día.
