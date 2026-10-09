import { useState } from 'react'
import resources from '../data/resources.json'
import { ResourceCard } from '../components/Cards'
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
export default function Resources() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todas')
  const filtered = resources.filter(resource => (category === 'Todas' || resource.category === category) && normalize(`${resource.name} ${resource.description} ${resource.category}`).includes(normalize(search.trim())))
  return <><span className="eyebrow">03 / BIBLIOTECA LOCAL</span><h1>Herramientas para<br /><em>pasar a la acción.</em></h1><p className="intro">Una selección de 24 tecnologías y recursos relacionados con nuestro laboratorio. Los registros se cargan desde un archivo JSON local.</p><div className="filters"><label>Buscar recurso<input type="search" placeholder="React, pruebas, diseño…" value={search} onChange={event => setSearch(event.target.value)} /></label><label>Categoría<select value={category} onChange={event => setCategory(event.target.value)}>{['Todas', ...new Set(resources.map(resource => resource.category))].map(value => <option key={value}>{value}</option>)}</select></label><button className="button" onClick={() => { setSearch(''); setCategory('Todas') }}>Limpiar filtros</button></div><p className="results mono" role="status">{filtered.length} de {resources.length} recursos</p><div className="resources-grid">{filtered.map(resource => <ResourceCard key={resource.id} resource={resource} />)}</div>{!filtered.length && <div className="empty"><h2>No encontramos recursos.</h2><p>Probá con otro texto o limpiá los filtros.</p></div>}</>
}
