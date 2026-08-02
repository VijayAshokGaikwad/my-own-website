function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <h3 className="section-label">Project Experience</h3>
      <div className="project-grid">
        {projects.map((p) => (
          <a
            key={p.name}
            className={`project-card${p.newRow ? " project-card--break" : ""}`}
            href={p.link}
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-header">
              <h4>{p.name}</h4>
              {p.period && <span className="card-period">{p.period}</span>}
            </div>
            <p>{p.description}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
