import { useEffect, useRef, useState } from "react";

/**
 * useScrollAnimation
 * Returns a ref to attach to a DOM element and a boolean `isVisible`
 * that becomes true once the element enters the viewport.
 *
 * @param {number} threshold - 0 to 1, how much of the element must be visible (default 0.12)
 * @param {string} rootMargin - IntersectionObserver rootMargin (default "0px 0px -60px 0px")
 */
export default function useScrollAnimation(
  threshold = 0.12,
  rootMargin = "0px 0px -60px 0px",
) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // animate once, then stop observing
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}
