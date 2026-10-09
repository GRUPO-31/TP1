import { Link, useParams } from 'react-router-dom'
import team from '../data/team.json'
import { MemberCard } from '../components/Cards'
import { NotFound } from './Documentation'
export function Team() {
  return <><span className="eyebrow">02 / EQUIPO</span><h1>Las personas<br /><em>detrás de SINTAXIA.</em></h1><p className="intro">Somos estudiantes del IFTS N.º 29. Combinamos desarrollo, inteligencia artificial, arquitectura y calidad para aprender construyendo.</p><div className="members-grid">{team.map((member, index) => <MemberCard key={member.id} member={member} index={index} />)}</div></>
}
export function Profile() {
  const { id } = useParams()
  const member = team.find(person => person.id === id)
  if (!member) return <NotFound />
  const next = team[(team.indexOf(member) + 1) % team.length]
  return <><Link className="back-link" to="/equipo">← Volver al equipo</Link><div className="profile-grid"><img className="profile-image" src={member.image} alt={`Retrato de ${member.name}`} /><div><span className="eyebrow">{member.role}</span><h1>{member.name}</h1><p className="intro">{member.bio}</p><a className="button primary" href={member.github} target="_blank" rel="noreferrer">Perfil de GitHub ↗</a><section className="profile-section"><h2>Habilidades</h2><div className="tags">{member.skills.map(skill => <span className="tag" key={skill}>{skill}</span>)}</div></section><div className="favorites"><section><h2>En pantalla</h2><ul>{member.movies.map(movie => <li key={movie}>{movie}</li>)}</ul></section><section><h2>En mis auriculares</h2><ul>{member.music.map(album => <li key={album}>{album}</li>)}</ul></section></div><Link className="button" to={`/equipo/${next.id}`}>Siguiente perfil: {next.name} →</Link></div></div></>
}
