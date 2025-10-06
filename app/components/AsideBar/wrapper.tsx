import { gsap } from "gsap";
import CSSPlugin from "gsap/dist/CSSRulePlugin";

import type { JSX } from "react";
import { clsx } from "../../util/clsx";
import DetectOutsideClick from "../DetectOutsideClick/DetectOutsideClick";
// import Brand from "../shared/Brand";
import { Link } from "react-router";
import Burger from "./Burger";
import useMousePosition from "./hooks/mousePosition";

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);

interface AsideBarProps {
  asideNavigationComponent: JSX.Element;
  dir?: "rtl" | "ltr";
  children: React.ReactNode;
}

const AsideBar: React.FC<AsideBarProps> = ({ children, dir }) => {
  const asideBarAnimationClass = "-translate-x-72";
  const contentAnimationClass = "translate-x-72";
  const { burgerButtonRef, isMenuOpen, toggleMenu } = useMousePosition();

  return (
    <div className="min-h-full">
      <DetectOutsideClick onOutsideClick={() => toggleMenu(() => false)}>
        <div
          className={clsx([
            "fixed top-0 flex bg-primary transition-transform transform duration-700 left-0",
            isMenuOpen ? "translate-x-0" : asideBarAnimationClass,
          ])}
        >
          <div className="w-72 bg-aside flex flex-col flex-shrink-0 pr-3 h-screen">
            <div className="flex-1 flex flex-col pt-5 pb-4">
              {/* <Brand /> */}
              <ul>
                <li>
                  <Link to="/about-me">About me</Link>
                </li>
              </ul>
            </div>

            {/* <Footer /> */}
          </div>

          <Burger
            onClick={() => toggleMenu(!isMenuOpen)}
            ref={burgerButtonRef}
          />
        </div>
      </DetectOutsideClick>

      <div
        className={`transition-transform transform duration-700 bg-primary min-h-screen ${
          isMenuOpen ? contentAnimationClass : "translate-x-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default AsideBar;
