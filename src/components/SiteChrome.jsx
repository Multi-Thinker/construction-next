'use client';

import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { navGroups, routes } from '../data/siteData';

export default function SiteChrome({ route = 'home', children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return <><Header route={route} setMenuOpen={setMenuOpen} menuOpen={menuOpen} navGroups={navGroups} />{children}<Footer routes={routes} /></>;
}
