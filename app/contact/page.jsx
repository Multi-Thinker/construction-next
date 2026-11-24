import SiteChrome from '../../src/components/SiteChrome';
import QuoteFormEmbed from '../../src/components/QuoteFormEmbed';
import { Mail, Phone } from '../../src/components/icons';

const pageUrl = 'https://topconstructionanddesign.com/contact/';
const title = 'Contact | Top Construction and Design';
const description = 'Contact Top Construction and Design for a free remodeling estimate in Broward County, FL. Call (954) 318-2322, Monday to Friday, 8:00 AM to 5:00 PM.';
const phone = '(954) 318-2322';
const phoneHref = 'tel:+19543182322';
const email = 'info@topconstructionanddesign.com';
const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d917598.5650726121!2d-80.4301795!3d26.0541815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87dd6cf86c35f8db%3A0xd98b67d9a69a1489!2sTop%20Construction%20%26%20Design!5e0!3m2!1sen!2sua!4v1752497700481!5m2!1sen!2sua';

export const metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'article',
    url: pageUrl,
    title,
    description,
    images: [{
      url: 'https://topconstructionanddesign.com/wp-content/uploads/2024/10/Top-Construction-And-Design-Flooring-2.jpeg',
      width: 1280,
      height: 853,
    }],
  },
};

export default function ContactPage() {
  return (
    <SiteChrome route="contact">
      <main className="contact-page">
        <section className="contact-row contact-intro">
          <div className="contact-intro-copy">
            <h1>Contact Us</h1>
            <ul className="contact-links">
              <li><a href={phoneHref}><Phone />{phone}</a></li>
              <li><a href={`mailto:${email}`}><Mail />{email}</a></li>
            </ul>
            <p>Top Construction and Design is your go-to contracting team in Broward County for remodels, repairs, flooring installation, and more. Our design team will go above and beyond to make sure that your vision for your dream home drives every design choice we make. Our friendly approach and open communication will ensure that you feel a part of the process, every step of the way.</p>
            <p>We serve homeowners across Broward County, FL, including Fort Lauderdale, Weston, Southwest Ranches, Davie, Plantation, Sunrise, Cooper City, Pembroke Pines, Coral Springs, Parkland, Hollywood, Coconut Creek and Margate. Call <a href={phoneHref}>{phone}</a>, Monday to Friday, 8:00 AM to 5:00 PM.</p>
          </div>
          <picture className="contact-photo">
            <source media="(max-width: 1024px)" srcSet="/contact-media/kitchen-mobile.webp" width="1280" height="853" />
            <img src="/contact-media/kitchen-desktop.webp" alt="Remodeled kitchen with wood cabinets and white counters" width="1600" height="1066" fetchPriority="high" />
          </picture>
        </section>
        <section className="contact-row contact-consultation" aria-label="Consultation and free quote">
          <picture className="contact-photo">
            <source media="(max-width: 1024px)" srcSet="/contact-media/dining-mobile.webp" width="1280" height="853" />
            <img src="/contact-media/living-desktop.webp" alt="Remodeled open living and dining area" width="960" height="1280" loading="lazy" />
          </picture>
          <div className="contact-consultation-copy">
            <p>Get in touch with our team for your first consultation meeting so that we can learn more about your remodeling goals. We look forward to learning more about how you’d like to transform your kitchen, bedroom, garage, and more!</p>
            <QuoteFormEmbed />
            <div className="contact-consent">
              <p>By submitting, you agree to receive text messages from Top Construction and Design. You may reply “STOP” to opt-out at any time. Reply “HELP” for assistance. Message and data rates may apply, and message frequency will vary.</p>
              <p>Learn more on our <a href="/privacy-policy/" target="_blank" rel="noopener">Privacy Policy</a> Page.</p>
            </div>
            <iframe
              className="contact-map"
              src={mapUrl}
              title="Top Construction and Design on Google Maps"
              width="600"
              height="450"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
