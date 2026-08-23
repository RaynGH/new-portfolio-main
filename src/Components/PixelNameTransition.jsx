import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const NAME = 'John Averian Oro';
const CANVAS_PADDING_X = 84;
const CANVAS_PADDING_Y = 52;

function PixelNameTransition() {
  const rootRef = useRef(null);
  const cleanRef = useRef(null);
  const pixelRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const clean = cleanRef.current;
    const pixel = pixelRef.current;
    const canvas = canvasRef.current;

    if (!root || !clean || !pixel || !canvas) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reducedMotion.matches) {
      gsap.set(clean, { opacity: 1, y: 0, filter: 'blur(0px)' });
      gsap.set(pixel, { display: 'none' });
      gsap.set(canvas, { display: 'none' });
      return undefined;
    }

    let cancelled = false;
    let timeline;

    const runAnimation = async () => {
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }

      if (cancelled) return;

      const rootRect = root.getBoundingClientRect();
      const pixelStyle = window.getComputedStyle(pixel);
      const width = Math.ceil(rootRect.width + CANVAS_PADDING_X * 2);
      const height = Math.ceil(rootRect.height + CANVAS_PADDING_Y * 2);
      const context = canvas.getContext('2d', { willReadFrequently: true });

      if (!context || width <= 0 || height <= 0) {
        gsap.set(clean, { opacity: 1 });
        gsap.set(pixel, { display: 'none' });
        return;
      }

      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.style.left = `${-CANVAS_PADDING_X}px`;
      canvas.style.top = `${-CANVAS_PADDING_Y}px`;

      context.clearRect(0, 0, width, height);
      context.fillStyle = '#ffffff';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.font = `${pixelStyle.fontWeight} ${pixelStyle.fontSize} ${pixelStyle.fontFamily}`;
      context.fillText(NAME.toUpperCase(), width / 2, height / 2);

      const imageData = context.getImageData(0, 0, width, height);
      const particles = [];
      const sampleStep = Math.max(3, Math.round(width / 170));
      const centerX = width / 2;
      const centerY = height / 2;

      for (let y = 0; y < height; y += sampleStep) {
        for (let x = 0; x < width; x += sampleStep) {
          const alpha = imageData.data[(y * width + x) * 4 + 3];
          if (alpha < 90) continue;

          const outwardX = ((x - centerX) / Math.max(centerX, 1)) * 52;
          const outwardY = ((y - centerY) / Math.max(centerY, 1)) * 18;

          particles.push({
            x,
            y,
            dx: outwardX + (Math.random() - 0.5) * 78,
            dy: outwardY + (Math.random() - 0.58) * 58,
            size: Math.max(2, sampleStep * (0.72 + Math.random() * 0.6)),
            alpha: 0.62 + Math.random() * 0.38,
            delay: Math.random() * 0.2,
          });
        }
      }

      context.clearRect(0, 0, width, height);
      const particleColor = pixelStyle.color;
      const animationState = { progress: 0 };

      const drawParticles = () => {
        const progress = animationState.progress;
        context.clearRect(0, 0, width, height);
        context.fillStyle = particleColor;

        particles.forEach((particle) => {
          const localProgress = Math.min(
            1,
            Math.max(0, (progress - particle.delay) / (1 - particle.delay))
          );

          const eased = 1 - Math.pow(1 - localProgress, 2.2);
          const size = Math.max(0.6, particle.size * (1 - localProgress * 0.64));

          context.globalAlpha = particle.alpha * Math.pow(1 - localProgress, 1.2);
          context.fillRect(
            particle.x + particle.dx * eased,
            particle.y + particle.dy * eased,
            size,
            size
          );
        });

        context.globalAlpha = 1;
      };

      drawParticles();

      gsap.set(clean, { opacity: 0, y: 8, filter: 'blur(6px)' });
      gsap.set(pixel, { opacity: 1 });
      gsap.set(canvas, { opacity: 0, visibility: 'visible' });

      timeline = gsap.timeline({ defaults: { overwrite: true } });

      timeline
        .to({}, { duration: 0.8 })
        .to(canvas, { opacity: 1, duration: 0.12, ease: 'none' }, 0.76)
        .to(pixel, { opacity: 0, duration: 0.28, ease: 'power1.out' }, 0.82)
        .to(
          animationState,
          {
            progress: 1,
            duration: 1.1,
            ease: 'power2.out',
            onUpdate: drawParticles,
          },
          0.8
        )
        .to(
          clean,
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.9,
            ease: 'power2.out',
          },
          1.15
        )
        .to(canvas, { opacity: 0, duration: 0.22, ease: 'none' }, 1.86)
        .set(canvas, { visibility: 'hidden' });
    };

    runAnimation();

    return () => {
      cancelled = true;
      timeline?.kill();
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
      <canvas ref={canvasRef} className="hero-name-particles" />
    </span>
  );
}

export default PixelNameTransition;
