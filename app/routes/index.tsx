import { Power4, gsap } from "gsap";
import CSSPlugin from "gsap/dist/CSSRulePlugin";
import EasePack from "gsap/dist/EasePack";
import { useEffect, useRef } from "react";
import * as ReactCompareSliderComponents from "react-compare-slider/components";
import { useReactCompareSlider } from "react-compare-slider/hooks";
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
    { title: "Hey! My name is Ahmed Hameed" },
    {
      name: "description",
      content: "Welcome to my portfolio! I am a passionate developer.",
    },
  ];
}

export default function Home() {
  const captionEl = useRef<HTMLDivElement>(null);
  const sliderEl = useRef<HTMLDivElement>(null);
  const slidePos = useRef({ position: 42 });

  const sliderProps = useReactCompareSlider({
    defaultPosition: 42,
    transition: "none",
  });

  useEffect(() => {
    const animatePosition = gsap.quickTo(slidePos.current, "position", {
      duration: 0.6,
      ease: Power4.easeOut,
      onUpdate: () => {
        sliderProps.setPosition(slidePos.current.position);
      },
    });

    function updateMousePosition(event: MouseEvent) {
      const percentage = 100 - (event.pageX / window.innerWidth) * 100;
      animatePosition(percentage);
    }

    window.addEventListener("mousemove", updateMousePosition, false);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition, false);
      gsap.killTweensOf(slidePos.current);
    };
  }, [sliderProps.setPosition]);

  useEffect(() => {
    const mySvgElement = sliderEl.current;
    if (mySvgElement) {
      gsap.to(sliderEl.current, {
        x: "0%",
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
      <div className="relative flex justify-center bg-light-bg dark:bg-dark-bg">
        <FlourishSvg className="opacity-50 absolute top-2 left-2 w-40 h-40 md:w-52 md:h-52 lg:w-96 lg:h-96" />
        <FlourishSvg className="opacity-50 absolute transform rotate-180  bottom-2 right-2 w-40 h-40 md:w-52 md:h-52 lg:w-96 lg:h-96" />

        {/* My image and my image vector shape in a slider with mouse move animation */}
        <div className="pt-10 w-100 -translate-x-[15%]" ref={sliderEl}>
          <ReactCompareSliderComponents.Provider {...sliderProps}>
            <ReactCompareSliderComponents.Root>
              <ReactCompareSliderComponents.Item item="itemOne">
                <ReactCompareSliderComponents.Image
                  src="/normal_ahmed.svg"
                  alt="before"
                />
              </ReactCompareSliderComponents.Item>
              <ReactCompareSliderComponents.Item item="itemTwo">
                <ReactCompareSliderComponents.Image
                  src="/normal_ahmed.png"
                  alt="after"
                />
              </ReactCompareSliderComponents.Item>
              <ReactCompareSliderComponents.HandleRoot>
                <ReactCompareSliderComponents.Handle
                  linesStyle={{
                    display: "none",
                  }}
                  buttonStyle={{
                    display: "none",
                  }}
                />
              </ReactCompareSliderComponents.HandleRoot>
            </ReactCompareSliderComponents.Root>
          </ReactCompareSliderComponents.Provider>
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
        <div className="mb-16">
          <h6 className="uppercase font-bold">Welcome!</h6>
          <p className="md:text-lg text-[#757575]">
            I'm a software engineer, a dedicated professional focused on
            building impactful work at the intersection of creativity, strategy,
            and execution with deep experience. My work is driven by a
            commitment to clarity, innovation, and delivering meaningful
            results.
          </p>
        </div>

        <div className="mb-16">
          <h6 className="uppercase font-bold">About me!</h6>
          <p className="md:text-lg text-[#757575]">
            With a background of more than 10 yeas in software, I bring
            experience in collaborative, fast-paced environments where ideas
            turn into real-world outcomes. I enjoy working on projects that
            challenge conventional thinking and push creative and technical
            boundaries. My approach combines structured problem-solving with a
            strong attention to detail, ensuring that every project is not only
            visually compelling but also strategically sound.
          </p>
        </div>

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
            paragraph="With a huge experience, consulting and training are some of my services which focus on web technologies."
            title="CONSULTING AND TRAINING 👩‍💻"
          />
        </div>

        {/* <div className="mb-16">
          <h6 className="uppercase font-bold">Contact me ⌨️</h6> */}

        {/* <BaseButton
            className="uppercase w-full bg-subject text-reverse justify-center"
            Icon={<EmailSvg className="text-reverse" />}
            onClick={goToContactMe}
            testId="contact-me-action-button"
          >
            Contact Me
          </BaseButton> */}
        {/* </div> */}
      </div>
    </section>
  );
}
