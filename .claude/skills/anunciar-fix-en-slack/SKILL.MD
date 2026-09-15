---
description: Resume, en lenguaje entendible y sin jerga técnica, un problema que se acaba de resolver en esta sesión y lo publica en un canal de Slack usando el MCP de Slack ya conectado. Útil para avisarle al equipo o a los usuarios qué se corrigió y qué cambia para ellos.
---

### Bonus — combinando Skills + MCP
  
**Guía para el instructor:** no es uno de los 7 pasos numerados, es un
cierre que junta la Parte 2 (Skills) con la Parte 4 (MCP): la skill define
el formato fijo del mensaje, el MCP de Slack es el que de verdad lo manda.
Úsala justo después de resolver algo real en la sesión (un campo nuevo, un
bug), para que el contenido no sea inventado.

---

Cuando te invoquen con /anunciar-fix-en-slack <#canal>:

1. Repasa lo que se hizo en esta sesión — el problema original y el cambio
   que lo resolvió.
2. Redacta un mensaje corto, sin tecnicismos (nada de nombres de archivos,
   funciones ni jerga de programación), con estas 3 partes:
   - Qué pasaba (1-2 líneas, en términos que entienda alguien que no
     programa).
   - Qué se hizo para arreglarlo (1 línea).
   - Qué cambia para quien usa la app (1 línea, concreta).
3. Muéstrale el mensaje completo a la persona que te invocó y espera su
   confirmación explícita antes de mandarlo — nunca lo publiques sin que lo
   haya visto y aprobado primero.
4. Ya confirmado, publícalo en el canal indicado usando el MCP de Slack ya
   conectado. Si no te dieron un canal, pregúntalo antes de mandar nada.
5. Si el MCP de Slack no aparece conectado, dilo y detente — no intentes
   conectarlo tú mismo, solo avisa que falta ese paso.
'@ | Set-Content .claude\skills\anunciar-fix-en-slack\SKILL.md -Encoding utf8