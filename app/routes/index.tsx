import { Power4, gsap } from "gsap";
import CSSPlugin from "gsap/dist/CSSRulePlugin";
import EasePack from "gsap/dist/EasePack";
import { useEffect, useRef } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
  useReactCompareSliderRef,
} from "react-compare-slider";
import ServiceCard from "~/components/ServiceCard/ServiceCard";
import {
  CodeSvg,
  ConsultingSvg,
  FlourishSvg,
  OptimizationSvg,
  PlanningSvg,
} from "~/components/SVGs";
import type { Route } from "./+types/home";

gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(EasePack);

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  // const mySvgRef = useRef<HTMLObjectElement | any>(null);
  const captionEl = useRef<HTMLDivElement>(null);
  const slidePos = useRef({ position: 10 });

  // const {goToContactMe} = useNavigateToContactMe();

  const reactCompareSliderRef = useReactCompareSliderRef();

  useEffect(() => {
    function updateMousePosition(event: MouseEvent) {
      const percentage = 100 - (event.pageX / window.innerWidth) * 100;

      gsap.to(slidePos.current, {
        position: percentage,
        duration: 2,
        ease: Power4.easeOut,
        onUpdate: () => {
          reactCompareSliderRef.current.setPosition(
            Math.round(slidePos.current.position)
          );
        },
      });
    }

    window.addEventListener("mousemove", updateMousePosition, false);

    return () =>
      window.removeEventListener("mousemove", updateMousePosition, false);
  }, []);

  useEffect(() => {
    const mySvgElement = reactCompareSliderRef.current;
    if (mySvgElement) {
      gsap.to(mySvgElement, {
        x: "15%",
        opacity: 1,
        duration: 3,
        ease: Power4.easeInOut,
      });

      gsap.to(captionEl.current, {
        x: "-50%",
        opacity: 1,
        duration: 3,
        ease: Power4.easeInOut,
      });
    }
  }, []);

  return (
    <section>
      <div className="relative flex justify-center bg-[#bdbdbd]">
        <FlourishSvg className="text-[#757575] opacity-20 absolute top-2 left-2 w-40 h-40 md:w-52 md:h-52 lg:w-96 lg:h-96" />
        <FlourishSvg className="text-[#757575] opacity-20 absolute transform rotate-180  bottom-2 right-2 w-40 h-40 md:w-52 md:h-52 lg:w-96 lg:h-96" />
        {/* <div
          className="w-[300px] opacity-0 invisible md:visible lg:ml-20 xl:ml-48 2xl:ml-80 pt-16 px-7"
          ref={mySvgRef}
        >
          <AhmedSvg />
        </div> */}
        <div className="pt-10 w-[400px]">
          <ReactCompareSlider
            position={42}
            ref={reactCompareSliderRef}
            transition="1s ease-out"
            handle={
              <ReactCompareSliderHandle
                linesStyle={{
                  display: "none",
                }}
                buttonStyle={{
                  display: "none",
                }}
              />
            }
            itemOne={
              <ReactCompareSliderImage src="/normal_ahmed.svg" alt="before" />
            }
            itemTwo={
              <ReactCompareSliderImage src="/normal_ahmed.png" alt="after" />
            }
          />
        </div>

        <div
          className="absolute bottom-0 left-1/2 mb-2 opacity-0 backdrop-blur-2xl px-10 rounded-2xl text-white transform"
          ref={captionEl}
        >
          <h4 className="font-[Fredericka_the_Great] text-2xl sm:text-2xl md:text-3xl text-center">
            Hi, my name is
          </h4>
          <h3 className="font-[Fredericka_the_Great] text-4xl sm:text-5xl md:text-5xl text-center whitespace-nowrap">
            Ahmed HAMEED
          </h3>
        </div>
      </div>

      <div className="p-8 w-full">
        <p className="mb-16">
          <h6 className="uppercase font-bold">Who am I 🤔</h6>
          <p className="md:text-lg text-[#757575]">
            {`I'm a software engineer with experience in web development. Coding
            is my passion. I love training/coaching web technologies and
            dreaming about building codding school which working on slowly.
            Arabic food is my style and regarding to social status, (Searching
            for soulmate ...).`}
          </p>
        </p>

        <div className="mb-16 flex flex-wrap">
          <ServiceCard
            className="w-full md:w-1/2"
            Icon={CodeSvg}
            paragraph="Converting your design into a web page. Coding is our duty by using the most modern technologies."
            title="IMPLEMENTATION ⚒️"
          />

          <ServiceCard
            className="w-full md:w-1/2"
            Icon={PlanningSvg}
            paragraph="All projects require in-depth preparation before coding can begin. By utilizing my skill set, we can make your project idea become a reality."
            title="PLANNING 🔭"
          />

          <ServiceCard
            className="w-full md:w-1/2"
            Icon={OptimizationSvg}
            paragraph="Optimization requires a deep understanding of use. With my experience, I can confidently lead you into a faster and more reliable performance."
            title="OPTIMIZATION ⚖️"
          />

          <ServiceCard
            className="w-full md:w-1/2"
            Icon={ConsultingSvg}
            paragraph="With more than 5 years of experience, consulting and training are some of my services which focus on web technologies."
            title="CONSULTING AND TRAINING 👩‍💻"
          />
        </div>

        <div className="mb-16">
          <h6 className="uppercase font-bold">Contact me ⌨️</h6>

          {/* <BaseButton
            className="uppercase w-full bg-subject text-reverse justify-center"
            Icon={<EmailSvg className="text-reverse" />}
            onClick={goToContactMe}
            testId="contact-me-action-button"
          >
            Contact Me
          </BaseButton> */}
        </div>
      </div>
    </section>
  );
}
