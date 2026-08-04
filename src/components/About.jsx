function About({ about, skills }) {
  return (
    <section id="about" className="section">
      <div className="about-grid">
        <div>
          <h3 className="section-label">Summary</h3>
          <ul className="about-list">
            {about.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="section-label">Skills</h3>
          <div className="skills">
            {skills.map((group, i) => (
              <div key={i} className="skill-row">
                {group.map((s) => (
                  <span key={s} className="skill-pill">
                    {s}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
