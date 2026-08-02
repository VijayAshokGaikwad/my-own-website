const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

function Nav({ name }) {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-brand" onClick={scrollTo("top")}>
          {name}
        </a>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={scrollTo(l.id)}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Nav;
