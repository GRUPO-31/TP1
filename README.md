# 🧬 SINTAXIA

Plataforma web de alta densidad visual e interfaces inmersivas, desarrollada como trabajo práctico para la materia **Desarrollo de Sistemas Web Front-End** del **IFTS N.º 29**.

El proyecto emula un sistema operativo futurista mediante **HTML, CSS y JavaScript interactivo**, combinando animaciones, efectos visuales, terminales, Canvas e interfaces inspiradas en sistemas HUD.

---

## 🔗 Enlaces del Proyecto

### 🚀 Despliegue en Producción

https://tp-1-self.vercel.app/

### 📦 Repositorio del Grupo

https://github.com/GRUPO-31/TP1

---

## 👥 Integrantes del Equipo

### Diego Rodriguez — Lead Architect

GitHub: https://github.com/diegojrodriguez

### Brian — Fullstack Developer

GitHub: https://github.com/brianlavandera3

### Sergio Vargas — QA Engineer

GitHub: https://github.com/SergioVargas101

### Cristian Villagra — IA Engineer

GitHub: https://github.com/Crrisst

---

## 🛠️ Tecnologías Utilizadas

* **HTML5 Semántico:** estructuración del contenido, modales y accesibilidad.
* **CSS3 Modular:** variables nativas, Flexbox/Grid, animaciones mediante `@keyframes` y diseño responsive.
* **JavaScript ES6+:** manipulación del DOM, lógica de terminales, Canvas API y `Intersection Observer`.
* **Vercel:** despliegue y alojamiento del proyecto en la nube.

---

## 📂 Estructura de Archivos y Carpetas

```text
TP1/
├── img/                 # Imágenes, avatares y capturas de pantalla.
├── java/
│   └── java.js          # Lógica interactiva global y por perfil.
├── style/
│   ├── perfil.css       # Estilos específicos de los perfiles.
│   └── style.css        # Estilos globales, portada y animaciones.
├── index.html           # Portada principal y manifiesto.
├── bitacora.html        # Registro cronológico del desarrollo técnico.
├── perfil-brian.html    # Perfil individual de Brian.
├── perfil-cristian.html # Perfil individual de Cristian.
├── perfil-diego.html    # Perfil individual de Diego.
├── perfil-sergio.html   # Perfil individual de Sergio.
└── README.md            # Documentación del proyecto.
```

---

## 🎨 Guía de Estilos

### Paleta de Colores

* **Fondo principal:** `#030806`
* **Contenedores y tarjetas:** `rgba(4, 18, 12, 0.92)`
* **Verde neón primario:** `#00ff66`
* **Cian secundario:** `#00e5ff`
* **Texto general:** `#e0ffee`
* **Texto atenuado:** `#6b937b`

### Tipografías

* **Inter:** utilizada para bloques de texto y lectura general.
* **JetBrains Mono:** tipografía monoespaciada utilizada para emular código, terminales, botones y datos numéricos.

### Iconografía

La interfaz prescinde de librerías externas de iconos. En su lugar, se utilizan caracteres tipográficos formateados mediante CSS para simular interfaces HUD.

* `#` para botones y enlaces web.
* `>` para emular líneas de comandos en las terminales.

---

# ⚡ Funciones JavaScript y Capturas

> Las capturas utilizadas en esta sección deben encontrarse dentro de la carpeta `img/` para que puedan visualizarse correctamente en GitHub.

## 1. Portada: Fondo Matrix y Terminal de Inicio

Al cargar la web, se ejecuta un efecto visual de caracteres cayendo en cascada mediante la API `<canvas>`.

Simultáneamente, una consola simula el proceso de arranque (**Boot Sequence**) escribiendo líneas de texto dinámicamente.

---

## 2. Portada: Modales Flotantes con Iframes

Las tarjetas del equipo permiten abrir los perfiles individuales mediante un `<iframe>` contenido dentro de una ventana modal.

Al abrir un perfil se aplican efectos visuales mediante CSS, incluyendo una transición de tipo *glitch*.

---

## 3. Portada: Navegación Holográfica y Efectos de Scroll

El desplazamiento hacia abajo genera efectos de desenfoque, transparencia y movimiento (*parallax*) en el encabezado.

A medida que aparecen las diferentes secciones, un **Intersection Observer** detecta su entrada en pantalla y activa una animación de aparición con estética de interferencia digital.

---

## 4. Perfiles: Consolas de Diagnóstico QA

Cada tarjeta de perfil cuenta con una función dinámica individual.

Al presionar el botón interactivo de diagnóstico, por ejemplo:

`INICIAR TEST QA`

el script desactiva temporalmente el botón y renderiza una secuencia automatizada de mensajes de validación.

La consola informa progresivamente el estado técnico del operativo correspondiente al perfil.

---

# 🤖 Uso de Asistencia de Inteligencia Artificial y Autoría

De acuerdo con los requisitos del trabajo práctico, se documenta el uso de herramientas de inteligencia artificial como apoyo técnico durante el desarrollo del proyecto.

### Herramientas y Modelos Utilizados

Se utilizó el modelo **Google Gemini** mediante su **plan gratuito** como herramienta de asistencia técnica.

### Asistencia Recibida

La inteligencia artificial funcionó como apoyo en diferentes aspectos del desarrollo, principalmente:

* Configuración y lógica del efecto Canvas.
* Secuencias de `setTimeout` utilizadas en la terminal.
* Control del `Intersection Observer`.
* Resolución de problemas de JavaScript.
* Debugging de rutas y nomenclatura de archivos.
* Organización y ajuste del CSS modular.
* Preparación del proyecto para el despliegue.

### Experiencia Previa

El equipo posee experiencia técnica académica en maquetación y desarrollo de interfaces web, adquirida durante la formación como estudiantes de desarrollo de software en el **IFTS N.º 29**.

### Recursos Visuales

Las fotografías utilizadas en los perfiles corresponden a imágenes de los integrantes del equipo.

Las imágenes fueron ajustadas mediante filtros CSS, principalmente escala de grises y contraste, desarrollados manualmente para mantener una estética visual cyberpunk uniforme.

No se utilizaron generadores de imágenes mediante prompts para los avatares.

### Criterio de Autoría

Todo código sugerido mediante herramientas de inteligencia artificial fue examinado, probado y modificado por los integrantes del equipo.

Las implementaciones fueron adaptadas a los requerimientos del proyecto, incluyendo ajustes en los umbrales matemáticos del scroll, velocidades de renderizado y comportamiento de las diferentes interacciones para garantizar que el resultado final respondiera a las decisiones de diseño del grupo.

---

# 🧬 SINTAXIA

**SINTAXIA** representa una interfaz experimental que combina **desarrollo web, interacción dinámica y estética cyberpunk** para construir una experiencia digital inmersiva.

El proyecto integra los conocimientos adquiridos en **HTML5, CSS3 y JavaScript**, aplicándolos en una interfaz que busca combinar funcionalidad, interacción e identidad visual.

