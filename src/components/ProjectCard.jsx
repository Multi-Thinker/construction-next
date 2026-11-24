export default function ProjectCard({ image, alt, title, year, href }) {
  return <a className="project-card" href={href}>
    <div className="project-card-image"><img src={image} alt={alt} loading="lazy" /></div>
    <div className="project-card-content"><h2>{title}</h2>{year && <p>{year}</p>}</div>
  </a>;
}
