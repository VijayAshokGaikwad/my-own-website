function Hero({ data }) {
  return (
    <section id="top" className="hero section">
      <p className="eyebrow">{data.location}</p>
      <h1>{data.name}</h1>
      <h2 className="hero-title">{data.title}</h2>
      <p className="hero-tagline">{data.tagline}</p>
      <div className="hero-actions">
        <a
          className="btn btn-primary"
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Get in touch
        </a>
        <div className="hero-socials">
          {data.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
