'use client';
import { useState } from 'react';

export default function MasonryGallery({ images, columns = 3, mobileColumns = 2, gap = 10, borderColor = '#000000', borderWidth = 3, label = 'Image gallery' }) {
  const [active, setActive] = useState(null);
  return <div
    className="masonry-gallery"
    aria-label={label}
    style={{ '--masonry-columns': columns, '--masonry-mobile-columns': mobileColumns, '--masonry-gap': `${gap}px`, '--masonry-border-color': borderColor, '--masonry-border-width': `${borderWidth}px` }}
  >
    {images.map(([src, alt]) => <button className="masonry-gallery-item" type="button" onClick={() => setActive([src, alt])} key={`${src}-${alt}`} aria-label={alt || 'Open gallery image'}>
      <img src={src} alt={alt} loading="lazy" />
    </button>)}
    {active && <div className="masonry-lightbox" role="dialog" aria-modal="true" aria-label={active[1]} onClick={() => setActive(null)}><img src={active[0]} alt={active[1]} /><button type="button" onClick={() => setActive(null)} aria-label="Close image">×</button></div>}
  </div>;
}
