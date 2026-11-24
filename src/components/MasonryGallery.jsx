export default function MasonryGallery({ images, columns = 3, mobileColumns = 2, gap = 10, borderColor = '#000000', borderWidth = 3, label = 'Image gallery' }) {
  return <div
    className="masonry-gallery"
    aria-label={label}
    style={{ '--masonry-columns': columns, '--masonry-mobile-columns': mobileColumns, '--masonry-gap': `${gap}px`, '--masonry-border-color': borderColor, '--masonry-border-width': `${borderWidth}px` }}
  >
    {images.map(([src, alt, href = src]) => <a className="masonry-gallery-item" href={href} key={`${src}-${alt}`} aria-label={alt || 'Open gallery image'}>
      <img src={src} alt={alt} loading="lazy" />
    </a>)}
  </div>;
}
