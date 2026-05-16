import useScrollAnimation from "./useScrollAnimation";

/**
 * Animate — wraps any content with a scroll-triggered animation.
 *
 * Props:
 *   animation  - "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade-in" | "zoom-in"
 *   delay      - Tailwind delay class, e.g. "delay-100", "delay-200", "delay-300"
 *   duration   - Tailwind duration class, e.g. "duration-500", "duration-700" (default "duration-700")
 *   className  - extra classes for the wrapper div
 *   threshold  - IntersectionObserver threshold (default 0.12)
 *   as         - HTML tag to render as (default "div")
 */
export default function Animate({
  children,
  animation = "fade-up",
  delay = "",
  duration = "duration-700",
  className = "",
  threshold = 0.12,
  as: Tag = "div",
}) {
  const [ref, isVisible] = useScrollAnimation(threshold);

  // Base: all animated elements start invisible and transform
  // On visible: opacity-100 and no transform
  const baseClass = "transition-all ease-out will-change-transform";

  const hiddenMap = {
    "fade-up": "opacity-0 translate-y-10",
    "fade-down": "opacity-0 -translate-y-10",
    "fade-left": "opacity-0 translate-x-10",
    "fade-right": "opacity-0 -translate-x-10",
    "fade-in": "opacity-0",
    "zoom-in": "opacity-0 scale-95",
  };

  const visibleClass = "opacity-100 translate-y-0 translate-x-0 scale-100";

  const animClass = isVisible
    ? `${visibleClass} ${duration} ${delay}`
    : `${hiddenMap[animation] ?? hiddenMap["fade-up"]} ${duration} ${delay}`;

  return (
    <Tag ref={ref} className={`${baseClass} ${animClass} ${className}`}>
      {children}
    </Tag>
  );
}
