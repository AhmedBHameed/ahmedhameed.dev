import { gsap } from "gsap";
import CSSPlugin from "gsap/dist/CSSRulePlugin";
import { Link, Outlet } from "react-router";
import Burger from "~/components/AsideBar/Burger";
import useMousePosition from "~/components/AsideBar/hooks/mousePosition";
import DetectOutsideClick from "~/components/DetectOutsideClick/DetectOutsideClick";
import Footer from "~/components/Footer/Footer";
import Brand from "~/components/shared/Brand";
import { clsx } from "~/util/clsx";

gsap.registerPlugin(CSSPlugin);

interface AsideBarProps {}

const Wrapper: React.FC<AsideBarProps> = ({}) => {
  const { burgerButtonRef, isMenuOpen, toggleMenu } = useMousePosition();

  const className =
    "relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[var(--color-text-subject)] after:scale-x-0 after:transition-transform after:duration-500 hover:after:scale-x-100 [&.active]:after:scale-x-100";

  return (
    <div
      className={clsx([
        "fixed -right-72 transition-transform transform duration-700 min-h-screen w-full",
        isMenuOpen ? "translate-x-0" : "-translate-x-72",
      ])}
    >
      <DetectOutsideClick onOutsideClick={() => toggleMenu(() => false)}>
        <div className="fixed z-50 top-0 -left-72 w-72 h-full flex items-center justify-center">
          <nav
            aria-label="Main navigation"
            className="bg-[#e0e0e0] text-center flex-1 px-2 py-0.5 text-md tracking-widest uppercase relative font-medium h-full flex flex-col justify-between"
          >
            <div className="pt-44">
              <Brand />
              <ul>
                <li className="my-2">
                  <Link to="/about-me" className={className}>
                    About me
                  </Link>
                </li>
                <li className="my-2">
                  <Link to="/about-me" className={className}>
                    About me
                  </Link>
                </li>
                <li className="my-2">
                  <Link to="/about-me" className={className}>
                    About me
                  </Link>
                </li>
                <li className="my-2">
                  <Link to="/about-me" className={className}>
                    About me
                  </Link>
                </li>
              </ul>
            </div>

            <Footer />
          </nav>

          <Burger
            onClick={() => toggleMenu(!isMenuOpen)}
            ref={burgerButtonRef}
          />
        </div>
      </DetectOutsideClick>

      <div className="max-h-screen w-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );

  //   return (
  //     <>
  //       <DetectOutsideClick onOutsideClick={() => toggleMenu(() => false)}>
  //         <div
  //           className={clsx([
  //             "fixed top-0 z-50 flex transition-transform transform duration-700 left-0 bg-red-500",
  //             isMenuOpen ? "translate-x-0" : "-translate-x-72",
  //           ])}
  //         >
  //           <div className="w-72 bg-aside flex flex-col flex-shrink-0 pr-3 h-screen">
  //             <div className="flex-1 flex flex-col pt-5 pb-4">
  //               {/* <Brand /> */}
  //               <ul>
  //                 <li>
  //                   <Link to="/about-me">About me</Link>
  //                 </li>
  //               </ul>
  //             </div>

  //             {/* <Footer /> */}
  //           </div>

  //           <Burger
  //             onClick={() => toggleMenu(!isMenuOpen)}
  //             ref={burgerButtonRef}
  //           />
  //         </div>
  //       </DetectOutsideClick>

  //       <div
  //         className={`transition-transform transform duration-700 bg-green-500 min-h-screen ${
  //           isMenuOpen ? "translate-x-72" : "translate-x-0"
  //         }`}
  //       >
  //         {children}
  //       </div>
  //     </>
  //   );
};

export default Wrapper;
