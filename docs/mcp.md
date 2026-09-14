# MCP en este proyecto

### Parte 4 de la implementación — Extensibilidad y composición — tema: MCP

**Guía para el instructor:** paso 4 de 7. Aquí no hay nada corriendo dentro
del proyecto — el objetivo es que se entienda la diferencia con Skills o
Plugins: MCP trae información REAL de afuera, no solo instrucciones
escritas de antemano. Si tienen un token de GitHub a la mano, hagan la
prueba de la sección de abajo en vivo. Cuando quede claro, sigan con el
paso 5 (Hooks).

---

Ahora mismo "Notas" guarda todo en `localStorage` — no hay ningún servicio
externo al que conectarse todavía, por eso no hay un MCP configurado en este
repo. Pero es el ejemplo más fácil de imaginar para ver por qué sirve MCP:

## El escenario real (el día que este proyecto crezca)

Si un día las notas se guardan en un backend propio en vez de en el
navegador, MCP es como conectarías Claude a esa base de datos directamente:

```bash
claude mcp add --transport http notas-api https://tu-api.tuempresa.com/mcp \
  --header "Authorization: Bearer TU_TOKEN"
```

Y luego, dentro de una sesión, en vez de copiar y pegar datos a mano, podrías
pedir directamente: "¿cuántas notas tiene el usuario con más notas guardadas?"
— y Claude consultaría la base de datos real para responder.

## Un ejemplo que sí puedes probar hoy

No necesitas tener un backend propio para probar MCP — puedes conectar un
servidor MCP público que ya exista, por ejemplo el de GitHub, y pedirle a
Claude que revise los issues de este mismo repo una vez que lo subas:

```bash
claude mcp add --transport http github https://mcp.github.com/endpoint \
  --header "Authorization: Bearer TU_TOKEN"
```

Luego, dentro de la sesión: `/mcp` para confirmar que quedó conectado, y
"muéstrame los issues abiertos de este repo".

## Por qué le conviene a un equipo real

Sin MCP, cualquier dato que Claude necesita tienes que copiarlo y pegarlo tú
mismo. Con MCP, Claude puede ir a buscarlo directamente — menos pasos, menos
información desactualizada.
