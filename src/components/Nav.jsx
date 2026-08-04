import { useState } from "react";

const links = [
  { id: "about", label: "Summary" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

function Nav({ name }) {
  const [active, setActive] = useState(null);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-brand" onClick={scrollTo("top")}>
          {name}
        </a>
        <nav className="nav-links">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? "active" : undefined}
              onClick={scrollTo(l.id)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Nav;
