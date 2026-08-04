function About({ about, skills }) {
  return (
    <section id="about" className="section">
      <h3 className="section-label">About</h3>
      <div className="about-grid">
        <ul className="about-list">
          {about.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
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
    </section>
  );
}

export default About;
