---
description: Crea un componente nuevo de Preact siguiendo las convenciones del proyecto (props tipadas, sin acceso directo a localStorage, estilos en app.css)
---

Cuando te invoquen con /nuevo-componente <Nombre>:

1. Crea `src/components/<Nombre>.tsx` con un componente funcional, props
   tipadas con una `interface`, y comentarios en español.
2. Si el componente necesita datos persistentes, usa un hook existente en
   `src/hooks/` — nunca accedas a `localStorage` directamente desde el
   componente.
3. Agrega las clases CSS que necesite a `app.css`, con el patrón
   `bloque__elemento`.
4. Muestra un resumen de qué archivos creaste o modificaste.
