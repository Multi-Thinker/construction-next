import ImageCarousel from "../components/ImageCarousel";
import general1 from "../assets/general-construction/general-1.webp";
import general2 from "../assets/general-construction/general-2.webp";
import general3 from "../assets/general-construction/general-3.webp";
import general4 from "../assets/general-construction/general-4.webp";
import general5 from "../assets/general-construction/general-5.webp";
import general6 from "../assets/general-construction/general-6.webp";
import general7 from "../assets/general-construction/general-7.webp";
import project1 from "../assets/general-construction/project-1.webp";
import project2 from "../assets/general-construction/project-2.webp";
import project3 from "../assets/general-construction/project-3.webp";
import project4 from "../assets/general-construction/project-4.webp";
import project5 from "../assets/general-construction/project-5.webp";

const asset = (image) => typeof image === "string" ? image : image.src;
const galleryOne = [[asset(general3), "Top Construction And Design General Construction (1)"], [asset(general4), "Top Construction And Design General Construction (2)"], [asset(general5), "Top Construction And Design General Construction (3)"], [asset(general6), "Top Construction And Design General Construction (4)"], [asset(general7), "Top Construction And Design General Construction (5)"]];
const galleryTwo = [[asset(project1), "Coral Springs FL Home Renovation after project was completed"], [asset(project2), "Kitchen island with dark stone top and built in microwave drawer"], [asset(project3), "Coral Springs FL Home Renovation after project was completed"], [asset(project4), "Living area with white curved sofa and open floating staircase"], [asset(project5), "Covered patio lounge seating beside the pool"]];

export default function GeneralConstructionPage() {
  return <section className="general-construction-page">
    <section className="general-hero"><div className="general-hero-image"><img src={asset(general1)} alt="Covered patio with white outdoor sectional and bar seating" width="1280" height="853" fetchPriority="high" /></div><div className="general-hero-copy"><h1>General Construction</h1><p>When you need a contractor for structural changes in your South Florida home, call Top Construction and Design! We can help with a range of small- and large-projects, such as:</p></div></section>
    <section className="general-light-section general-testimonials"><h2>What Our Customers Have To Say</h2></section>
    <section className="general-light-section general-two-column general-layout-section"><div className="general-mobile-image"><img src={asset(general2)} alt="Double height great room with ring chandelier and loft" width="1280" height="853" loading="lazy" /></div><div><h2>Open Layout Design</h2><p>Open layouts can make your home feel airy, large, and welcoming. Whether you want an open layout between your kitchen and living area or want to knock down a wall to expand your master bedroom, we can help with the structural details.</p></div><div><h2>Room Expansion</h2><p>Your current layout might be restricting your dreams for more storage, bigger appliances, or simply a little bit of extra breathing room. We can find ways to expand your home so that you can stop feeling cramped.</p></div></section>
    <section className="general-light-gallery"><ImageCarousel slides={galleryOne} label="General construction project gallery" className="general-gallery" slidesPerView={2} /></section>
    <section className="general-dark-section general-two-column"><div><h2>Roof Installation</h2><p>Maybe your roof has been damaged or you want to expand your attic space by installing a different style. Top Construction and Design can help you put together plans for your new roof and oversee installation.</p><h2>Natural Lighting Options</h2><p>If your South Florida home could use some more light, you might have realized that buying more light fixtures isn’t a satisfying fix. Top Construction and Design can install new windows and skylights, or expand your existing windows for more light.</p><p>We can also construct a sunroom or covered patio that will make it easier than ever for you to enjoy our South Florida sunshine!</p></div><div><h2>Outdoor Construction</h2><p>Top Construction and Design can help you with a range of outdoor projects, including driveway upgrades, walkway installation, patio design, outdoor kitchens, covered parking options, pool areas and more. No matter whether your goal is to have the best outdoor entertainment space or you’re looking to boost your curb appeal, we can transform your home’s exterior!</p><p>When it comes to general construction, our team has the architectural experience to make sure your project is safe and code-compliant!</p></div></section>
    <section className="general-dark-gallery"><ImageCarousel slides={galleryTwo} label="General construction renovation gallery" className="general-gallery dark-gallery" slidesPerView={2} /></section>
  </section>;
}
