import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

const useMousePosition = () => {
  const [isMenuOpen, toggleMenu] = useState(false);
  const burgerButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (burgerButtonRef.current) {
      gsap
        .to(burgerButtonRef.current, {
          x: isMenuOpen ? `0.875rem` : `1.65rem`,
          duration: 0.5,
        })
        .delay(0.7);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    toggleMenu(false);
    function updateMousePosition(event: any) {
      if (burgerButtonRef.current) {
        gsap.to(burgerButtonRef.current, {
          y: event.y - 16,
          duration: 0.5,
        });
      }
    }

    window.addEventListener("mousemove", updateMousePosition, false);

    return () =>
      window.removeEventListener("mousemove", updateMousePosition, false);
  }, []);

  return { burgerButtonRef, isMenuOpen, toggleMenu };
};

export default useMousePosition;
