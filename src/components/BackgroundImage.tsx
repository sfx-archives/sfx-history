import { JSX } from "react";

interface Props {
  visible: boolean;
}

const BackgroundImage = ({ visible }: Props): JSX.Element => {
  return (
    <div className="relative w-full h-full -z-10">
      <img
        src="/IMAG5316-400.png"
        className={`fixed bottom-1/20 left-1/2 transform -translate-x-1/2 object-cover opacity-50 object-contain transition-all duration-[1000ms] ease-in-out ${
          visible ? "h-2/3" : "h-5/6"
        }`}
        alt="background"
      />
    </div>
  );
};

export default BackgroundImage;
