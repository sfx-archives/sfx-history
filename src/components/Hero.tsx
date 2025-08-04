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
      <div className="flex items-center justify-center flex-col m-10 mb-0 mt-0 text-white ">
        <div className="flex flex-row flex-wrap justify-center gap-4 m-5">
          <img
            src="/50th_front_cover.jpeg"
            alt="50th cover"
            className="w-16 h-20"
          />
          <img
            src="/60th_front_cover.jpeg"
            alt="60th cover"
            className="w-16 h-20"
          />
          <img
            src="/70th_front_cover.jpeg"
            alt="70th cover"
            className="w-16 h-20"
          />
          <img
            src="/75th_front_cover.jpeg"
            alt="75th cover"
            className="w-16 h-20"
          />
          <img
            src="/80th_front_cover.jpeg"
            alt="80th cover"
            className="w-16 h-20"
          />
          <img
            src="/85th_front_cover.jpeg"
            alt="85th cover"
            className="w-16 h-20"
          />
          <img
            src="/90th_front_cover.jpeg"
            alt="90th cover"
            className="w-16 h-20 hidden sm:block"
          />
        </div>
        <a
          className="text-7xl font-tage text-center hover:cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
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
