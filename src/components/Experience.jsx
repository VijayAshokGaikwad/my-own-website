function Experience({ experience }) {
  return (
    <section id="experience" className="section">
      <h3 className="section-label">Experience</h3>
      <div className="timeline">
        {experience.map((job) => (
          <div key={job.company + job.period} className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content">
              <div className="timeline-header">
                <h4>{job.role}</h4>
                <span className="timeline-period">{job.period}</span>
              </div>
              <p className="timeline-sub">
                {job.company} · {job.location}
              </p>
              <ul>
                {job.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
