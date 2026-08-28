import { useEffect, useRef } from 'react';
import { animate } from 'motion';

function ScrollReveal({
  children,
  className = '',
  delay = 0,
  distance = 24,
  x = 0,
  duration = 0.7,
  amount = 0.18,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reducedMotion.matches) {
      element.style.opacity = '1';
      element.style.transform = 'none';
      element.style.filter = 'none';
      return undefined;
    }

    element.style.opacity = '0';
    element.style.transform = `translate(${x}px, ${distance}px)`;
    element.style.filter = 'blur(5px)';

    let control;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        observer.disconnect();
        control = animate(
          element,
          {
            opacity: [0, 1],
            x: [x, 0],
            y: [distance, 0],
            filter: ['blur(5px)', 'blur(0px)'],
          },
          {
            duration,
            delay,
            easing: [0.22, 1, 0.36, 1],
          }
        );
      },
      { threshold: amount }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      control?.stop?.();
    };
  }, [amount, delay, distance, duration, x]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export default ScrollReveal;
