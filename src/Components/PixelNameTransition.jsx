import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const NAME = 'John Averian Oro';
const PARTICLE_PADDING_X = 112;
const PARTICLE_PADDING_Y = 78;
const MAX_PARTICLES = 240;

gsap.registerPlugin(useGSAP);

function PixelNameTransition() {
  const rootRef = useRef(null);
  const cleanRef = useRef(null);
  const pixelRef = useRef(null);
  const particleLayerRef = useRef(null);

  useGSAP(
    (context, contextSafe) => {
      const root = rootRef.current;
      const clean = cleanRef.current;
      const pixel = pixelRef.current;
      const particleLayer = particleLayerRef.current;

      if (!root || !clean || !pixel || !particleLayer) return undefined;

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

      if (reducedMotion.matches) {
        gsap.set(clean, { opacity: 1, y: 0, filter: 'blur(0px)' });
        gsap.set(pixel, { display: 'none' });
        gsap.set(particleLayer, { display: 'none' });
        return undefined;
      }

      let cancelled = false;
      let timeline;

      const startAnimation = contextSafe(() => {
        if (cancelled) return;

        const rootRect = root.getBoundingClientRect();
        const pixelStyle = window.getComputedStyle(pixel);
        const width = Math.ceil(rootRect.width + PARTICLE_PADDING_X * 2);
        const height = Math.ceil(rootRect.height + PARTICLE_PADDING_Y * 2);

        if (width <= 0 || height <= 0) {
          gsap.set(clean, { opacity: 1 });
          gsap.set(pixel, { display: 'none' });
          return;
        }

        const samplingCanvas = document.createElement('canvas');
        samplingCanvas.width = width;
        samplingCanvas.height = height;
        const context2d = samplingCanvas.getContext('2d', { willReadFrequently: true });

        if (!context2d) {
          gsap.set(clean, { opacity: 1 });
          gsap.set(pixel, { display: 'none' });
          return;
        }

        context2d.clearRect(0, 0, width, height);
        context2d.fillStyle = '#ffffff';
        context2d.textAlign = 'center';
        context2d.textBaseline = 'middle';
        context2d.font = `${pixelStyle.fontWeight} ${pixelStyle.fontSize} ${pixelStyle.fontFamily}`;
        context2d.fillText(NAME.toUpperCase(), width / 2, height / 2);

        const imageData = context2d.getImageData(0, 0, width, height);
        const sampleStep = Math.max(4, Math.round(width / 125));
        const candidates = [];

        for (let y = 0; y < height; y += sampleStep) {
          for (let x = 0; x < width; x += sampleStep) {
            const alpha = imageData.data[(y * width + x) * 4 + 3];
            if (alpha < 110) continue;
            candidates.push({ x, y });
          }
        }

        const stride = Math.max(1, Math.ceil(candidates.length / MAX_PARTICLES));
        const particlePoints = candidates
          .filter((_, index) => index % stride === 0)
          .slice(0, MAX_PARTICLES);

        particleLayer.replaceChildren();
        particleLayer.style.width = `${width}px`;
        particleLayer.style.height = `${height}px`;
        particleLayer.style.left = `${-PARTICLE_PADDING_X}px`;
        particleLayer.style.top = `${-PARTICLE_PADDING_Y}px`;

        const centerX = width / 2;
        const centerY = height / 2;
        const particleColor = pixelStyle.color;

        particlePoints.forEach((point) => {
          const particle = document.createElement('span');
          const size = Math.max(5, sampleStep * (1.08 + Math.random() * 0.45));
          const normalizedX = (point.x - centerX) / Math.max(centerX, 1);
          const normalizedY = (point.y - centerY) / Math.max(centerY, 1);
          const finalDx = normalizedX * 118 + (Math.random() - 0.5) * 122;
          const finalDy = normalizedY * 48 + (Math.random() - 0.72) * 112;

          particle.className = 'hero-name-particle';
          particle.style.left = `${point.x}px`;
          particle.style.top = `${point.y}px`;
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.backgroundColor = particleColor;
          particle.dataset.dx = `${finalDx}`;
          particle.dataset.dy = `${finalDy}`;
          particle.dataset.midX = `${finalDx * (0.24 + Math.random() * 0.08)}`;
          particle.dataset.midY = `${finalDy * (0.24 + Math.random() * 0.08)}`;
          particle.dataset.rotation = `${(Math.random() - 0.5) * 180}`;

          particleLayer.appendChild(particle);
        });

        const particles = Array.from(
          particleLayer.querySelectorAll('.hero-name-particle')
        ).sort((a, b) => parseFloat(a.style.left) - parseFloat(b.style.left));

        gsap.set(clean, { opacity: 0, y: 9, filter: 'blur(7px)' });
        gsap.set(pixel, { opacity: 1 });
        gsap.set(particleLayer, { visibility: 'visible' });
        gsap.set(particles, { opacity: 0, scale: 1, x: 0, y: 0, rotation: 0 });

        timeline = gsap.timeline({ defaults: { overwrite: true } });

        timeline
          .to({}, { duration: 0.85 })
          .set(particles, { opacity: 1 }, 0.85)
          .to(pixel, { opacity: 0, duration: 0.12, ease: 'none' }, 0.86)
          .to({}, { duration: 0.2 }, 0.97)
          .to(
            particles,
            {
              x: (_, element) => Number(element.dataset.midX),
              y: (_, element) => Number(element.dataset.midY),
              rotation: (_, element) => Number(element.dataset.rotation) * 0.22,
              opacity: 1,
              scale: 1,
              duration: 0.34,
              ease: 'power1.out',
              stagger: {
                each: 0.0025,
                from: 'start',
              },
            },
            1.12
          )
          .to(
            particles,
            {
              x: (_, element) => Number(element.dataset.dx),
              y: (_, element) => Number(element.dataset.dy),
              rotation: (_, element) => Number(element.dataset.rotation),
              opacity: 0,
              scale: () => 0.38 + Math.random() * 0.32,
              duration: 0.92,
              ease: 'power2.out',
              stagger: {
                each: 0.003,
                from: 'start',
              },
            },
            1.42
          )
          .to(
            clean,
            {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 0.78,
              ease: 'power2.out',
            },
            1.72
          )
          .set(particleLayer, { visibility: 'hidden' }, 2.58);
      });

      const fontsReady = document.fonts?.ready;

      if (fontsReady) {
        fontsReady.then(() => {
          if (!cancelled) startAnimation();
        });
      } else {
        startAnimation();
      }

      return () => {
        cancelled = true;
        timeline?.kill();
        particleLayer.replaceChildren();
      };
    },
    { scope: rootRef }
  );

  return (
    <span ref={rootRef} className="hero-name-transition" aria-hidden="true">
      <span ref={cleanRef} className="hero-name-clean">
        {NAME}
      </span>
      <span ref={pixelRef} className="hero-name-pixel">
        {NAME}
      </span>
      <span ref={particleLayerRef} className="hero-name-particles" />
    </span>
  );
}

export default PixelNameTransition;
