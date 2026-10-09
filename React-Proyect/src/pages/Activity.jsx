import { useEffect, useState } from 'react'
import { RepositoryCard } from '../components/Cards'
export default function Activity() {
  const [state, setState] = useState({ status: 'loading', repositories: [] })
  const [attempt, setAttempt] = useState(0)
  useEffect(() => {
    const controller = new AbortController()
    let ignore = false
    const timeout = setTimeout(() => controller.abort(), 15000)
    async function load() {
      try {
        const response = await fetch('https://api.github.com/orgs/GRUPO-31/repos?type=public&sort=updated&per_page=100', { signal: controller.signal, headers: { Accept: 'application/vnd.github+json' } })
        if (!response.ok) throw new Error(response.status === 403 || response.status === 429 ? 'GitHub alcanzó el límite de consultas públicas. Intentá nuevamente más tarde.' : `GitHub respondió con un error (${response.status}).`)
        const repositories = await response.json()
        if (!Array.isArray(repositories)) throw new Error('La respuesta recibida no tiene el formato esperado.')
        if (!ignore) setState({ status: 'success', repositories })
      } catch (error) {
        if (!ignore) setState({ status: 'error', repositories: [], message: error.name === 'AbortError' ? 'La consulta tardó demasiado. Revisá tu conexión y volvé a intentar.' : error.message })
      } finally { clearTimeout(timeout) }
    }
    load()
    return () => { ignore = true; controller.abort(); clearTimeout(timeout) }
  }, [attempt])
  return <><span className="eyebrow">04 / CONEXIÓN PÚBLICA</span><h1>Nuestro código,<br /><em>en movimiento.</em></h1><p className="intro">La API pública de GitHub aporta los repositorios de GRUPO-31, sus descripciones, lenguaje, estrellas y fecha de actualización. Esta consulta se realiza sin claves privadas.</p><a href="https://docs.github.com/en/rest/repos/repos#list-organization-repositories" target="_blank" rel="noreferrer">Documentación de la API ↗</a><section className="api-results" aria-live="polite" aria-busy={state.status === 'loading'}>{state.status === 'loading' && <div className="empty" role="status"><span className="loader" /><h2>Consultando GitHub…</h2><p>Estamos buscando los repositorios públicos del equipo.</p></div>}{state.status === 'error' && <div className="empty error" role="alert"><h2>No pudimos cargar la actividad.</h2><p>{state.message}</p><button className="button primary" onClick={() => { setState({ status: 'loading', repositories: [] }); setAttempt(value => value + 1) }}>Volver a intentar ↻</button></div>}{state.status === 'success' && <><p className="results mono">{state.repositories.length} repositorios públicos</p><div className="resources-grid">{state.repositories.map(repository => <RepositoryCard key={repository.id} repository={repository} />)}</div>{!state.repositories.length && <div className="empty"><h2>Todavía no hay repositorios públicos.</h2><p>Volvé a consultar cuando el equipo publique su trabajo.</p></div>}</>}</section></>
}
