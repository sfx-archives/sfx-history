import { years } from "@/model";

interface Props {
  handleYearChange: (yearIndex: number) => void;
  isVisible: boolean;
  curYearIndex: number;
}

const Nav = ({ handleYearChange, isVisible, curYearIndex }: Props) => {
  const handleNext = (): void => {
    handleYearChange((curYearIndex + 1) % years.length);
  };
  const handlePrev = (): void => {
    const n = curYearIndex - 1;
    handleYearChange(n < 0 ? years.length - 1 : n);
  };

  return (
    <div className="relative w-screen h-full mt-10 mb-10 md:mb-0">
      <div
        className={`w-5/6 md:w-2/3 cursor-pointer p-1 rounded-full shadow-lg text-gray-100 font-merri ${
          !isVisible
            ? "fixed top-10 left-1/2 transform -translate-x-1/2 z-5 bg-neutral-900/40"
            : "absolute top-0 left-1/2 transform -translate-x-1/2 z-5 bg-neutral-900/20"
        }`}
      >
        <div className="w-full flex justify-evenly">
          <span
            className="hidden sm:flex items-center sm:text-md md:text-lg p-1 px-2 hover:text-white hover:bg-red-500/30 hover:rounded-md"
            onClick={handlePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="w-6 h-5 text-gray-100 fill-current inline-block"
            >
              <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
            </svg>
            Previous
          </span>
          {years.map((year: string, index: number) => (
            <span
              key={index}
              onClick={() => {
                handleYearChange(index);
              }}
              className="sm:text-md md:text-lg p-1 px-2 hover:text-white hover:bg-red-500/30 hover:rounded-md"
            >
              {`${year}0`}
            </span>
          ))}
          <span
            className="hidden sm:flex items-center sm:text-md md:text-lg p-1 px-2 hover:text-white hover:bg-red-500/30 hover:rounded-md"
            onClick={handleNext}
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="w-6 h-5 text-gray-100 fill-current inline-block"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
