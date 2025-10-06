import { useRef, type RefObject } from "react";

import { useOutsideClick } from "./hooks/OutsideClickHook";

interface DetectOutsideClickProps {
  onOutsideClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const DetectOutsideClick: React.FC<DetectOutsideClickProps> = ({
  onOutsideClick,
  children,
  className,
}) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  useOutsideClick(divRef as RefObject<HTMLDivElement>, onOutsideClick);

  return (
    <div className={className} ref={divRef}>
      {children}
    </div>
  );
};

export default DetectOutsideClick;
