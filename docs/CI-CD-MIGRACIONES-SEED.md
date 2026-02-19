# 🚀 CI/CD: flujo de migraciones + seed de admin maestro

## 🎯 Objetivo

Definir un flujo seguro y repetible para:

- aplicar migraciones de base de datos,
- sembrar el usuario admin maestro,
- desplegar la aplicacion sin romper autenticacion.

Este proyecto usa:

- `drizzle-kit migrate` para cambios de esquema,
- `pnpm db:seed:admin` para crear/ajustar el admin maestro,
- Better Auth para crear credenciales de email/password de forma correcta.

## 🔐 Variables de entorno requeridas

Configura estas variables como secretos del pipeline (no hardcodearlas en el repo):

- `DATABASE_URL`
- `SEED_ADMIN_EMAIL`
- `SEED_ADMIN_NAME`
- `SEED_ADMIN_PASSWORD`

Notas:

- `SEED_ADMIN_PASSWORD` debe tener al menos 8 caracteres.
- En produccion, no dependas de `.env` local; inyecta variables desde el proveedor de CI/CD o secret manager. ⚠️

## 🧱 Flujo recomendado de release

Orden recomendado:

1. `pnpm install --frozen-lockfile`
2. `pnpm db:migrate`
3. `pnpm db:seed:admin`
4. `pnpm build`
5. desplegar/arrancar servicio

### ✅ Por que este orden

- Primero migras para garantizar que las tablas/columnas existen.
- Luego ejecutas seed para asegurar admin inicial o corregir rol/estado.
- Finalmente construyes y despliegas con DB en estado consistente.

## ♻️ Comportamiento idempotente del seed

El script `scripts/seed-admin.ts` esta pensado para ejecutarse varias veces sin duplicar usuarios:

- Si el admin no existe: lo crea via Better Auth.
- Si existe: no crea duplicado.
- Siempre fuerza:
    - `role = "admin"`
    - `emailVerified = true`

Esto permite reintentos seguros en CI/CD si una corrida falla por causas externas.

## 🏭 Ejecucion en produccion

Recomendacion operativa:

- Ejecutar migracion + seed en un **job de release** (una vez por despliegue).
- No ejecutar este seed en cada arranque de instancia/pod.
- Si tienes multiples workers de release, serializa la etapa de DB para evitar carreras.

## 🧪 Ejemplo de pipeline (GitHub Actions)

```yaml
name: release

on:
    workflow_dispatch:

jobs:
    release:
        runs-on: ubuntu-latest
        steps:
            - name: Checkout
              uses: actions/checkout@v4

            - name: Setup pnpm
              uses: pnpm/action-setup@v4
              with:
                  version: 10

            - name: Setup Node
              uses: actions/setup-node@v4
              with:
                  node-version: 22
                  cache: pnpm

            - name: Install deps
              run: pnpm install --frozen-lockfile

            - name: Run DB migrations
              run: pnpm db:migrate
              env:
                  DATABASE_URL: ${{ secrets.DATABASE_URL }}

            - name: Seed master admin
              run: pnpm db:seed:admin
              env:
                  DATABASE_URL: ${{ secrets.DATABASE_URL }}
                  SEED_ADMIN_EMAIL: ${{ secrets.SEED_ADMIN_EMAIL }}
                  SEED_ADMIN_NAME: ${{ secrets.SEED_ADMIN_NAME }}
                  SEED_ADMIN_PASSWORD: ${{ secrets.SEED_ADMIN_PASSWORD }}

            - name: Build app
              run: pnpm build
```

## ⚠️ Errores comunes

- Ejecutar seed antes de migrar.
- No definir secretos requeridos.
- Usar una contrasena corta para `SEED_ADMIN_PASSWORD`.
- Correr seed en cada replica al iniciar app.

## ✅ Checklist rapido

- [ ] Existen secretos de DB y admin en CI/CD.
- [ ] El pipeline ejecuta `db:migrate` antes de `db:seed:admin`.
- [ ] El seed se ejecuta solo en etapa de release.
- [ ] El despliegue inicia solo si migracion/seed terminan bien.
