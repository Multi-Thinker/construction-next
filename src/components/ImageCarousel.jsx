'use client';

import { useEffect, useState } from "react";

export default function ImageCarousel({ slides, label, className = "", slidesPerView = 1 }) {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacted, setInteracted] = useState(false);

  useEffect(() => {
    if (paused || interacted) return undefined;
    const timer = window.setInterval(
      () => setSlide((current) => (current + 1) % slides.length),
      2500,
    );
    return () => window.clearInterval(timer);
  }, [interacted, paused, slides.length]);

  const selectSlide = (index) => {
    setInteracted(true);
    setSlide(index);
  };

  const isNearby = (index) =>
    index === slide ||
    index === (slide + 1) % slides.length ||
    index === (slide - 1 + slides.length) % slides.length;

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
          style={{ transform: `translateX(calc(-${slide} * (100% / var(--slides-per-view))))`, "--slides-per-view": slidesPerView }}
          aria-live="off"
        >
          {slides.map(([src, alt], index) => (
            <figure
              className="source-carousel-slide"
              key={src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} / ${slides.length}`}
              aria-hidden={index !== slide}
            >
              {isNearby(index) && (
                <img
                  src={src}
                  alt={alt}
                  width="640"
                  height="427"
                  loading={index === slide ? "eager" : "lazy"}
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
