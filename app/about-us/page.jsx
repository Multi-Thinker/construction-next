import SiteChrome from '../../src/components/SiteChrome';
import ImageCarousel from '../../src/components/ImageCarousel';
import { Mail, Phone } from '../../src/components/icons';
import constructionOne from '../../src/assets/general-construction/general-3.webp';
import constructionTwo from '../../src/assets/general-construction/general-4.webp';

const url = 'https://topconstructionanddesign.com/about-us/';
const title = 'About Us | Top Construction and Design';
const description = 'Meet Top Construction and Design, founded by Amos Luzon and Assaf Amar: a remodeling and construction team serving homeowners across Broward County, FL.';
const photos = [
  [constructionOne.src, 'Top Construction And Design - General Construction (1)'],
  ['/about-media/gallery-2.webp', 'Primary bedroom with canopy bed and sheer white curtains'],
  [constructionTwo.src, 'Top Construction And Design - General Construction (2)'],
  ['/about-media/gallery-4.webp', 'Coral Springs FL Home Renovation Before and After project photo'],
  ['/about-media/gallery-5.webp', 'Primary bathroom with gray soaking tub and double vanity'],
  ['/about-media/gallery-6.webp', 'Coral Springs FL Home Renovation Before and After project photo'],
];

export const metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    type: 'article',
    images: [{
      url: 'https://topconstructionanddesign.com/wp-content/uploads/2024/10/Top-Construction-And-Design-General-Construction-3.jpeg',
      width: 1280,
      height: 853,
    }],
  },
};

export default function AboutPage() {
  return (
    <SiteChrome route="about">
      <main className="coral-page about-page">
        <section className="coral-hero">
          <div className="coral-hero-image">
            <img src="/contact-media/kitchen-mobile.webp" alt="Remodeled kitchen with a stone island and bar seating" width="1280" height="853" fetchPriority="high" />
          </div>
          <div className="coral-hero-copy"><h1>About Us</h1></div>
        </section>
        <section className="coral-reviews">
          <h2>What Our Customers Have To Say</h2>
        </section>
        <section className="about-story" aria-label="About Top Construction and Design">
          <div className="about-story-copy">
            <img className="about-story-kitchen" src="/about-media/story-kitchen.webp" alt="Coral Springs renovation with an island and exposed ceiling beams" width="1200" height="800" loading="lazy" />
            <p><strong>Top Construction and Design</strong> is a leading construction firm specializing in high-end residential projects. Founded by longtime friends Amos Luzon from New York and Assaf Amar from Nashville, Tennessee, the company brings together over 15 years of experience in the construction industry.</p>
            <p>Both Amos and Assaf began their careers young, gaining extensive expertise and a reputation for excellence in their fields. Now based in Florida, they’ve combined their strengths to create a firm that offers a complete, start-to-finish approach to construction, from permits and planning to the final touches. Their team of skilled, high-end workers ensures every project is executed with precision and exceptional quality, making Top Construction and Design the go-to choice for clients seeking flawless results and a seamless experience.</p>
            <ul className="contact-links">
              <li><a href="tel:+19543182322"><Phone />(954) 318-2322</a></li>
              <li><a href="mailto:info@topconstructionanddesign.com"><Mail />info@topconstructionanddesign.com</a></li>
            </ul>
            <div className="about-action"><a href="/contact/">Contact Us Now</a></div>
          </div>
          <div className="about-story-pool">
            <img src="/about-media/story-pool.webp" alt="Lakefront backyard with new pool, sun deck and composite deck" width="1200" height="800" loading="lazy" />
          </div>
        </section>
        <section className="coral-carousel about-gallery" aria-label="Renovation gallery">
          <ImageCarousel
            slides={photos}
            label="Top Construction and Design projects"
            slidesPerView={2}
            mobileSlidesPerView={1}
            slideGap={20}
            autoplayDelay={1500}
          />
        </section>
      </main>
    </SiteChrome>
  );
}
