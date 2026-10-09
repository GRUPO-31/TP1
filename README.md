# SINTAXIA · TP2

Aplicación React del Grupo 31 para Desarrollo de Sistemas Web Front-End del **IFTS N.º 29**. Continúa SINTAXIA, el proyecto del TP1: un laboratorio digital con identidad cyberpunk que conecta la portada, cuatro perfiles, recursos de desarrollo, información pública de GitHub, árbol de componentes y bitácora.

## Publicación

- **Repositorio público independiente de TP2:** pendiente de creación y verificación.
- **Deploy de TP2 en Vercel:** pendiente de publicación y verificación.
- Antecedentes TP1: [repositorio](https://github.com/GRUPO-31/TP1) y [deploy](https://tp-1-self.vercel.app/). Estos enlaces corresponden al TP1 y no sustituyen los del TP2.

La aplicación está en `React-Proyect/`. No se modificó el remoto del TP1. Antes de entregar, reemplazar los pendientes con los enlaces reales de TP2 y comprobarlos sin iniciar sesión.

## Integrantes

| Integrante | Perfil de GitHub |
| --- | --- |
| Diego Rodriguez | [diegojrodriguez](https://github.com/diegojrodriguez) |
| Brian Lavandera | [brianlavandera3](https://github.com/brianlavandera3) |
| Sergio Vargas | [SergioVargas101](https://github.com/SergioVargas101) |
| Cristian Villagra | [Crrisst](https://github.com/Crrisst) |

El acceso al nuevo repositorio debe verificarse en GitHub: invitar a los integrantes con permiso de escritura y comprobar que aceptaron. La persona que lo crea ya cuenta con acceso. Los perfiles públicos no prueban permisos de colaboración.

## Ejecución local

Requiere Node.js 22.12 o superior compatible con Vite 8.

```bash
cd React-Proyect
npm ci
npm run dev
```

```bash
npm run build
npm run preview
npm run lint
```

El build se genera en `React-Proyect/dist`. Se incluye `package-lock.json` para instalaciones reproducibles.

## Secciones y arquitectura

| Ruta | Contenido |
| --- | --- |
| `/` | Presentación propia del equipo, manifiesto y tarjetas |
| `/equipo` | Los cuatro integrantes |
| `/equipo/:id` | Perfil interno: biografía, habilidades, películas, música y GitHub |
| `/recursos` | 24 registros JSON, búsqueda y filtro por categoría |
| `/actividad` | Repositorios públicos de GRUPO-31 desde GitHub |
| `/arbol` | Árbol de componentes correspondiente al código |
| `/bitacora` | Historia del TP1 y registro de migración a React |
| Otras rutas | Pantalla de ruta no encontrada con enlace a portada |

`App` configura React Router; `Layout` comparte `Sidebar`, encabezado, contenido y pie. `Outlet` presenta la página activa. Las tarjetas se reutilizan en las páginas y los perfiles se resuelven desde los datos del equipo. La sidebar marca la sección activa también al entrar en un perfil. Cada perfil permite volver al equipo y continuar al siguiente.

```text
React-Proyect/
├── src/
│   ├── App.jsx
│   ├── components/    # Layout, Sidebar y tarjetas
│   ├── pages/         # Portada, equipo, perfiles, recursos, API y documentación
│   └── data/          # team.json, resources.json (24 registros), log.json
├── public/img/        # Avatares conservados del TP1
├── vercel.json        # Reescritura de rutas para la SPA
└── package.json
```

## Datos y API pública

El catálogo importa `src/data/resources.json`. La búsqueda considera nombre, descripción y categoría, sin distinguir mayúsculas ni acentos. Búsqueda y filtro se combinan, muestran el total y permiten limpiar la selección. Hay un estado sin coincidencias.

La sección Actividad usa `https://api.github.com/orgs/GRUPO-31/repos?type=public&sort=updated&per_page=100`. Muestra nombre, descripción, lenguaje, estrellas, fecha y enlace de cada repositorio. Incluye carga, respuesta vacía, error HTTP/de red, límite público, tiempo máximo de 15 segundos y reintento. Cancela consultas al abandonar la página. No contiene tokens ni claves privadas. [Documentación oficial de GitHub](https://docs.github.com/en/rest/repos/repos#list-organization-repositories).

## Identidad visual y accesibilidad

Fondo negro verdoso, acento verde lima y tipografías Inter y JetBrains Mono, con alternativas locales si Google Fonts no carga. La portada usa una ilustración orbital construida con CSS. Los avatares, biografías, habilidades y gustos provienen del TP1. Las tarjetas y la sidebar se adaptan a pantallas pequeñas. Se incluyen etiquetas de controles, textos alternativos, foco visible, enlace para saltar al contenido y respeto por movimiento reducido.

## Declaración de uso de IA

Se diferencia la **aplicación** de acceso del **modelo** que genera las respuestas.

| Etapa | Aplicación | Modelo | Tareas |
| --- | --- | --- | --- |
| TP1, según documentación previa del equipo | Google Gemini, plan gratuito | No registrado en el TP1; el equipo debe confirmar la versión | Consultas sobre Canvas, temporizadores, depuración, estilos y modificación de avatares |
| Migración TP2, esta sesión | OpenAI Codex | GPT-6, según identificación del agente en la sesión | Componentes React, navegación, CSS, migración de datos, API, documentación y comprobación de build/lint |

No se atribuyen herramientas o aportes individuales que no estén registrados. Antes de entregar, cada integrante debe confirmar qué aplicación/modelo utilizó y para qué tarea, y completar la versión de Gemini si puede recuperarla. No se generaron nuevos avatares en esta migración. La documentación histórica se conserva en `README-TP1.md`.

## Publicar en GitHub y Vercel

1. Crear un repositorio **público e independiente** llamado TP2 y subir este proyecto con su README de raíz. Mantener el repositorio TP1 separado.
2. Incorporar a Diego, Brian, Sergio y Cristian. Comprobar permisos efectivos y aceptación de las invitaciones.
3. Importar TP2 en Vercel. Seleccionar **Root Directory: `React-Proyect`**, preset **Vite**, instalación `npm ci`, build `npm run build` y salida `dist`.
4. La configuración `React-Proyect/vercel.json` permite cargar o recargar rutas internas directamente.
5. Registrar los enlaces reales arriba y probar repositorio/deploy en una ventana sin sesión. Abrir directamente `/equipo/cristian`, `/recursos` y `/actividad` para comprobar la navegación y reescritura.

No hay conexión autenticada a GitHub ni Vercel disponible en esta sesión para completar esas operaciones externas.

## Recorrido de los 15 criterios

| N.º | Criterio | Estado y comprobación |
| --- | --- | --- |
| 1 | Repositorio público y Vercel | Pendiente: crear, publicar y comprobar ambos enlaces sin sesión |
| 2 | README raíz | Descripción e integrantes completos; falta URL real del deploy TP2 |
| 3 | Acceso de integrantes | Pendiente: invitaciones aceptadas y permisos efectivos en TP2 |
| 4 | React y React Router | Implementados en `React-Proyect/src/App.jsx` |
| 5 | Sidebar compartida | Identidad, seis secciones y sección activa |
| 6 | Navegación completa | Sidebar en todas las rutas, volver/siguiente en perfiles y recuperación 404 |
| 7 | Portada propia | Presentación, ilustración CSS, métricas, equipo y manifiesto |
| 8 | Perfiles React | Cuatro perfiles internos con contenido migrado del TP1 |
| 9 | Propuesta estética | Identidad SINTAXIA, paleta, tipografías y avatares personalizados |
| 10 | JSON local ≥20 | 24 recursos renderizados dinámicamente |
| 11 | Búsqueda y filtro | Texto + categoría combinados, contador y estado vacío |
| 12 | API y estados | GitHub pública, carga/error/vacío y reintento |
| 13 | Árbol de renderizado | Sección `/arbol` vinculada con componentes reales |
| 14 | Bitácora | Registros del TP1 y evolución hacia React |
| 15 | Declaración IA | Aplicación/modelo diferenciados; pendiente confirmar modelo histórico de Gemini y usos individuales |

Comprobaciones locales: build de producción y ESLint completados. La revisión visual/interactiva en navegador, los enlaces externos del catálogo y la comprobación de producción deben realizarse antes de la entrega. Para la API, probar conexión normal, conexión bloqueada y reintento; para recursos, combinar texto y categoría, buscar un término sin resultados y limpiar filtros; para móvil, revisar 375 px, 768 px y escritorio.
