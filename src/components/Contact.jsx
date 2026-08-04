function Contact({ data }) {
  return (
    <section id="contact" className="section contact">
      <h3 className="section-label section-label--sm">Get in Touch</h3>
      <p className="contact-lead">
        Open to interesting conversations and new opportunities. Reach out any time.
      </p>
      <div className="contact-details">
        <a href={`mailto:${data.email}`}>{data.email}</a>
        <span>{data.phone}</span>
      </div>
      <footer className="footer">
        © {new Date().getFullYear()} {data.name}. Built with React.
      </footer>
    </section>
  );
}

export default Contact;
