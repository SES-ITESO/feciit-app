# Layer admin 🛡️

Layer para experiencia interna de staff y administradores.

## Proposito

`admin` concentra interfaces y flujos operativos internos:

- Dashboard de administracion.
- Layouts internos.
- Paginas de operacion para staff.

## Lineamientos

- Priorizar productividad, consistencia y mantenibilidad.
- Reusar componentes/composables de `1-base` y `2-auth`.
- Mantener separado de la experiencia publica (`site`).

## UI en admin

Esta capa usa **Nuxt UI** para acelerar desarrollo de interfaces internas.

## Relacion con Nuxt Layers

- Se auto-registra automaticamente desde `layers/`.
- Nuxt integra sus paginas/layouts/config junto con las demas capas.
- Si un recurso existe en varias layers, se aplica la prioridad de Nuxt (y la app principal siempre tiene prioridad maxima).
