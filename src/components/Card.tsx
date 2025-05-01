import { JSX } from "react";
import { monthNames } from "../model";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CardProps {
  index: number;
  date: string;
  chin: string;
  eng: string;
  photos: string[];
}

const Card = ({ index, date, chin, eng, photos }: CardProps): JSX.Element => {
  const month = monthNames[date.slice(0, 2)];
  console.log(index);
  return (
    <div
      className={`p-4 rounded-lg bg-orange-200/20 w-full m-7 md:m-10 mt-0 md:-mb-15 md:w-2/5 shadow-lg flex flex-col items-center text-center transition-all duration-[500ms] animate-fade-in ease-in-out hover:scale-105 hover:shadow-xl  ${
        index % 2 === 0 ? "md:self-start md:ml-17" : "md:self-end md:mr-17"
      }`}
    >
      <p className="font-merri text-xl font-bold text-white block mb-2">
        {month} {date.slice(3, 7)}
      </p>
      <p>{chin}</p>
      <p>{eng}</p>
      <div className="flex flex-wrap justify-center mt-2">
        {photos.length <= 1 ? (
          photos.map((photo, i) => (
            <img
              key={i}
              src={photo}
              alt={`Photo ${i + 1}`}
              className="w-auto max-h-[200px] m-1 rounded-sm shadow-md"
            />
          ))
        ) : (
          <Carousel>
            <CarouselContent>
              {photos.map((photo, i) => (
                <CarouselItem key={i} className="w-auto max-h-[200px] m-1">
                  <img
                    src={photo}
                    alt={`Photo ${i + 1}`}
                    className="w-auto max-h-[200px] rounded-sm shadow-md"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Card;
