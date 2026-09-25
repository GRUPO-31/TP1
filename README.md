# SINTAXIA // CYBERPUNK CORE ARCHITECTURE (TP1)

Plataforma web de alta densidad visual e interfaces inmersivas desarrollada como trabajo práctico para la materia **Desarrollo de Sistemas Web Front-End** — **IFTS N.º 29, 2026**.

---

## 👥 Integrantes del Equipo

* **Diego Rodriguez** — Lead Architect
  [GitHub Profile](https://github.com/diegojrodriguez)

* **Brian** — Fullstack Developer
  [GitHub Profile](https://github.com)

* **Sergio Vargas** — QA Engineer
  [GitHub Profile](https://github.com)

* **Cristian Villagra** — IA Engineer
  [GitHub Profile](https://github.com)

> Los enlaces de GitHub de Brian, Sergio y Cristian deben reemplazarse por sus perfiles reales.

---

## 🛠️ Tecnologías Utilizadas

### HTML5 Semántico

Estructuración limpia mediante etiquetas semánticas, orientada a la accesibilidad y al cumplimiento de estándares web.

### CSS3 Modular

* Variables CSS personalizadas.
* Animaciones mediante `@keyframes`.
* Diseño responsive mediante `media queries`.
* Efectos visuales inspirados en interfaces cyberpunk y HUD.

### JavaScript ES6+

* Manipulación dinámica del DOM.
* Efectos mediante Canvas.
* Terminales de comandos.
* Secuencias de arranque.
* Efectos de tipeo.
* Gestión de modales.
* Carga de perfiles mediante `iframe`.
* Diagnósticos interactivos.

### Vercel

Plataforma utilizada para el despliegue del proyecto e integración continua en producción.

---

## 📂 Estructura del Proyecto

```text
TP1/
├── img/
│   ├── brian.png
│   ├── cristian.jpg
│   ├── diego.jpg
│   ├── Sergio.png
│   └── ...
├── java/
│   └── java.js
├── style/
│   ├── perfil.css
│   └── style.css
├── bitacora.html
├── index.html
├── perfil-brian.html
├── perfil-cristian.html
├── perfil-diego.html
├── perfil-sergio.html
└── README.md
```

---

## 🎨 Guía de Estilos

### Paleta de Colores

* **Fondo principal:** `#030806`
* **Tarjetas y contenedores:** `rgba(4, 18, 12, 0.92)`
* **Verde neón principal:** `#00ff66`
* **Cian secundario:** `#00e5ff`
* **Texto general:** `#e0ffee`
* **Texto atenuado:** `#6b937b`

### Tipografías

* **Inter:** utilizada para el cuerpo general del sitio.
* **JetBrains Mono:** utilizada para código, terminales, HUDs e interfaces técnicas.

### Iconografía e Indicadores

La interfaz utiliza elementos visuales inspirados en sistemas de terminal y paneles HUD.

* `#` para identificación de perfiles y enlaces.
* `>` para comandos e interacciones técnicas.
* Efectos de neón y glitch para reforzar la identidad cyberpunk.
* Bordes y paneles translúcidos para representar interfaces futuristas.

---

# ⚡ Funcionalidades JavaScript

## 1. Portada — `index.html`

### 🌧️ Lluvia Digital Matrix

Se implementó un efecto de **lluvia digital mediante Canvas**, utilizando caracteres binarios y hexadecimales que aparecen en cascada sobre el fondo.

El efecto utiliza transparencias y velocidades variables para generar una ambientación inspirada en interfaces digitales.

### 💻 Terminal de Arranque — Boot Sequence

Al cargar la página se ejecuta una secuencia simulada de inicio del sistema.

La terminal muestra progresivamente diferentes estados, simulando:

* Inicialización del sistema.
* Carga de módulos.
* Verificación de componentes.
* Sincronización del equipo.
* Activación de la interfaz principal.

### 🧠 Panel Holográfico de Directivas

El panel permite interactuar con diferentes nodos del manifiesto.

Al seleccionar una directiva:

1. Se actualiza dinámicamente el título.
2. Se modifica el contenido mostrado.
3. Se ejecuta un efecto de tipeo.
4. Se genera una transición visual entre estados.

### 🪟 Modales Flotantes con `iframe`

Las tarjetas de los integrantes permiten acceder a sus perfiles individuales.

Al seleccionar un integrante:

* Se abre una ventana modal.
* Se carga su perfil mediante `iframe`.
* Se aplican efectos visuales de estática y glitch.
* El usuario puede cerrar la ventana y regresar a la interfaz principal.

---

# 👤 Perfiles Individuales

Cada integrante posee una página de perfil independiente:

```text
perfil-brian.html
perfil-cristian.html
perfil-diego.html
perfil-sergio.html
```

Los perfiles mantienen la misma identidad visual del proyecto y presentan información específica de cada integrante.

### 🔧 Consola de Diagnóstico

Cada perfil incorpora una funcionalidad interactiva de diagnóstico.

Dependiendo del perfil, el botón puede aparecer como:

* `EJECUTAR DIAGNÓSTICO`
* `INICIAR TEST QA`

Al ejecutarlo se presenta una secuencia automatizada de verificaciones que simula diferentes procesos del sistema:

* Integridad de datos.
* Validación frontend.
* Pruebas de estrés.
* Verificación de componentes.
* Estado general del sistema.

Los resultados se muestran dinámicamente dentro de la interfaz.

---

# 🚀 Despliegue en Producción

El proyecto se encuentra preparado para ser desplegado mediante **Vercel**.

**URL de producción:**

https://tu-proyecto.vercel.app

> Reemplazar la URL anterior por el enlace definitivo del proyecto.

---

# 🔮 Próximos Pasos

### 🗄️ Integración de Base de Datos

Integración de una base de datos relacional para almacenar las bitácoras de cambios en tiempo real.

### 🔐 Sistema de Autenticación

Incorporación de un sistema de inicio de sesión simulado mediante diferentes niveles de autorización.

```text
Security Clearance Level

LEVEL 01 — USER
LEVEL 02 — MEMBER
LEVEL 03 — ADMIN
LEVEL 04 — ROOT
```

### 📱 Optimización Mobile

Optimización del rendimiento y de la experiencia de usuario para dispositivos móviles de menor gama.

---

# 📡 Estado del Proyecto

```text
[SYSTEM STATUS]

HTML .............. ONLINE
CSS ............... ONLINE
JAVASCRIPT ........ ONLINE
CANVAS ............ ONLINE
INTERFACE ......... ONLINE
TEAM SYNC ......... ONLINE

> SINTAXIA CORE INITIALIZED
> ALL SYSTEMS OPERATIONAL
```

---

## 🤖 Uso de Asistencia de Inteligencia Artificial y Autoría

De acuerdo con los requisitos transversales del trabajo práctico, se documenta el uso de herramientas de IA como apoyo técnico y creativo durante el desarrollo del proyecto:

* **Herramientas y Modelos Utilizados:** Se utilizó Google Gemini (versión avanzada y gratuita) como asistente técnico para la estructuración lógica de scripts en JavaScript (efectos de Canvas, terminal y manejo de iframes modales) y la optimización de selectores CSS en los breakpoints.
* **Asistencia en Código y Debugging:** La IA colaboró en la depuración de errores de rutas relativas para el despliegue en Vercel, la maquetación de las tablas de la bitácora y la estructura modular de las hojas de estilo (`style.css` y `perfil.css`).
* **Experiencia Previa y Criterio del Equipo:** El equipo cuenta con conocimientos en desarrollo web académico (IFTS N.º 29). Ningún bloque de código fue incorporado de forma automatizada sin previa comprensión; todo fue probado, adaptado y reescrito bajo criterio propio para ajustarse a la identidad visual cyberpunk ideada por los integrantes.
* **Recursos Visuales y Avatares:** Las imágenes y avatares utilizados provienen de registros propios y recursos seleccionados bajo licencias abiertas, manteniendo la coherencia estética de la plataforma.

## 🧬 SINTAXIA

**SINTAXIA** representa una interfaz experimental que combina desarrollo web, interacción dinámica y estética cyberpunk para construir una experiencia digital inmersiva.

```text
CONNECT // BUILD // EVOLVE
```
