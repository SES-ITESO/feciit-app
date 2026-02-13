# REQUERIMIENTOS FUNCIONALES - FASE INICIAL 🚀

## 1) Objetivo del sistema 🎯

Construir una plataforma para FECIIT que permita:

- Mostrar informacion publica en el sitio web (proyectos, talleres, eventos, etc.).
- Operar la gestion interna del evento para staff y admin (alta de proyectos, evaluadores, talleres y usuarios).

---

## 2) Alcance inicial (MVP) 📌

### 2.1 Sitio publico 🌐

El sitio mostrara informacion proveniente de la base de datos:

- Proyectos
- Talleres
- Eventos
- Otros contenidos relevantes de FECIIT

> Nota: En esta fase, la prioridad funcional esta en la operacion interna (backoffice).

### 2.2 Backoffice para operacion interna 🛠️

Funciones principales para personal autorizado:

1. Alta de proyectos
2. Alta y asignacion de evaluadores
3. Alta de talleres
4. Gestion de usuarios (solo admin)

---

## 3) Roles y permisos 👥

### 3.1 Admin 👑

Puede realizar todo lo que hace staff, mas:

- Crear usuarios de tipo staff
- Gestionar autenticacion de admins (usuario + contrasena)

### 3.2 Staff 🧩

Puede:

- Dar de alta proyectos
- Dar de alta evaluadores
- Asignar evaluadores a proyectos
- Dar de alta talleres

Autenticacion propuesta:

- Acceso por OTP via correo electronico ✉️

### 3.3 Pseudo-usuarios (sin cuenta tradicional) 🪪

#### a) Evaluador/Juez 🧑‍⚖️

- No requiere cuenta formal.
- Flujo basado en formulario + seleccion de nombre.

#### b) Asistente de taller 🙋

- No requiere cuenta formal.
- Evalua talleres mediante formulario simple.

---

## 4) Requerimientos funcionales por modulo ⚙️

## RF-01. Gestion de proyectos 📚

El staff/admin debe poder registrar proyectos de participantes.

### RF-01.1 Carga masiva de proyectos por archivo

- El sistema debe permitir subir archivo CSV/Excel.
- El sistema debe mapear columnas del archivo a campos del proyecto.
- El sistema debe mostrar vista previa antes de confirmar importacion.
- El sistema debe validar estructura y datos minimos requeridos.
- El sistema debe reportar errores por fila y permitir corregir/reintentar.

### RF-01.2 Alta manual de proyecto

- El sistema debe permitir capturar un proyecto individualmente.

---

## RF-02. Gestion de evaluadores y asignaciones 🧑‍⚖️📝

El staff/admin debe poder registrar evaluadores y asignarles proyectos.

### RF-02.1 Alta de evaluador

- Captura minima: nombre del evaluador.
- (Opcional futuro) datos de contacto.

### RF-02.2 Asignacion a proyectos

- El staff/admin debe poder asignar uno o varios proyectos por evaluador.
- El sistema debe permitir visualizar que proyectos tiene cada evaluador.
- El sistema debe marcar estado de evaluacion por proyecto (pendiente/evaluado).

---

## RF-03. Gestion de talleres 🧪

El staff/admin debe poder registrar talleres del evento.

### RF-03.1 Alta de taller

- Campos base: nombre, fecha, horario y datos descriptivos.
- Cada taller debe quedar disponible para evaluacion posterior por asistentes.

---

## RF-04. Gestion de usuarios internos 🔐

Solo el admin puede gestionar usuarios internos.

### RF-04.1 Usuarios staff

- El admin puede crear usuarios staff.
- El staff se autentica por OTP via correo.

### RF-04.2 Usuarios admin

- Autenticacion por usuario y contrasena.
- El admin tiene acceso total al backoffice.

---

## RF-05. Flujo de evaluacion para jueces (pseudo-usuario) 📲

### RF-05.1 Inicio del flujo

- El evaluador recibe un QR (entregado por staff) que abre el formulario.
- El evaluador selecciona su nombre de una lista precargada.

### RF-05.2 Seleccion de modalidad

Despues de seleccionar su nombre, el evaluador debe elegir:

- Modalidad app/formulario
- Modalidad externa (papel/otro medio)

### RF-05.3 Si elige modalidad app/formulario

- Debe ver sus proyectos asignados.
- Debe poder evaluar cada proyecto.
- Al evaluar un proyecto, debe quedar marcado como evaluado.

### RF-05.4 Si elige modalidad externa

- Mostrar mensaje: "No olvides mandarle los resultados al equipo de staff".
- Permitir cambio posterior a modalidad app (mecanica por definir: auto-servicio o apoyo de staff).

---

## RF-06. Flujo de evaluacion de talleres por asistentes 🗣️

- Al finalizar un taller, el asistente puede abrir un formulario.
- Captura minima: nombre del asistente.
- El asistente evalua el taller y envia su retroalimentacion.
- La evaluacion se registra por taller.

---

## 5) Reglas de negocio iniciales 📏

- Solo usuarios autenticados (staff/admin) acceden al backoffice.
- Solo admin puede crear usuarios staff.
- Los evaluadores se gestionan por nombre y asignacion previa hecha por staff/admin.
- Un proyecto evaluado debe reflejar su estado para evitar duplicidad accidental.
- Las evaluaciones de asistentes siempre se asocian al taller correspondiente.

---

## 6) Consideraciones de UX/Operacion 🧠

- El flujo de juez debe ser rapido y usable en sitio (evento en vivo).
- El mensaje para modalidad externa debe ser claro y accionable.
- La importacion CSV/Excel debe ser guiada y tolerante a errores.
- Debe contemplarse operacion mixta digital + papel.

---

## 7) Pendientes por definir (abiertos) ❓

1. Campos exactos para proyecto/evaluador/taller.
2. Plantilla oficial de CSV/Excel y mapeo de columnas.
3. Quien puede cambiar la modalidad de evaluacion (juez vs staff).
4. Detalle de recuperacion/caducidad OTP para staff.
5. Modelo de reportes iniciales (avance de evaluacion, metricas de talleres).
6. Catalogo final de estados (proyecto, evaluacion, taller).

---

## 8) Criterios de aceptacion de Fase 1 ✅

Se considera cumplida la fase inicial cuando:

- Existen modulos funcionales de proyectos, evaluadores, talleres y usuarios internos.
- Se puede importar proyectos por CSV/Excel con validacion.
- Se puede asignar evaluadores a proyectos y registrar estado de evaluacion.
- Existe flujo operativo para jueces con seleccion de modalidad.
- Existe flujo basico de retroalimentacion para asistentes en talleres.
- Los roles y permisos (admin/staff) estan implementados segun lo definido.

---

## 9) Historias de usuario (User Stories) 🧾

### 9.1 Historias de Admin 👑

- Como admin, quiero crear usuarios staff para delegar la operacion del evento sin compartir credenciales de admin.
- Como admin, quiero iniciar sesion con usuario y contrasena para acceder de forma segura al backoffice.
- Como admin, quiero poder gestionar proyectos, evaluadores y talleres para cubrir cualquier operacion que el staff no alcance a realizar.

### 9.2 Historias de Staff 🧩

- Como staff, quiero iniciar sesion mediante OTP por correo para entrar rapido y de forma segura durante el evento.
- Como staff, quiero importar proyectos por CSV/Excel para cargar en bloque los registros provenientes de formularios externos.
- Como staff, quiero ver una vista previa de importacion con errores por fila para corregir datos antes de publicarlos.
- Como staff, quiero dar de alta evaluadores por nombre para preparar la logistica de evaluacion sin friccion.
- Como staff, quiero asignar proyectos a cada evaluador para garantizar cobertura y trazabilidad de evaluaciones.
- Como staff, quiero registrar talleres con fecha y horario para habilitar su operacion y retroalimentacion posterior.

### 9.3 Historias de Evaluador/Juez (pseudo-usuario) 🧑‍⚖️

- Como evaluador, quiero entrar al formulario por QR para iniciar mi evaluacion rapidamente en sitio.
- Como evaluador, quiero seleccionar mi nombre para ver solo los proyectos que me corresponden.
- Como evaluador, quiero elegir modalidad app o externa para adaptarme a mi forma de trabajo.
- Como evaluador, quiero calificar mis proyectos asignados en la app para dejar evidencia inmediata de resultados.
- Como evaluador, quiero que un proyecto evaluado quede marcado para no duplicar evaluaciones por error.
- Como evaluador en modalidad externa, quiero ver un recordatorio para enviar resultados al staff y no perder informacion.

### 9.4 Historias de Asistente de taller (pseudo-usuario) 🙋

- Como asistente, quiero evaluar un taller al finalizar para compartir mi experiencia.
- Como asistente, quiero un formulario corto (nombre + evaluacion) para completarlo rapidamente.
- Como asistente, quiero que mi retroalimentacion quede asociada al taller correcto para que sea util en el analisis posterior.

### 9.5 Historias transversales de negocio 🔄

- Como organizacion FECIIT, queremos que solo staff/admin autenticados accedan al backoffice para proteger la operacion.
- Como organizacion FECIIT, queremos operar con flujo mixto (digital y papel) para adaptarnos al contexto real del evento.
- Como organizacion FECIIT, queremos visibilidad del avance de evaluaciones para tomar decisiones durante la jornada.
