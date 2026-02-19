# Feciit App 🚀

Aplicacion web construida con **Nuxt 4 + Vue 3** y organizada por **layers** para separar dominios y facilitar el crecimiento del proyecto.

## Que es este proyecto 🧭

Feciit App esta pensada para manejar distintas experiencias dentro del mismo repositorio:

- Sitio publico (`site`) para usuarios finales.
- Areas internas (`admin`) para staff/administradores.
- Dominio de autenticacion (`2-auth`) compartible en toda la app.
- Capa base (`1-base`) con piezas reutilizables y configuracion comun.

Este enfoque permite evolucionar cada parte por separado sin perder consistencia tecnica.

## Arquitectura por Layers en Nuxt 🧱

Nuxt detecta automaticamente los layers dentro de `layers/` (si cada uno tiene su `nuxt.config.ts`) y luego **fusiona** configuraciones, componentes, composables, paginas y utilidades al iniciar el proyecto.

- Los layers locales se **auto-registran** desde `layers/`.
- Nuxt los integra y resuelve conflictos por prioridad.
- El orden alfabetico importa; por eso usamos prefijos numericos (`1-`, `2-`) para controlar prioridad.
- La app principal puede sobrescribir lo que venga de cualquier layer.

En este repo, la intencion es mantener capas de dominio claras y reutilizables.

## Layers actuales del proyecto 🧩

### `layers/1-base` (base compartida)

Base comun para el resto de la aplicacion:

- Configuracion compartida.
- Estilos base.
- Composables/componentes reutilizables.
- Defaults de UI para lo interno.

Actualmente ya centraliza CSS base y configuraciones compartidas para acelerar el desarrollo en otras capas.

### `layers/2-auth` (autenticacion)

Capa dedicada a autenticacion:

- Logica de auth.
- Flujo de sesiones y acceso.
- Utilidades para consumir auth desde otras capas.

Objetivo de esta layer: exportar herramientas reutilizables para que `admin`/dashboard y otras areas internas integren autenticacion sin duplicar logica.

### `layers/admin` (staff/administracion)

Layer para experiencia interna:

- Vistas de administradores y staff.
- Layouts internos.
- Dashboard operativo.

Aqui se prioriza velocidad de desarrollo y consistencia de componentes internos.

### `layers/site` (sitio publico)

Layer para la experiencia publica:

- Landing/sitio web visible a usuarios.
- Diseño con mayor libertad visual.

Importante: en `site` **no se usa Nuxt UI** como dependencia de diseño para preservar flexibilidad creativa. Nuxt UI se utiliza en capas internas para acelerar desarrollo.

## Nuxt UI: donde si y donde no 🎨

- **Si**: capas internas como `1-base`, `2-auth` y `admin` para construir rapido interfaces de trabajo.
- **No**: `site`, para mantener libertad de diseño y direccion visual propia del sitio publico.

## Requisitos e instalaciones recomendadas 🛠️

Este proyecto usa `pnpm` como gestor de paquetes.

Recomendado instalar:

1. **Node.js LTS**
2. **pnpm**
3. **just** (para atajos de infraestructura)
4. **Docker + Docker Compose**

Instalacion rapida sugerida:

```bash
npm install -g pnpm
brew install just
```

> En macOS puedes instalar Docker Desktop para usar `docker compose`.

## Instalacion del proyecto 📦

```bash
pnpm install
```

## Comandos principales ⚙️

```bash
pnpm dev
pnpm build
pnpm preview
pnpm generate
```

### Base de datos (Drizzle)

Este branch deja configurada la base inicial con:

- Schema en `server/infra/db/schema/`
- Relaciones en `server/infra/db/schema/relations.ts`
- Migraciones en `server/infra/db/migrations/`

Flujo recomendado para el equipo:

1. Levantar infraestructura local (`just infra-start`).
2. Generar migraciones cuando cambie el schema.
3. Aplicar migraciones en la base de datos local.

```bash
pnpm db:generate
pnpm db:migrate
pnpm db:push
pnpm db:studio
pnpm db:seed:dev-users
```

### Seed de usuarios staff (solo desarrollo)

Para desbloquear pruebas del flujo OTP de staff mientras se construye la UI de creacion de usuarios, existe el seeder:

```bash
pnpm db:seed:dev-users
```

Notas importantes:

- Este script es **solo para desarrollo local**.
- Crea/actualiza usuarios staff de prueba con correos `@feciit.dev`.
- Crea usuarios via Better Auth y asigna una contrasena aleatoria temporal (no se usa para login OTP).
- El script se rehusa a correr en `NODE_ENV=production`.

## Justfile e infraestructura local 🧰

El repo incluye un `Justfile` para simplificar tareas repetitivas de infraestructura:

```bash
just infra-start
just infra-stop
just infra-clean
```

Equivalencias:

- `infra-start`: levanta servicios con `docker compose up --build -d`.
- `infra-stop`: detiene servicios con `docker compose stop`.
- `infra-clean`: elimina contenedores y volumenes con `docker compose down -v`.

## Docker Compose incluido 🐳

`docker-compose.yaml` levanta servicios de soporte para desarrollo local:

- **PostgreSQL** (`database`) en `localhost:5432`
- **pgAdmin** (`pgweb`) en `localhost:5050`
- **Mailpit** (`smtp`) en `localhost:1025` (SMTP) y `localhost:8025` (UI)
- **Azurite** (`storage`) en `10000-10002`

### Acceso a pgAdmin

Credenciales de desarrollo local:

- Email: `admin@local.dev`
- Password: `unsafe`

Para conectar PostgreSQL desde pgAdmin, crear un servidor con:

- Host: `database` (nombre del servicio en Docker Compose)
- Port: `5432`
- Username: `user`
- Password: `unsafe`
- Database: `feciit`

Esto permite trabajar localmente con base de datos, correo y almacenamiento sin depender de servicios externos.

## Tecnologias del proyecto + docs oficiales 📚

- [Nuxt 4](https://nuxt.com/docs/4.x/getting-started/introduction)
- [Nuxt Layers](https://nuxt.com/docs/4.x/getting-started/layers)
- [Nuxt Directory Layers](https://nuxt.com/docs/4.x/directory-structure/layers)
- [Vue 3](https://vuejs.org/guide/introduction.html)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Nuxt UI](https://ui.nuxt.com/)
- [Nuxt Image](https://image.nuxt.com/)
- [Nuxt A11y](https://github.com/nuxt-modules/a11y)
- [Better Auth](https://www.better-auth.com/docs)
- [Drizzle ORM](https://orm.drizzle.team/docs/overview)
- [Drizzle Kit](https://orm.drizzle.team/docs/drizzle-kit-overview)
- [PostgreSQL (`pg`)](https://node-postgres.com/)
- [Zod](https://zod.dev/)
- [ESLint](https://eslint.org/docs/latest/)
- [Prettier](https://prettier.io/docs/en/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Just](https://github.com/casey/just)

## VS Code recomendado 💻

- [Vue - Official (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Notas de mantenimiento ✅

- Cada layer debe tener `nuxt.config.ts` para ser reconocido por Nuxt.
- Mantener responsabilidades claras por layer evita acoplamiento.
- Si agregas nuevos dominios, preferir nuevas layers en `layers/`.
