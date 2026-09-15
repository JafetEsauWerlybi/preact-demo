# Reglas de este proyecto (Notas)

### Parte 1 de la implementación — Extensibilidad y composición — tema: CLAUDE.md

**Guía para el instructor:** este es el paso 1 de 7 de la práctica. El
objetivo es que quien está aprendiendo vea que Claude lee este archivo solo,
antes de responder. Pide algo simple ("escríbeme una función") y confirma que
el resultado ya sigue las reglas de abajo sin que se las repitas. Cuando
quede claro, sigue con el paso 2 (Skills — `/agregar-campo-a-nota`).

---

Convenciones reales de este repo — no genéricas — para que cualquiera (tú, un
compañero, o Claude) programe consistente sin tener que preguntar cada vez.

- Componentes funcionales con hooks. Nunca clases.
- Las props de un componente se tipan con una `interface` al inicio del
  archivo (ver `NoteCard.tsx` como referencia).
- Los estilos van en `app.css`, con nombres tipo `bloque__elemento`
  (ej. `note-card__title`). Nada de estilos inline ni CSS-in-JS.
- Toda la persistencia de datos vive en `src/hooks/` — un componente nunca
  toca `localStorage` directamente, siempre pasa por un hook (ver
  `useNotes.ts`).
- Los comentarios de código van en español.
- Cada componente nuevo va en su propio archivo dentro de `src/components/`.
- Hablar siempre en español al interactuar con el usuario.

## Cómo probarlo

Pide algo simple como "agrega un botón para editar una nota" y revisa si el
resultado sigue estas reglas (hook para la lógica, componente sin acceso
directo a localStorage, estilos en app.css) sin que se lo tengas que pedir.
