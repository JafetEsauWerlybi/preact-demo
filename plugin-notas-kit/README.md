# plugin-notas-kit

### Parte 3 de la implementación — Extensibilidad y composición — tema: Plugins

**Guía para el instructor:** paso 3 de 7. El punto a transmitir es la
diferencia con una skill suelta (paso 2): esta misma idea de skill, pero
empaquetada para instalarse en cualquier otro repo con el mismo stack, sin
copiar archivos a mano. Cárguenlo juntos y prueben la skill que trae adentro.
Cuando quede claro, sigan con el paso 4 (MCP).

---

Empaqueta la skill `/nuevo-componente` (crea un componente nuevo de Preact
siguiendo las convenciones de `CLAUDE.md`) de forma instalable.

## Cómo probarlo

Desde la raíz del proyecto:

```bash
claude --plugin-dir ./plugin-notas-kit
```

Y dentro de la sesión: `/nuevo-componente NotaDestacada`.

## Por qué le conviene a un equipo real

Una skill que solo vive en un repo no escala. Empaquetada en un plugin, se
instala en los demás proyectos del equipo con un solo comando, en vez de
copiar carpetas a mano cada vez.
