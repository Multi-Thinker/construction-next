'use client';

import { useEffect, useState } from "react";

export default function ImageCarousel({
  slides, label, className = "", slidesPerView = 1,
  mobileSlidesPerView = slidesPerView, slideGap = 0, autoplayDelay = 2500,
}) {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (mobileSlidesPerView === slidesPerView) return;
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, [mobileSlidesPerView, slidesPerView]);

  useEffect(() => {
    if (paused || interacted) return undefined;
    const timer = window.setInterval(
      () => setSlide((current) => (current + 1) % slides.length),
      autoplayDelay,
    );
    return () => window.clearInterval(timer);
  }, [autoplayDelay, interacted, paused, slides.length]);

  const selectSlide = (index) => {
    setInteracted(true);
    setSlide(index);
  };

  const isNearby = (index) =>
    index === slide ||
    index === (slide + 1) % slides.length ||
    index === (slide - 1 + slides.length) % slides.length;

  const visibleSlides = mobile ? mobileSlidesPerView : slidesPerView;
  const multiple = visibleSlides > 1;
  const responsive = mobileSlidesPerView !== slidesPerView;
  const trackSlides = multiple ? [...slides, ...slides.slice(0, visibleSlides - 1)] : slides;

  return (
    <div
      className={`source-carousel ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="source-carousel-viewport">
        <div
          className="source-carousel-track"
          style={{
            transform: `translateX(calc(-${slide} * ((100% + ${slideGap}px) / var(--slides-per-view))))`,
            "--slides-per-view": visibleSlides,
            gap: slideGap,
          }}
          aria-live="off"
        >
          {trackSlides.map(([src, alt], index) => (
            <figure
              className="source-carousel-slide"
              key={`${src}-${index}`}
              style={multiple ? { flexBasis: `calc((100% - ${(visibleSlides - 1) * slideGap}px) / var(--slides-per-view))` } : undefined}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index % slides.length + 1} / ${slides.length}`}
              aria-hidden={index < slide || index >= slide + visibleSlides}
            >
              {(multiple || responsive || isNearby(index)) && (
                <img
                  src={src}
                  alt={alt}
                  width="640"
                  height="427"
                  loading={index === slide || (responsive && isNearby(index)) ? "eager" : "lazy"}
                />
              )}
            </figure>
          ))}
        </div>
      </div>
      <div className="source-carousel-dots" aria-label="Carousel pagination">
        {slides.map(([, alt], index) => (
          <button
            key={`${alt}-${index}`}
            type="button"
            className={index === slide ? "active" : ""}
            onClick={() => selectSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === slide ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
