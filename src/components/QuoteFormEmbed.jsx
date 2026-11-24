'use client';

import { useEffect, useRef, useState } from 'react';

const formUrl = 'https://leads.guacdigital.com/lp/top-construction-design/embed';
const formOrigin = new URL(formUrl).origin;

export default function QuoteFormEmbed() {
  const frame = useRef(null);
  const [height, setHeight] = useState(532);

  useEffect(() => {
    function resize(event) {
      if (event.origin !== formOrigin || event.source !== frame.current?.contentWindow) return;
      const nextHeight = Number(event.data?.guacFormHeight);
      if (Number.isFinite(nextHeight) && nextHeight > 0 && nextHeight <= 3000) {
        setHeight(Math.ceil(nextHeight));
      }
    }

    window.addEventListener('message', resize);
    return () => window.removeEventListener('message', resize);
  }, []);

  return (
    <iframe
      ref={frame}
      className="contact-quote-frame"
      src={formUrl}
      title="Get a free quote"
      height={height}
    />
  );
}
