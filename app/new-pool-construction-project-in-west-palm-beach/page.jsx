import SiteChrome from '../../src/components/SiteChrome';
import DetailHero from '../../src/components/DetailHero';
import MasonryGallery from '../../src/components/MasonryGallery';

export const metadata = {
  title: 'New Pool Construction Project in West Palm Beach | Top Construction and Design',
  description: 'See a completed new pool construction project in West Palm Beach by Top Construction and Design, including the finished pool and surrounding outdoor work.',
  alternates: { canonical: 'https://topconstructionanddesign.com/new-pool-construction-project-in-west-palm-beach/' },
};

const beforeGallery = [1, 2, 3].map((n) => [`/our-work/pool/pool-${n}.jpg`, `New pool construction project image ${n}`]);
const afterGallery = [6, 7, 8, 9].map((n) => [`/our-work/pool/pool-${n}.jpg`, `Completed West Palm Beach pool project image ${n}`]);

export default function NewPoolProjectPage() {
  return <main><SiteChrome route="our-work">
    <DetailHero title="New Pool Construction Project in West Palm Beach" desktopImage="/our-work/pool/pool-4.jpg" mobileImage="/our-work/pool/pool-5.jpg" />
    <section className="work-light-section"><h2>Once the pool was done:</h2><p>Our team completed this new pool construction project in West Palm Beach with a finished outdoor space designed for South Florida living.</p><MasonryGallery images={beforeGallery} columns={3} mobileColumns={2} gap={10} borderColor="#000" borderWidth={3} label="Pool construction gallery" /></section>
    <section className="work-light-section work-around"><h2>And around the pool:</h2><p>The completed pool area brings together clean concrete work, landscaping and space for outdoor entertaining.</p></section>
    <section className="work-dark-section"><h2>Completed project</h2><MasonryGallery images={afterGallery} columns={3} mobileColumns={2} gap={10} borderColor="#fff" borderWidth={3} label="Completed pool project gallery" /></section>
  </SiteChrome></main>;
}
