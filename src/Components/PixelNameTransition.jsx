import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const NAME = 'John Averian Oro';
const CANVAS_PADDING_X = 120;
const CANVAS_PADDING_Y = 72;

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
      const sampleStep = Math.max(4, Math.round(width / 125));
      const centerX = width / 2;
      const centerY = height / 2;
      const textStartX = CANVAS_PADDING_X;
      const textWidth = Math.max(1, width - CANVAS_PADDING_X * 2);

      for (let y = 0; y < height; y += sampleStep) {
        for (let x = 0; x < width; x += sampleStep) {
          const alpha = imageData.data[(y * width + x) * 4 + 3];
          if (alpha < 80) continue;

          const normalizedX = Math.min(1, Math.max(0, (x - textStartX) / textWidth));
          const outwardX = ((x - centerX) / Math.max(centerX, 1)) * 72;
          const outwardY = ((y - centerY) / Math.max(centerY, 1)) * 30;

          particles.push({
            x,
            y,
            dx: outwardX + 42 + (Math.random() - 0.5) * 110,
            dy: outwardY + (Math.random() - 0.58) * 88,
            size: Math.max(3, sampleStep * (0.9 + Math.random() * 0.75)),
            alpha: 0.78 + Math.random() * 0.22,
            delay: normalizedX * 0.34 + Math.random() * 0.08,
            rotation: (Math.random() - 0.5) * 1.4,
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
            Math.max(0, (progress - particle.delay) / Math.max(0.001, 1 - particle.delay))
          );

          const eased = 1 - Math.pow(1 - localProgress, 2.6);
          const fadeProgress = Math.max(0, (localProgress - 0.34) / 0.66);
          const size = Math.max(1, particle.size * (1 - localProgress * 0.42));
          const x = particle.x + particle.dx * eased;
          const y = particle.y + particle.dy * eased - Math.sin(localProgress * Math.PI) * 8;

          context.save();
          context.globalAlpha = particle.alpha * Math.pow(1 - fadeProgress, 1.15);
          context.translate(x + size / 2, y + size / 2);
          context.rotate(particle.rotation * localProgress);
          context.fillRect(-size / 2, -size / 2, size, size);
          context.restore();
        });

        context.globalAlpha = 1;
      };

      drawParticles();

      gsap.set(clean, { opacity: 0, y: 10, filter: 'blur(7px)' });
      gsap.set(pixel, { opacity: 1 });
      gsap.set(canvas, { opacity: 0, visibility: 'visible' });

      timeline = gsap.timeline({ defaults: { overwrite: true } });

      timeline
        .to({}, { duration: 0.9 })
        .to(canvas, { opacity: 1, duration: 0.08, ease: 'none' }, 0.88)
        .to(pixel, { opacity: 0, duration: 0.12, ease: 'none' }, 0.92)
        .to(
          animationState,
          {
            progress: 1,
            duration: 1.35,
            ease: 'power2.out',
            onUpdate: drawParticles,
          },
          0.9
        )
        .to(
          clean,
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.72,
            ease: 'power2.out',
          },
          1.52
        )
        .to(canvas, { opacity: 0, duration: 0.16, ease: 'none' }, 2.18)
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
