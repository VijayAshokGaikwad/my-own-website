function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <h3 className="section-label">Project Experience</h3>
      <div className="project-grid">
        {projects.map((p) => (
          <a
            key={p.name}
            className="project-card"
            href={p.link}
            target="_blank"
            rel="noreferrer"
          >
            <h4>{p.name}</h4>
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
