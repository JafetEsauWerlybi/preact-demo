---
description: Revisa un componente de Preact (.tsx o .jsx) buscando errores ortográficos en comentarios y texto visible, clases CSS que no siguen el patrón bloque__elemento, nombres de componente que no estén en PascalCase, y problemas de estructura u orden de elementos (por ejemplo, una etiqueta que debería ir antes que su campo y aparece después). Es de solo lectura: nunca modifica archivos, solo entrega un reporte.
---

Cuando te invoquen con /revisar-componente <nombre-o-ruta-del-componente>:

1. Localiza el archivo. Si te dan solo un nombre, búscalo dentro de
   `src/components/`.

2. **Ortografía:** revisa el texto que un usuario vería (labels, placeholders,
   botones, mensajes) y los comentarios en español del código. Reporta
   palabras mal escritas con la línea donde aparecen.

3. **Clases CSS:** revisa que cada clase usada en el JSX siga el patrón
   `bloque__elemento` (o el patrón que defina el `CLAUDE.md` del proyecto, si
   es distinto). Reporta cualquier clase que no lo siga, o que esté escrita
   pero no exista en el archivo de estilos del proyecto.

4. **Nombres (PascalCase):** revisa que el nombre de la función del
   componente y el nombre del archivo estén en PascalCase (por ejemplo
   `NoteCard`, no `noteCard` ni `note-card`).

5. **Estructura y orden:** revisa que cada campo tenga su etiqueta
   (`<label>` o `<span>` de nombre/descripción) inmediatamente antes del
   elemento al que describe, no después ni separada por otros elementos.
   Reporta cualquier campo donde el orden esté invertido o la etiqueta falte.

6. No edites ningún archivo bajo ninguna circunstancia. Entrega el resultado
   como una lista corta agrupada por las 4 categorías de arriba. Si una
   categoría no tiene hallazgos, dilo explícitamente (por ejemplo: "Ortografía:
   sin errores encontrados") en vez de omitirla.
