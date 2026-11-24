'use client';

import { useState } from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import HomePage from '../src/content-pages/HomePage';
import { navGroups, routes } from '../src/data/siteData';
import detailPhoto from '../src/assets/optimized/detail.webp';
import permitsPhoto from '../src/assets/optimized/permits.webp';
import professionalismPhoto from '../src/assets/optimized/professionalism.webp';
import servicesSlide1 from '../src/assets/optimized/carousel-services-1.webp';
import servicesSlide2 from '../src/assets/optimized/carousel-services-2.webp';
import servicesSlide3 from '../src/assets/optimized/carousel-services-3.webp';
import servicesSlide4 from '../src/assets/optimized/carousel-services-4.webp';
import servicesSlide5 from '../src/assets/optimized/carousel-services-5.webp';
import areasSlide1 from '../src/assets/optimized/carousel-areas-1.webp';
import areasSlide2 from '../src/assets/optimized/carousel-areas-2.webp';
import areasSlide3 from '../src/assets/optimized/carousel-areas-3.webp';
import areasSlide4 from '../src/assets/optimized/carousel-areas-4.webp';
import areasSlide5 from '../src/assets/optimized/carousel-areas-5.webp';

const hero = '/hero.webp';
const asset = (image) => typeof image === 'string' ? image : image.src;
const serviceSlides = [[asset(servicesSlide1), 'Coral Springs FL home renovation project photo'], [asset(servicesSlide2), 'Coral Springs FL home renovation project photo'], [asset(servicesSlide3), 'Top Construction and Design flooring project'], [asset(servicesSlide4), 'Top Construction and Design general construction project'], [asset(servicesSlide5), 'Coral Springs FL home renovation project photo']];
const areaSlides = [[asset(areasSlide1), 'Paver installation by Top Construction and Design'], [asset(areasSlide2), 'Top Construction and Design work van at a job site'], [asset(areasSlide3), 'South Florida residential construction project'], [asset(areasSlide4), 'Outdoor hardscaping work by Top Construction and Design'], [asset(areasSlide5), 'Top Construction and Design service area project']];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <main><Header route="home" setMenuOpen={setMenuOpen} menuOpen={menuOpen} navGroups={navGroups} /><HomePage hero={hero} serviceSlides={serviceSlides} areaSlides={areaSlides} detailPhoto={asset(detailPhoto)} permitsPhoto={asset(permitsPhoto)} professionalismPhoto={asset(professionalismPhoto)} /><Footer routes={routes} /></main>;
}

