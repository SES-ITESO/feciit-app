# Layer 2-auth 🔐

Layer de autenticacion de la aplicacion.

## Proposito

`2-auth` centraliza todo lo relacionado con identidad y acceso:

- Inicio de sesion / sesion.
- Flujos de autenticacion.
- Helpers y utilidades para auth.

## Objetivo de arquitectura

Ademas de resolver auth, esta layer debe exponer utilidades reutilizables para otras capas internas (por ejemplo `admin` y dashboard) sin duplicar logica.

Ejemplos de piezas esperadas:

- Composables de sesion (`useAuth`, `useCurrentUser`, etc.).
- Guards o middleware de acceso.
- Helpers para permisos/roles.

## Relacion con otras layers

- `1-base` provee la base compartida.
- `2-auth` agrega el dominio de autenticacion encima de esa base.
- `admin` consume utilidades de auth para proteger vistas internas.

## Relacion con Nuxt Layers

- Esta layer se auto-registra por estar en `layers/` con su `nuxt.config.ts`.
- Nuxt fusiona su configuracion con la app principal.
- Por el prefijo `2-`, puede sobrescribir recursos de `1-base` cuando corresponda.
