# Layer 1-base 🧱

Layer base compartida de la aplicacion.

## Proposito

`1-base` define fundamentos reutilizables para otras capas:

- Componentes base.
- Composables compartidos.
- Configuracion comun (`app.config`, `nuxt.config`).
- Estilos globales/base.

## Que vive aqui

- Todo lo que sea comun para `2-auth`, `admin` y otras capas internas.
- Defaults de UI para acelerar desarrollo interno.

## Convenciones

- Evitar logica de negocio especifica de dominio.
- Mantener piezas genericas y reusables.
- Si algo empieza a ser de auth/admin/site, moverlo a su layer correspondiente.

## Relacion con Nuxt Layers

- Esta layer se auto-registra por estar dentro de `layers/` y tener `nuxt.config.ts`.
- Nuxt fusiona su configuracion y recursos con el resto del proyecto.
- Al usar prefijo `1-`, tiene prioridad menor frente a capas con prefijos mayores (por ejemplo `2-auth`).
