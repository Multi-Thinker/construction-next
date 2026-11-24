import { Lock, Phone } from "../components/icons";

export default function StandardPage({ route, pageData, cardPhotos }) {
  const page = pageData[route];
  return (
    <section className="subpage">
      <div className="subpage-hero">
        <p>Top Construction &amp; Design</p>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
      </div>
      {route === "contact" ? (
        <div className="contact-card">
          <h2>Start with a conversation.</h2>
          <p>
            Call during business hours or send an email to discuss the scope of
            your remodeling project.
          </p>
          <a className="contact-call" href="tel:+19543182322">
            <Phone />
            954-318-2322
          </a>
          <a href="mailto:info@topconstructionanddesign.com">
            info@topconstructionanddesign.com
          </a>
        </div>
      ) : (
        <div className="route-grid">
          {page.cards.map((name, index) => (
            <article className="route-card" key={name}>
              <img src={cardPhotos[index % cardPhotos.length]} alt="" />
              <h2>{name}</h2>
              <p>
                {route === "areas"
                  ? "A page framework is ready. Publish only after it has genuinely local project evidence and useful service information."
                  : "This page framework is ready for verified business content, imagery and details."}
              </p>
              <button className="disabled-link" disabled aria-disabled="true">
                <Lock />
                Details coming soon
              </button>
            </article>
          ))}
        </div>
      )}
      {route === "about" && (
        <div className="contact-card">
          <h2>Build with more clarity.</h2>
          <p>
            Use this page for verified team history, licenses, insurance,
            process and local experience before public launch.
          </p>
        </div>
      )}
    </section>
  );
}
