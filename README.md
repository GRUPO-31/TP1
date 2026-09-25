# 🧬 SINTAXIA // CYBERPUNK CORE ARCHITECTURE

**TP1 — Desarrollo de Sistemas Web Front-End**
**IFTS N.º 29 — 2026**

## 🔗 Enlaces del Proyecto

### 🚀 Despliegue en Producción

**Sitio web:**
https://tp-1-self.vercel.app/

### 📦 Repositorio del Grupo

**GitHub:**
https://github.com/GRUPO-31/TP1

### 👥 Perfiles de los Integrantes

**Diego Rodriguez — Lead Architect**
GitHub: https://github.com/diegojrodriguez

**Brian — Fullstack Developer**
GitHub: https://github.com/brianlavandera3

**Sergio Vargas — QA Engineer**
GitHub: https://github.com/SergioVargas101

**Cristian Villagra — IA Engineer**
GitHub: https://github.com/Crrisst

---

SINTAXIA es una plataforma web de alta densidad visual e interfaces inmersivas, desarrollada como trabajo práctico para la materia **Desarrollo de Sistemas Web Front-End**.

El proyecto combina HTML5, CSS3 y JavaScript ES6+ con una estética inspirada en interfaces cyberpunk, terminales digitales, sistemas HUD y experiencias interactivas.

---

## 🛠️ Tecnologías Utilizadas

### HTML5 Semántico

Estructuración mediante etiquetas semánticas, orientada a la accesibilidad, organización del contenido y cumplimiento de estándares web.

### CSS3 Modular

* Variables CSS personalizadas.
* Animaciones mediante `@keyframes`.
* Diseño responsive mediante `media queries`.
* Efectos visuales inspirados en interfaces cyberpunk y HUD.
* Paneles translúcidos y efectos de neón.
* Diseño adaptable a diferentes resoluciones.

### JavaScript ES6+

* Manipulación dinámica del DOM.
* Efectos gráficos mediante Canvas.
* Terminales de comandos.
* Secuencias de arranque.
* Efectos de tipeo.
* Gestión de ventanas modales.
* Carga de perfiles mediante `iframe`.
* Diagnósticos interactivos.
* Transiciones y efectos dinámicos.

### Vercel

Plataforma utilizada para el despliegue del proyecto e integración continua en producción.

---

# 📂 Estructura del Proyecto

* `img/` — Imágenes y recursos visuales.
* `java/` — Scripts JavaScript.
* `style/` — Hojas de estilo CSS.
* `index.html` — Página principal.
* `bitacora.html` — Bitácora del proyecto.
* `perfil-brian.html` — Perfil de Brian.
* `perfil-cristian.html` — Perfil de Cristian.
* `perfil-diego.html` — Perfil de Diego.
* `perfil-sergio.html` — Perfil de Sergio.
* `README.md` — Documentación del proyecto.

---

# 🎨 Guía de Estilos

## Paleta de Colores

* **Fondo principal:** `#030806`
* **Tarjetas y contenedores:** `rgba(4, 18, 12, 0.92)`
* **Verde neón principal:** `#00ff66`
* **Cian secundario:** `#00e5ff`
* **Texto general:** `#e0ffee`
* **Texto atenuado:** `#6b937b`

## Tipografías

**Inter:** utilizada para el cuerpo general del sitio.

**JetBrains Mono:** utilizada para código, terminales, HUDs e interfaces técnicas.

## Iconografía e Indicadores

La interfaz utiliza elementos visuales inspirados en sistemas de terminal y paneles HUD.

* `#` para identificación de perfiles y enlaces.
* `>` para comandos e interacciones técnicas.
* Efectos de neón y glitch para reforzar la identidad cyberpunk.
* Bordes y paneles translúcidos para representar interfaces futuristas.

---

# ⚡ Funcionalidades JavaScript

## Portada — `index.html`

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

* `perfil-brian.html`
* `perfil-cristian.html`
* `perfil-diego.html`
* `perfil-sergio.html`

Los perfiles mantienen la misma identidad visual del proyecto y presentan información específica de cada integrante.

## 🔧 Consola de Diagnóstico

Cada perfil incorpora una funcionalidad interactiva de diagnóstico.

Dependiendo del perfil, el botón puede aparecer como:

`EJECUTAR DIAGNÓSTICO`

o

`INICIAR TEST QA`

Al ejecutarlo se presenta una secuencia automatizada de verificaciones que simula diferentes procesos del sistema:

* Integridad de datos.
* Validación frontend.
* Pruebas de estrés.
* Verificación de componentes.
* Estado general del sistema.

Los resultados se muestran dinámicamente dentro de la interfaz.

---

# 📡 Estado del Proyecto

**HTML:** ONLINE
**CSS:** ONLINE
**JAVASCRIPT:** ONLINE
**CANVAS:** ONLINE
**INTERFACE:** ONLINE
**TEAM SYNC:** ONLINE

> SINTAXIA CORE INITIALIZED
> ALL SYSTEMS OPERATIONAL

---

# 🤖 Uso de Asistencia de Inteligencia Artificial y Autoría

De acuerdo con los requisitos transversales del trabajo práctico, se documenta el uso de herramientas de inteligencia artificial como apoyo técnico y creativo durante el desarrollo del proyecto.

## Herramientas y Modelos Utilizados

Se utilizó **Google Gemini**, en su versión avanzada y gratuita, como asistente técnico para la estructuración lógica de scripts en JavaScript, efectos de Canvas, terminales, manejo de `iframe` y modales, además de la optimización de selectores CSS en diferentes `breakpoints`.

## Asistencia en Código y Debugging

La IA colaboró como herramienta de apoyo durante:

* Depuración de errores de rutas relativas.
* Preparación del proyecto para el despliegue en Vercel.
* Maquetación de las tablas de la bitácora.
* Organización modular de las hojas de estilo `style.css` y `perfil.css`.
* Resolución de problemas puntuales de JavaScript y CSS.

## Experiencia Previa y Criterio del Equipo

El equipo cuenta con conocimientos en desarrollo web adquiridos durante la formación académica en **IFTS N.º 29**.

Las sugerencias generadas mediante IA fueron revisadas, probadas y adaptadas por los integrantes del equipo. El código utilizado fue comprendido y modificado según las necesidades funcionales y visuales del proyecto.

## Recursos Visuales y Avatares

Las imágenes y avatares utilizados provienen de registros propios y recursos seleccionados bajo licencias abiertas, manteniendo la coherencia estética de la plataforma.

---

# 🧬 SINTAXIA

**SINTAXIA** representa una interfaz experimental que combina **desarrollo web, interacción dinámica y estética cyberpunk** para construir una experiencia digital inmersiva.

El proyecto busca integrar los conocimientos adquiridos en **HTML5, CSS3 y JavaScript**, aplicándolos en una interfaz que prioriza tanto la funcionalidad como la identidad visual.

---

> **SINTAXIA CORE INITIALIZED**
> **ALL SYSTEMS OPERATIONAL**
git 