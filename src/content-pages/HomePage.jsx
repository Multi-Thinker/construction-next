import ImageCarousel from "../components/ImageCarousel";

export default function HomePage({
  hero,
  serviceSlides,
  areaSlides,
  detailPhoto,
  permitsPhoto,
  professionalismPhoto,
}) {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
        <div className="hero-inner">
          <h1>
            Kitchen, Bath &amp; Home
            <br />
            Remodeling in Broward
            <br />
            County
          </h1>
          <div className="hero-intro">
            Top Construction and Design offers a range of remodeling services
            for your South Florida home. From the first time you call us to the
            moment of the final remodel reveal, you will see how friendliness,
            professionalism and attention to detail set us apart.
          </div>
        </div>
      </section>
      <section className="main-content">
        <h2 className="testimonials-heading">What Our Customers Have To Say</h2>
        <div className="feature-row">
          <div className="feature-copy">
            <h2>
              Wide Range Of
              <br />
              Remodeling Services
            </h2>
            <p>
              When you call Top Construction and Design, you will get a team
              that is up for any challenge. We have experience with kitchen
              remodels, flooring replacement, drywall repair, bathroom remodels,
              exterior siding installation, painting, home addition
              construction, room expansion and more.
            </p>
            <p>
              If you can dream it, we will do what it takes to bring your vision
              to life.
            </p>
            <a className="section-link" href="/general-construction/">
              Explore services
            </a>
          </div>
          <ImageCarousel
            slides={serviceSlides}
            label="Wide range of remodeling services projects"
            className="feature-carousel"
          />
        </div>
        <div className="cards-grid">
          <article className="info-card">
            <h3>Attention To Detail</h3>
            <img src={detailPhoto} alt="Interior design detail" width="433" height="694" loading="lazy" />
            <p>
              Once your contractors have packed up and gone, the last thing you
              want is to start noticing everything they got wrong. From sloppy
              paint jobs to sticky cabinet door hinges, these small details can
              leave a bad taste in your mouth when you should be enjoying the
              home you had been waiting for.
            </p>
            <p>
              Top Construction and Design can make your home remodel as easy and
              peaceful as possible. Call today for a free estimate.
            </p>
          </article>
          <article className="info-card">
            <h3>Permitting Services</h3>
            <img src={permitsPhoto} alt="People reviewing project paperwork" width="431" height="694" loading="lazy" />
            <p>
              Not sure how to navigate the building permit submission process
              here in South Florida? We make it simple.
            </p>
            <p>
              As experts in South Florida building code, the team helps make
              sure remodeling plans follow building regulations so the permit
              submission process is clearer.
            </p>
          </article>
          <article className="info-card">
            <h3>Professionalism</h3>
            <img src={professionalismPhoto} alt="Home control application" width="433" height="694" loading="lazy" />
            <p>
              Top Construction and Design is made up of licensed, bonded and
              insured contractors trained in a range of services. For the team,
              professionalism goes much further than credentials.
            </p>
            <p>
              They emphasize communication, integrity and high-quality
              workmanship.
            </p>
          </article>
        </div>
        <div className="county-row">
          <ImageCarousel
            slides={areaSlides}
            label="Broward County project gallery"
            className="county-carousel"
          />
          <div>
            <h2>
              Serving All Of Broward
              <br />
              County
            </h2>
            <p>
              Top Construction and Design comes to your home anywhere in Broward
              County, including Fort Lauderdale, Weston, Southwest Ranches,
              Davie, Plantation, Sunrise, Cooper City, Pembroke Pines, Coral
              Springs, Parkland, Hollywood, Coconut Creek and Margate.
            </p>
            <p>
              Call <a href="tel:+19543182322">(954) 318-2322</a>, Monday to
              Friday, 8:00 AM to 5:00 PM, to talk about your remodeling project.
            </p>
            <a className="section-link" href="#/areas">
              View service areas
            </a>
          </div>
        </div>
        <p className="closing-line">
          Call Top Construction and Design to learn more about how the dedicated
          team can
          <br className="desktop-break" /> help you achieve your dream home.
        </p>
      </section>
    </>
  );
}
