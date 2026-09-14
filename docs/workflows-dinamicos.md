# Workflows dinámicos en este proyecto

### Parte 7 de la implementación — Extensibilidad y composición — tema: Workflows dinámicos

**Guía para el instructor:** paso 7 de 7, el cierre de esta primera parte.
La idea es que se vea la diferencia de escala con un subagente normal (paso
6): aquí el punto es que sean *varios* trabajando a la vez, no solo aislar
una tarea. Pide el prompt de abajo en vivo y deja que el grupo vea cómo se
reparte el trabajo entre agentes en paralelo.

---

No hay nada que configurar — es solo una forma de pedir las cosas dentro de
la conversación.

## Cómo probarlo

Pide, dentro de una sesión en la raíz del proyecto:

> "Crea un workflow que revise cada componente de `src/components` en
> paralelo, uno por agente, buscando problemas de accesibilidad."

Observa cómo Claude lanza varios agentes a la vez en lugar de revisar los
componentes uno por uno, y junta los hallazgos al final.

## Por qué le conviene a un equipo real

Una auditoría completa del código —que tomaría revisar archivo por
archivo— se reparte entre varios agentes a la vez, en vez de hacerse en
serie.
