import { useEffect, type RefObject } from "react";

export const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  onOutsideClick: () => void
) => {
  useEffect(() => {
    const element = ref.current;
    function handleClickOutside(event: MouseEvent) {
      if (element && !element.contains(event.target as Node)) {
        onOutsideClick();
      }
    }

    if (element) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () =>
      element && document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, onOutsideClick]);
};
