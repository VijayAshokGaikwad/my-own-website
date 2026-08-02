function Certifications({ id, title, items }) {
  return (
    <section id={id} className="section">
      <h3 className="section-label">{title}</h3>
      <div className="cert-list">
        {items.map((c) => (
          <div key={c.name} className="cert-item">
            <div>
              <h4>
                {c.link ? (
                  <a href={c.link} target="_blank" rel="noreferrer">
                    {c.name}
                  </a>
                ) : (
                  c.name
                )}
              </h4>
              <p className="card-sub">{c.issuer}</p>
            </div>
            <span className="card-period">{c.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
