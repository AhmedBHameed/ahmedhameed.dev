import KakieeLogo from "./KakieLogo";

interface BrandProps {
  logoClasses?: string;
  textClasses?: string;
}

const Brand: React.FC<BrandProps> = ({ logoClasses, textClasses }) => {
  return (
    <div className="flex flex-col items-center">
      <KakieeLogo className={logoClasses || "h-28 lg:h-32"} />
      <h1
        className={textClasses || "text-2xl lg:text-3xl text-primary font-bold"}
      >
        Ahmed HAMEED
      </h1>
    </div>
  );
};

export default Brand;
