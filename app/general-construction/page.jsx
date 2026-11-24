import GeneralConstructionPage from '../../src/content-pages/GeneralConstructionPage';
import SiteChrome from '../../src/components/SiteChrome';

export const metadata = {
  title: 'General Contractor in Broward County | Top Construction and Design',
  description: 'General construction for Broward County homes: open layouts, room expansions, roof work and outdoor projects, managed from start to finish.',
  alternates: { canonical: 'https://topconstructionanddesign.com/general-construction/' },
};

export default function GeneralConstructionRoute() {
  return <main><SiteChrome route="services"><GeneralConstructionPage /></SiteChrome></main>;
}
