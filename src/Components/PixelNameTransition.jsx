import { useEffect, useRef } from 'react';
import { animate } from 'motion';

const NAME = 'John Averian Oro';
const PARTICLE_PADDING_X = 112;
const PARTICLE_PADDING_Y = 78;
const MAX_PARTICLES = 240;

function PixelNameTransition() {
  const rootRef = useRef(null);
  const cleanRef = useRef(null);
  const pixelRef = useRef(null);
  const particleLayerRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const clean = cleanRef.current;
    const pixel = pixelRef.current;
    const particleLayer = particleLayerRef.current;

    if (!root || !clean || !pixel || !particleLayer) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reducedMotion.matches) {
      clean.style.opacity = '1';
      clean.style.transform = 'translateY(0px)';
      clean.style.filter = 'blur(0px)';
      pixel.style.display = 'none';
      particleLayer.style.display = 'none';
      return undefined;
    }

    let cancelled = false;
    const controls = [];

    const track = (control) => {
      controls.push(control);
      return control;
    };

    const startAnimation = () => {
      if (cancelled) return;

      const rootRect = root.getBoundingClientRect();
      const pixelStyle = window.getComputedStyle(pixel);
      const width = Math.ceil(rootRect.width + PARTICLE_PADDING_X * 2);
      const height = Math.ceil(rootRect.height + PARTICLE_PADDING_Y * 2);

      if (width <= 0 || height <= 0) {
        clean.style.opacity = '1';
        pixel.style.display = 'none';
        return;
      }

      const samplingCanvas = document.createElement('canvas');
      samplingCanvas.width = width;
      samplingCanvas.height = height;
      const canvasContext = samplingCanvas.getContext('2d', { willReadFrequently: true });

      if (!canvasContext) {
        clean.style.opacity = '1';
        pixel.style.display = 'none';
        return;
      }

      canvasContext.clearRect(0, 0, width, height);
      canvasContext.fillStyle = '#ffffff';
      canvasContext.textAlign = 'center';
      canvasContext.textBaseline = 'middle';
      canvasContext.font = `${pixelStyle.fontWeight} ${pixelStyle.fontSize} ${pixelStyle.fontFamily}`;
      canvasContext.fillText(NAME.toUpperCase(), width / 2, height / 2);

      const imageData = canvasContext.getImageData(0, 0, width, height);
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
      particleLayer.style.visibility = 'visible';

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
        particle.style.opacity = '0';
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

      clean.style.opacity = '0';
      clean.style.transform = 'translateY(9px)';
      clean.style.filter = 'blur(7px)';
      pixel.style.opacity = '1';

      track(
        animate(pixel, { opacity: [1, 0] }, {
          duration: 0.14,
          delay: 0.9,
          easing: 'linear',
        })
      );

      particles.forEach((particle, index) => {
        const midX = Number(particle.dataset.midX);
        const midY = Number(particle.dataset.midY);
        const finalX = Number(particle.dataset.dx);
        const finalY = Number(particle.dataset.dy);
        const rotation = Number(particle.dataset.rotation);
        const staggerDelay = index * 0.003;

        track(
          animate(
            particle,
            {
              opacity: [0, 1, 1, 1, 0],
              x: [0, 0, midX, midX, finalX],
              y: [0, 0, midY, midY, finalY],
              rotate: [0, 0, rotation * 0.22, rotation * 0.22, rotation],
              scale: [1, 1, 1, 1, 0.48],
            },
            {
              duration: 1.55,
              delay: 0.84 + staggerDelay,
              times: [0, 0.08, 0.42, 0.58, 1],
              easing: 'ease-out',
            }
          )
        );
      });

      track(
        animate(
          clean,
          {
            opacity: [0, 1],
            y: [9, 0],
            filter: ['blur(7px)', 'blur(0px)'],
          },
          {
            duration: 0.78,
            delay: 1.76,
            easing: 'ease-out',
          }
        )
      );
    };

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
      controls.forEach((control) => control?.stop?.());
      particleLayer.replaceChildren();
    };
  }, []);

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
