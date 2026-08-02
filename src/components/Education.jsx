function Education({ education }) {
  return (
    <section id="education" className="section">
      <h3 className="section-label">Education</h3>
      <div className="card-list">
        {education.map((ed) => (
          <div key={ed.school} className="card">
            <div className="card-header">
              <h4>{ed.degree}</h4>
              <span className="card-period">{ed.period}</span>
            </div>
            <p className="card-sub">{ed.school}</p>
            <p className="card-body">{ed.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
