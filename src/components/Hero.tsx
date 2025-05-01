import { JSX } from "react";
import { InView } from "react-intersection-observer";

interface Props {
  handleViewChange: ({ inView }: { inView: boolean }) => void;
}

interface OpenSideWindow {
  (url: string): void;
}

const Hero = ({ handleViewChange }: Props): JSX.Element => {
  const openSideWindow: OpenSideWindow = (url) => {
    window.open(url, "sideWindow", "width=400,height=600,left=1000,top=100");
  };

  return (
    <InView onChange={(inView: boolean) => handleViewChange({ inView })}>
      <div className="flex items-center justify-center flex-col m-10 mb-0 pt-17 text-white ">
        <a
          className="text-7xl font-tage text-center hover:text-shadow-lg hover:cursor-point"
          href="#"
          onClick={() => {
            openSideWindow("https://sfx.rcav.org/");
            return false;
          }}
        >
          St Francis Xavier Parish
        </a>
        <span className="text-2xl font-merri italic mt-4 p-1 px-4 rounded-full bg-orange-200/20 animate-expand">
          History
        </span>
      </div>
    </InView>
  );
};

export default Hero;
