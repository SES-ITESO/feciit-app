# Layer site 🌐

Layer del sitio web publico.

## Proposito

`site` contiene la experiencia de cara a usuarios finales:

- Home/landing publica.
- Paginas de marketing o contenido publico.
- Componentes y estilos orientados a branding.

## Decision de UI

En `site` **no se usa Nuxt UI** para conservar libertad total de diseño y direccion visual.

Nuxt UI se reserva para capas internas (`1-base`, `2-auth`, `admin`) donde se prioriza velocidad de desarrollo.

## Relacion con otras layers

- Puede reutilizar fundamentos comunes de `1-base` cuando sea conveniente.
- Debe evitar acoplarse a flujos internos de staff/admin.

## Relacion con Nuxt Layers

- Se auto-registra por estar en `layers/` y tener `nuxt.config.ts`.
- Nuxt combina esta capa con el resto del proyecto durante el arranque.
