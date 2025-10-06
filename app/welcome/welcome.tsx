import { Power4, gsap } from "gsap";
import { useEffect, useRef } from "react";
// import AhmedhammedNavigation from "../components/AsideBar/AhmedhammedNavigation/AhmedhammedNavigation";
import AsideBar from "../components/AsideBar/wrapper";
import Typography from "../components/Typography/Typography";

// const SvgContainer = styled.div({
//   width: 300,
//   opacity: 0,
// });

// const WhoAmIContainer = styled.div({
//   fontFamily: 'Fredericka the Great',
//   transform: 'translate(0, -50%)',
//   opacity: 0,
// });

export function Welcome() {
  const mySvgRef = useRef<HTMLObjectElement | any>(null);
  const captionEl = useRef<HTMLDivElement>(null);
  // const {goToContactMe} = useNavigateToContactMe();

  useEffect(() => {
    const mySvgElement = mySvgRef.current;
    if (mySvgElement) {
      gsap
        .to(mySvgElement, {
          x: "15%",
          opacity: 1,
          duration: 3,
          ease: Power4.easeInOut,
        })
        .delay(0.2);

      gsap
        .to(captionEl.current, {
          x: "-50%",
          opacity: 1,
          ease: Power4.easeInOut,
        })
        .delay(0.5);
    }
  }, []);

  return (
    <AsideBar asideNavigationComponent={<div />}>
      <div className="p-8 w-full">
        <Typography className="mb-16">
          <h6 className="uppercase font-bold">Who am I 🤔</h6>
          <p className="md:text-lg text-secondary">
            {`I'm a software engineer with experience in web development. Coding
            is my passion. I love training/coaching web technologies and
            dreaming about building codding school which working on slowly.
            Arabic food is my style and regarding to social status, (Searching
            for soulmate ...).`}
          </p>
        </Typography>

        {/* <MetaTags
        articleBy="Ahmed HAMEED"
        articleId="ahmedhameed"
        articleUrl={environment.domain}
        description="I'm a software engineer or digital entrepreneur with experience in web development. Coding is my passion. I love training/coaching
        web technologies and dreaming about building codding school which working on slowly. Arabic food is my style
        and regarding to social status, (Searching for soulmate ...)."
        imageUrl={`${environment.domain}/images/ahmedhameed.png`}
        title="About Ahmed HAMEED"
      >
        <link
          href="https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap"
          rel="stylesheet"
        />
      </MetaTags> */}
        {/* <div className="relative bg-secondary">
        <FlourishSvg className="text-secondary opacity-20 absolute top-2 left-2 w-40 h-40 md:w-52 md:h-52 lg:w-96 lg:h-96" />
        <FlourishSvg className="text-secondary opacity-20 transform rotate-180 absolute bottom-2 right-2 w-40 h-40 md:w-52 md:h-52 lg:w-96 lg:h-96" />
        <div
          className="w-[300px] opacity-0 invisible md:visible lg:ml-20 xl:ml-48 2xl:ml-80 pt-16 px-7"
          ref={mySvgRef}
        >
          <AhmedSvg />
        </div>

        <div
          className="text-primary absolute md:ml-20 lg:ml-16 top-1/2 left-1/2"
          ref={captionEl}
        >
          <h4 className="text-2xl sm:text-2xl md:text-3xl text-center">
            Hi, my name is
          </h4>
          <h3 className="text-4xl sm:text-5xl md:text-5xl text-center whitespace-nowrap">
            Ahmed HAMEED
          </h3>
        </div>
      </div>

      <div className="p-8 w-full">
        <Typography className="mb-16">
          <h6 className="uppercase font-bold">Who am I 🤔</h6>
          <p className="md:text-lg text-secondary">
            {`I'm a software engineer with experience in web development. Coding
            is my passion. I love training/coaching web technologies and
            dreaming about building codding school which working on slowly.
            Arabic food is my style and regarding to social status, (Searching
            for soulmate ...).`}
          </p>
        </Typography>

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
          <Typography className="mb-16">
            <h6 className="uppercase font-bold">Contact me ⌨️</h6>
          </Typography>

          <BaseButton
            className="uppercase w-full bg-subject text-reverse justify-center"
            Icon={<EmailSvg className="text-reverse" />}
            onClick={goToContactMe}
            testId="contact-me-action-button"
          >
            Contact Me
          </BaseButton>
      </div> */}
      </div>
    </AsideBar>
  );
}

const resources = [
  {
    href: "https://reactrouter.com/docs",
    text: "React Router Docs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "https://rmx.as/discord",
    text: "Join Discord",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944L8.71099 16.4904C10.8645 17.0471 13.128 17.0485 15.2821 16.4947C15.6261 17.1826 16.0293 17.8269 16.4892 18.4469L16.805 18.8725L17.3116 18.717C19.3056 18.105 21.1876 17.1751 22.8559 15.9238L23.1224 15.724L23.1528 15.3923C23.5873 10.6524 22.3579 6.53306 19.8947 2.90714L19.7759 2.73227L19.5833 2.64518C18.1437 1.99439 16.6386 1.51826 15.0686 1.25995ZM16.6074 10.7755L16.6074 10.7756C16.5934 11.6409 16.0212 12.1444 15.4783 12.1444C14.9297 12.1444 14.3493 11.6173 14.3493 10.7877C14.3493 9.94885 14.9378 9.41192 15.4783 9.41192C16.0471 9.41192 16.6209 9.93851 16.6074 10.7755ZM8.49373 12.1444C7.94513 12.1444 7.36471 11.6173 7.36471 10.7877C7.36471 9.94885 7.95323 9.41192 8.49373 9.41192C9.06038 9.41192 9.63892 9.93712 9.6417 10.7815C9.62517 11.6239 9.05462 12.1444 8.49373 12.1444Z"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];
