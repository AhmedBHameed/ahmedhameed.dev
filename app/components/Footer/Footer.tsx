import { clsx } from "~/util/clsx";
import { EmailSvg, GithubSvg, HeartSvg, LinkedinSvg } from "../SVGs";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className={clsx(["flex flex-col flex-shrink-0 mb-12", className])}>
      <div className="flex flex-col text-center content-center flex-1 p-4 text-primary text-sm">
        <p className="mb-2">
          <span className="text-secondary">
            2025 © ahmedhameed.dev
            <br />
            Made with
          </span>
          <HeartSvg className="inline h-5 text-red-500" />
          <span className="text-secondary">by </span>
          <span className="text-subject font-bold">Ahmed HAMEED</span>
        </p>
        <div className="flex justify-center text-secondary">
          <a
            aria-label="linkedin link"
            className="cursor-pointer p-1"
            href="https://www.linkedin.com/in/ahmed-hameed-185b3612b/"
            rel="noreferrer"
            tabIndex={0}
            target="_blank"
          >
            <LinkedinSvg className="h-5 w-5" />
          </a>

          <a
            aria-label="github link"
            className="cursor-pointer p-1"
            href="https://github.com/AhmedBHameed"
            rel="noreferrer"
            tabIndex={0}
            target="_blank"
          >
            <GithubSvg className="h-5 w-5" />
          </a>

          <a
            aria-label="email link"
            className="cursor-pointer p-1"
            href="mailto:contact@ahmedhameed.dev"
            rel="noreferrer"
            tabIndex={0}
            target="_blank"
          >
            <EmailSvg className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
