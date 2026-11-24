import SiteChrome from '../../src/components/SiteChrome';
import ProjectCard from '../../src/components/ProjectCard';

export const metadata = {
  title: 'Portfolio | Top Construction and Design',
  description: 'Explore residential remodeling and construction projects by Top Construction and Design across South Florida.',
  alternates: { canonical: 'https://topconstructionanddesign.com/portfolio/' },
};

const projects = [
  ['project-1.jpg', 'Pool and concrete work in Davie FL', 'Pool and concrete work Davie FL - Residential', '2024', '/pool-and-concrete-work-davie-fl/'],
  ['project-2.jpg', 'Home renovation in Plantation FL', 'Plantation FL - Residential', '2024', '/plantation-fl-project-portfolio/'],
  ['project-3.jpeg', 'South Florida home renovation', 'South Florida Home Renovation - Residential', '', '/coral-springs-fl-project-portfolio/'],
  ['project-4.jpg', 'Chapman Road home renovation', 'Chapman Road Unit 3 - Residential', '', '/chapman-road-unit-3/'],
  ['project-5.jpg', 'East Bend Drive home renovation', 'East Bend Drive - Residential', '', '/east-bend-drive/'],
  ['project-6.jpg', 'Alamo Place home renovation', 'Alamo Place - Residential', '', '/alamo-place-project-1/'],
  ['project-7.jpg', 'Alamo Place interior renovation', 'Alamo Place Interior - Residential', '', '/alamo-place-project-2/'],
  ['project-8.jpg', 'Coral Springs home renovation', 'Coral Springs FL - Residential', '', '/coral-springs-fl-project-portfolio/'],
];

export default function PortfolioPage() {
  return <main><SiteChrome route="portfolio"><section className="portfolio-page"><h1>Portfolio</h1><div className="portfolio-grid">{projects.map(([image, alt, title, year, href]) => <ProjectCard key={href + title} image={`/portfolio/${image}`} alt={alt} title={title} year={year} href={href} />)}</div></section></SiteChrome></main>;
}
