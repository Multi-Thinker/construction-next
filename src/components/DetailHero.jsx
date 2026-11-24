export default function DetailHero({
  title,
  desktopImage,
  mobileImage,
  desktopMinHeight = 400,
  mobileMinHeight = 360,
  desktopPaddingTop = 53,
  overlayClassName = '',
}) {
  return <section
    className={`detail-hero ${overlayClassName}`}
    style={{
      '--detail-hero-desktop-image': `url("${desktopImage}")`,
      '--detail-hero-mobile-image': `url("${mobileImage || desktopImage}")`,
      '--detail-hero-desktop-min-height': `${desktopMinHeight}px`,
      '--detail-hero-mobile-min-height': `${mobileMinHeight}px`,
      '--detail-hero-desktop-padding-top': `${desktopPaddingTop}px`,
    }}
  >
    <div className="detail-hero-overlay"><h1>{title}</h1></div>
  </section>;
}
