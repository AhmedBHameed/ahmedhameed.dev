import { gsap } from "gsap";
import CSSPlugin from "gsap/dist/CSSRulePlugin";
import { Link, Outlet } from "react-router";
import Burger from "~/components/AsideBar/Burger";
import useMousePosition from "~/components/AsideBar/hooks/mousePosition";
import DetectOutsideClick from "~/components/DetectOutsideClick/DetectOutsideClick";
import Footer from "~/components/Footer/Footer";
import KakieeLogo from "~/components/shared/KakieLogo";
import { MoonSvg, SunSvg } from "~/components/SVGs";
import { useThemeSwitcher } from "~/components/ThemeContext/hooks/themeSwitcher";
import { clsx } from "~/util/clsx";

gsap.registerPlugin(CSSPlugin);

interface AsideBarProps {}

const Wrapper: React.FC<AsideBarProps> = ({}) => {
  const { burgerButtonRef, isMenuOpen, toggleMenu } = useMousePosition();
  const { theme, setTheme } = useThemeSwitcher();

  const className =
    "relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-[var(--color-text-subject)] after:scale-x-0 after:transition-transform after:duration-500 hover:after:scale-x-100 [&.active]:after:scale-x-100";

  return (
    <div
      className={clsx([
        "fixed -right-72 transition-transform transform duration-700 min-h-screen w-full text-light-text-primary dark:text-dark-text-primary",
        isMenuOpen ? "translate-x-0" : "-translate-x-72",
      ])}
    >
      <DetectOutsideClick onOutsideClick={() => toggleMenu(() => false)}>
        <div className="fixed z-50 top-0 -left-72 w-72 h-full flex items-center justify-center">
          <nav
            aria-label="Main navigation"
            className="bg-light-sidebar dark:bg-dark-sidebar text-center flex-1 px-2 py-0.5 text-md tracking-widest uppercase relative font-medium h-full flex flex-col justify-between"
          >
            <div className="pt-44">
              <div className="flex flex-col items-center">
                <KakieeLogo className="h-28 lg:h-32" />
                <h1 className="text-2xl lg:text-3xl font-bold">Ahmed HAMEED</h1>
              </div>

              <ul>
                <li className="my-2">
                  <Link to="/" className={className}>
                    Home
                  </Link>
                </li>
                <li className="my-2">
                  <Link to="/portfolio" className={className}>
                    Portfolio
                  </Link>
                </li>
                <li className="my-2">
                  <Link to="/hire-me" className={className}>
                    Hire me
                  </Link>
                </li>
                {/* <li className="my-2">
                  <Link to="/about-me" className={className}>
                    About me
                  </Link>
                </li> */}
                <li className="my-2">
                  <button
                    className="text-5xl cursor-pointer"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    {theme === "dark" ? <SunSvg /> : <MoonSvg />}
                  </button>
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

      <div
        className={clsx([
          "max-h-screen",
          "w-full",
          "overflow-auto",
          "bg-light-surface dark:bg-dark-surface",
        ])}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Wrapper;
