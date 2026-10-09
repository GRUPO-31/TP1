import { Link } from 'react-router-dom'
import entries from '../data/log.json'
const tree = `App
└── BrowserRouter
    └── Routes → Route (Layout)
        └── Layout
            ├── Sidebar
            │   └── NavLink × 7 (marca + navegación)
            └── Outlet → página de la ruta activa
                ├── Home → Link + MemberCard × 4
                ├── Team → MemberCard × 4
                ├── Profile → Link (datos según :id)
                ├── Resources → ResourceCard × resultados
                ├── Activity → RepositoryCard × resultados
                ├── ComponentTree
                ├── Log
                └── NotFound → Link`
export function ComponentTree() {
  return <><span className="eyebrow">05 / ARQUITECTURA</span><h1>Una aplicación.<br /><em>Componentes conectados.</em></h1><p className="intro">Este árbol representa los componentes del código entregado. Layout mantiene la sidebar, el encabezado y el pie; Outlet muestra una página según la ruta activa.</p><pre className="component-tree" aria-label="Árbol de componentes de la aplicación">{tree}</pre><div className="note"><h2>Cómo se renderiza</h2><p>Las páginas son alternativas, no se muestran simultáneamente. MemberCard, ResourceCard y RepositoryCard se repiten mediante map. Los campos de búsqueda, filtro y estados de carga se renderizan dentro de sus respectivas páginas. main.jsx monta App dentro de StrictMode.</p></div><Link to="/recursos">Explorá los componentes en acción →</Link></>
}
export function Log() {
  return <><span className="eyebrow">06 / MEMORIA DEL PROYECTO</span><h1>Lo que aprendimos<br /><em>en el camino.</em></h1><p className="intro">Decisiones, avances y dificultades. Conservamos la bitácora del TP1 y sumamos la evolución hacia React.</p><div className="timeline">{entries.map((entry, index) => <article key={`${entry.date}-${index}`}><div><span className="tag">{entry.stage}</span><time>{entry.date}</time></div><p>{entry.text}</p></article>)}</div></>
}
export function NotFound() {
  return <div className="empty"><span className="eyebrow">404 / RUTA NO ENCONTRADA</span><h1>Este módulo<br />no existe.</h1><p>Podés continuar desde la portada o la navegación lateral.</p><Link className="button primary" to="/">Volver a la portada →</Link></div>
}
