import SiteChrome from '../../src/components/SiteChrome';
import ImageCarousel from '../../src/components/ImageCarousel';

export const metadata={title:'Remodeling Contractor in Coral Springs, FL | Top Construction and Design',description:'Top Construction and Design provides kitchen, bathroom, flooring, painting, additions and outdoor living remodeling in Coral Springs, Florida.',alternates:{canonical:'https://topconstructionanddesign.com/remodeling-contractor-coral-springs-fl/'}};
const root='/service-areas/coral-springs/';
const photos=['coral-3.jpg','coral-4.jpg','coral-5.jpg','coral-22.jpg'].map((x,i)=>[root+x,['Coral Springs FL Home Renovation Before and After project photo','Coral Springs FL Home Renovation after project was completed','Coral Springs FL Home Renovation Before and After project photo','Coral Springs FL Home Renovation Before and After project photo'][i]]);
const bathroomPhotos=['coral-whatsapp-1.jpeg','coral-2.jpg','coral-whatsapp-2.jpeg','coral-whatsapp-3.jpeg','coral-whatsapp-4.jpeg'].map((x,i)=>[root+x,['Primary bathroom with black freestanding tub and wood slat wall','Coral Springs FL Home Renovation Before and After project photo','Large walk in double shower with gray tile and glass walls','Bathroom with glass enclosed tub shower and dark stone vanity','Bathroom with gray tile shower, glass door and wood vanity'][i]]);
export default function CoralSpringsPage() {
  return (
    <SiteChrome route="areas">
      <main className="coral-page">
        <section className="coral-hero">
          <div className="coral-hero-image">
            <img src={root+'coral-1.jpg'} alt="Coral Springs FL Home Renovation Before and After project photo"/>
          </div>
          <div className="coral-hero-copy">
            <h1>Remodeling Contractor in Coral Springs, FL</h1>
            <p>We do not have to imagine what a Coral Springs renovation looks like, because we have done one from top to bottom. On <a href="/coral-springs-fl-home-renovation-before-and-after/">a whole-home renovation we finished in Coral Springs</a>, we rebuilt the kitchen and bathroom, replaced the floors with hardwood, repainted in neutral tones, added recessed lighting, highlighted the living room ceiling beams and restored the pool and patio outside.</p>
            <p>That project is a good picture of how we like to work: one team looking at the whole house, so the kitchen, floors, lighting and outdoor space feel like they belong together. Whether you want a single room or several, we start by understanding the house and how your family lives in it.</p>
          </div>
        </section>
        <section className="coral-reviews">
          <h2>What Our Customers Have To Say</h2>
        </section>
        <section className="coral-light coral-two-col">
          <div>
            <h2>Kitchens Built Around an Island</h2>
            <p>The kitchen on our Coral Springs renovation got custom cabinets, quartz countertops and a large island, and the room now works as the hub of the house. We plan layouts, cabinets, counters and lighting together so the kitchen fits how you cook and gather. See our <a href="/kitchen-remodeling-coral-springs-fl/">Coral Springs kitchen remodeling</a> page for what that process looks like in homes here.</p>
          </div>
          <div>
            <h2>Bathrooms With Walk-In Showers</h2>
            <p>Replacing an old tub with a glass-enclosed shower, modern tile and black fixtures, then adding a floating double vanity and brighter lighting, changed the whole feel of the bathroom on that same project. It is one of the most useful updates for Coral Springs homes from the 1970s and 1980s, where original bathrooms tend to be small and dim, with tubs that rarely get used.</p>
          </div>
        </section>
        <section className="coral-light coral-carousel">
          <ImageCarousel slides={photos} label="Coral Springs renovation photos" slidesPerView={2} slideGap={20} autoplayDelay={1500} />
        </section>
        <section className="coral-dark coral-two-col">
          <div>
            <h2>Floors, Paint and Lighting</h2>
            <p>New hardwood floors, a neutral repaint and recessed lighting can make a house feel new without moving a single wall. On our Coral Springs project, highlighting the existing ceiling beams in the living room gave the space character it already had but nobody noticed. We handle <a href="/flooring/">flooring</a>, painting and lighting as part of a larger job or on their own, room by room.</p>
          </div>
          <div>
            <h2>Additions and Outdoor Living</h2>
            <p>When a house simply needs more space, we design and build additions that match the existing roof and exterior. Outside, we update patios and outdoor areas, as we did when the pool was cleaned and restored, the patio refreshed and the landscaping redone on our Coral Springs renovation. Our <a href="/home-additions-coral-springs-fl/">Coral Springs home additions</a> page explains how additions work in this city.</p>
          </div>
        </section>
        <section className="coral-dark coral-carousel">
          <ImageCarousel slides={bathroomPhotos} label="Coral Springs bathroom and renovation photos" slidesPerView={2} slideGap={20} autoplayDelay={1500} />
        </section>
        <section className="coral-copy">
          <h2>Why Coral Springs Renovations Need a Whole-House View</h2>
          <p>Coral Springs was master planned in the 1960s and built out over the next few decades, so most homes here are now old enough that several systems are due at the same time. A Westchester ranch home from the 1970s, a Forest Hills or Maplewood house from the early 1980s and a Wyndham Lakes home from around 2000 each come with their own mix of original kitchens, worn baths, dated tile and lighting that was never quite enough.</p>
          <p>That is why we often recommend looking at the whole house before touching a single room, even if you plan to work in phases. Running new electrical for the kitchen while the walls are open, choosing one flooring for the main living areas instead of three, or planning bathroom plumbing alongside an addition can save a lot of rework and repeat demolition later. It also keeps the finished house consistent from room to room, so nothing looks like an afterthought.</p>
          <p>The city has long been known for strict building and appearance standards, and many neighborhoods have HOAs with architectural review for anything that changes the exterior. Guard-gated communities like Eagle Trace and the Heron Bay area add contractor access rules on top of that. We can help with design and permits, prepare what your association needs, and help coordinate inspections with the city’s building department. Coral Springs neighborhoods we work in include:</p>
          <ul>{['Westchester','Forest Hills','Maplewood','Ramblewood','Cypress Run','Running Brook','Turtle Run','Wyndham Lakes','Eagle Trace','Heron Bay'].map(x=><li key={x}>{x}</li>)}</ul>
          <h2>Home Remodeling questions from Coral Springs homeowners</h2>
          <h3>Should I renovate the whole house at once or room by room?</h3>
          <p>It depends on your budget, your schedule and whether you can live around the work. Doing it together often costs less in total and gives a more consistent result. Phasing works too, as long as there is a plan for the whole house first so later rooms do not undo earlier ones.</p>
          <h3>Can you show me work you have done in Coral Springs?</h3>
          <p>Yes. We have a written case study of a whole-home renovation in Coral Springs and a photo gallery from the same project, covering the kitchen, bathroom, floors, lighting, pool and patio. Both are linked on this page, and we are happy to walk through them with you.</p>
          <h3>Which remodeling projects need a permit in Coral Springs?</h3>
          <p>Structural changes, additions, and most plumbing and electrical work need a permit from the city’s building department. Cosmetic work like painting usually does not. Flooring and cabinet replacement can go either way depending on the scope. We tell you what applies and can help with the paperwork.</p>
          <h3>Do you handle HOA approvals?</h3>
          <p>We prepare the drawings, material samples and descriptions that associations ask for, and we follow your community’s rules on contractor hours, parking and access. The application is usually submitted by the homeowner, but we make sure you have what you need to submit it.</p>
          <h3>How does a project start?</h3>
          <p>Call to set up a visit. We walk through the house with you, talk about what you want to change and why, and look at the existing conditions. From there we put together a scope and a plan you can review before any work begins.</p>
          <p>Whether it is one tired bathroom or the whole house, we would be glad to see your Coral Springs home and talk it through. Call <a href="tel:+19543182322">(954) 318-2322</a> to set up a visit, or reach us through our <a href="/contact/">contact page</a>. We are available Monday to Friday, 8 AM to 5 PM.</p>
        </section>
      </main>
    </SiteChrome>
  );
}
