import { useEffect, useRef } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
const navigation = [['/', 'Portada', '01'], ['/equipo', 'Equipo', '02'], ['/recursos', 'Recursos', '03'], ['/actividad', 'Actividad GitHub', '04'], ['/arbol', 'Árbol de renderizado', '05'], ['/bitacora', 'Bitácora', '06']]
function Sidebar() {
  return <aside className="sidebar"><NavLink to="/" className="brand" aria-label="Sintaxia, portada"><span className="brand-icon">S<span>_</span></span>SINTAXIA<span className="brand-caption">LABORATORIO DIGITAL / GRUPO 31</span></NavLink><p className="nav-label">EXPLORAR EL SISTEMA</p><nav aria-label="Navegación principal">{navigation.map(([to, label, number]) => <NavLink key={to} to={to} end={to === '/'}><span>{number}</span>{label}<span className="nav-arrow">↗</span></NavLink>)}</nav><div className="sidebar-bottom"><span className="status-dot" /> CUATRO MIRADAS. UN EQUIPO.<p>IFTS N.º 29<br />Desarrollo de Sistemas Web Front-End</p><span className="version">TP2 / REACT EDITION · 2026</span></div></aside>
}
export default function Layout() {
  const { pathname } = useLocation()
  const main = useRef(null)
  useEffect(() => { window.scrollTo(0, 0); main.current?.focus(); document.title = `${navigation.find(([path]) => path === pathname)?.[1] || 'Perfil'} · SINTAXIA` }, [pathname])
  return <><a className="skip-link" href="#contenido">Saltar al contenido</a><Sidebar /><div className="workspace"><header className="topbar"><span>SINTAXIA <span className="muted">/ ESPACIO DE TRABAJO</span></span><span><i className="status-dot" /> SISTEMA EN LÍNEA</span></header><main id="contenido" ref={main} tabIndex={-1}><Outlet /></main><footer>© 2026 SINTAXIA <span>HECHO EN EQUIPO, CON CÓDIGO.</span></footer></div></>
}
