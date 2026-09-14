---
description: Agrega un campo nuevo a las notas, tocando todos los archivos donde debe reflejarse (tipo, guardado, formulario y tarjeta)
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
