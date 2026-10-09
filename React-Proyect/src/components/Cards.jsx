import { Link } from 'react-router-dom'
export function MemberCard({ member, index }) {
  return <Link to={`/equipo/${member.id}`} className="member-card"><div className="portrait"><img src={member.image} alt={`Retrato de ${member.name}`} /><span className="portrait-number">0{index + 1}</span><span className="portrait-arrow">↗</span></div><span className="eyebrow">{member.role}</span><h3>{member.name}</h3><span className="muted">Explorar perfil →</span></Link>
}
export function ResourceCard({ resource }) {
  return <article className="resource-card"><div className="card-top"><span className="tag">{resource.category}</span><span className="muted mono">{String(resource.id).padStart(2, '0')}</span></div><h2>{resource.name}</h2><p>{resource.description}</p><a href={resource.url} target="_blank" rel="noreferrer">Documentación ↗</a></article>
}
export function RepositoryCard({ repository }) {
  return <article className="resource-card"><span className="tag">{repository.language || 'Repositorio'}</span><h2>{repository.name}</h2><p>{repository.description || 'Repositorio público del equipo SINTAXIA.'}</p><p className="mono muted">★ {repository.stargazers_count} · Actualizado {new Date(repository.updated_at).toLocaleDateString('es-AR')}</p><a href={repository.html_url} target="_blank" rel="noreferrer">Ver en GitHub ↗</a></article>
}
