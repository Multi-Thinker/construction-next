import goldLogo from "../assets/logo-gold.png";
import bbbLogo from "../assets/bbb.png";

export default function Footer({ routes }) {
  return (
    <footer>
      <div className="footer-inner">
        <img
          className="footer-logo"
          src={typeof goldLogo === "string" ? goldLogo : goldLogo.src}
          alt="Top Construction and Design"
          width="500"
          height="500"
        />
        <div>
          <h3>BBB Accredited Business</h3>
          <img className="bbb" src={typeof bbbLogo === "string" ? bbbLogo : bbbLogo.src} alt="BBB Accredited Business" width="640" height="244" />
          <h3>Contact Info.</h3>
          <p>
            <a href="tel:+19543182322">(954) 318-2322</a>
          </p>
          <p>
            <a href="mailto:info@topconstructionanddesign.com">
              info@topconstructionanddesign.com
            </a>
          </p>
          <p>Serving Broward County, FL</p>
        </div>
        <div>
          <h3>Opening Hours</h3>
          <p>Mon-Fri: 8:00 AM - 5:00 PM</p>
          <p>Sat-Sun: Closed</p>
        </div>
        <div>
          <h3>Quick Site Links</h3>
          <ul>
            {routes.slice(0, 6).map(([slug, label]) => (
              <li key={slug}>
                <a href={slug === "home" ? "#/" : `#/${slug}`}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
