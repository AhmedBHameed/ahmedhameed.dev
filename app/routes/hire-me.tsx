import { Power4, gsap } from "gsap";
import { useEffect, useRef } from "react";

import ServiceCard from "~/components/ServiceCard/ServiceCard";
import {
  ApiSvg,
  DockerSvg,
  ProjectStructureSvg,
  QuoteSvg,
} from "~/components/SVGs";

export function meta() {
  return [
    { title: "Hire Ahmed Hameed" },
    {
      name: "description",
      content:
        "Full-stack development services covering front-end, back-end, and DevOps.",
    },
  ];
}

export default function HireMe() {
  const projectSvgRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const projectSvgElement = projectSvgRef.current;
    const captionElement = captionRef.current;

    if (!projectSvgElement || !captionElement) {
      return;
    }

    gsap.to(projectSvgElement, {
      x: "-20%",
      opacity: 1,
      duration: 3,
      ease: Power4.easeInOut,
      delay: 0.2,
    });

    gsap.to(captionElement, {
      x: "0%",
      opacity: 1,
      duration: 3,
      ease: Power4.easeInOut,
      delay: 0.5,
    });
  }, []);

  return (
    <section>
      <div className="relative flex flex-col items-center justify-center bg-secondary p-8 lg:px-52 bg-light-bg dark:bg-dark-bg">
        <h4
          className="mb-10 translate-x-[-20%] text-center text-2xl font-[Fredericka_the_Great] text-primary opacity-0 md:text-4xl"
          ref={captionRef}
        >
          Full-Stack developer is your way to go.
        </h4>

        <div className="opacity-0" ref={projectSvgRef}>
          <ProjectStructureSvg className="translate-x-[20%] text-gray-800 dark:text-gray-500 w-100 md:w-180 lg:w-260 [&_path.prefix__cloud]:fill-current" />
        </div>
      </div>

      <div className="w-full p-8">
        <div className="mb-16">
          <h6 className="uppercase font-bold">
            What do I offer as a service? 🤔
          </h6>
        </div>

        <div className="mb-16 flex flex-wrap">
          <ServiceCard
            className="w-full md:w-1/2"
            Icon={ApiSvg}
            paragraph="I build scalable back-end applications to service multiple clients by using modern technologies such as back-end framework like Node.js and databases such as SQL / NoSQL with the best concepts from JWT / RESTfull API / GraphQL / Microservices."
            title="BACK-END 🕸️"
          />

          <ServiceCard
            className="w-full md:w-1/2"
            Icon={ApiSvg}
            paragraph="Coding UX/UI is my responsibility. Client experience comes first when developing interfaces and services. Clean, reusable, and optimized code is my focus. I use the most modern framework such as React.js / Angular.js / Vue.js."
            title="FRONT-END 🖼️"
          />

          <ServiceCard
            className="w-full md:w-1/2"
            Icon={DockerSvg}
            paragraph="I'll help you host your website/web application and set up projects into containers to serve as a service by using Linux / Nginx / Docker / Docker-compose. This will give you more flexibility for feature modification and scalability."
            title="DEV-OPS ⚙️"
          />
        </div>

        <div className="w-full">
          <div className="mb-16">
            <h6 className="uppercase font-bold">Why hiring me ? 🤔</h6>
          </div>

          <ServiceCard
            className="w-full"
            Icon={QuoteSvg}
            title="From the wise words of Steve Jobs, “IT DOESN'T MAKE SENSE TO HIRE SMART PEOPLE AND TELL THEM WHAT TO DO; WE HIRE SMART PEOPLE SO THEY CAN TELL US WHAT TO DO.”"
          />

          {/* <a
            className="flex w-full items-center justify-center gap-3 bg-subject px-4 py-3 text-reverse uppercase"
            href="mailto:contact@ahmedhameed.dev"
          >
            <EmailSvg className="text-reverse" />
            Hire me
          </a> */}
        </div>
      </div>
    </section>
  );
}
