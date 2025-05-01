import { useState } from "react";
import BackgroundImage from "./components/BackgroundImage";
import Hero from "./components/Hero";
import Card from "./components/Card";
import dataJson from "../data.json";
import Nav from "./components/Nav";
import { years } from "./model";

function App() {
  const data = Object.entries(dataJson);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [curYearIndex, setCurYearIndex] = useState<number>(0);
  const [animateKey, setAnimateKey] = useState<number>(0);

  const handleViewChange = ({ inView }: { inView: boolean }): void => {
    setIsVisible(inView);
  };

  const handleYearChange = (yearIndex: number): void => {
    setCurYearIndex(yearIndex);
    setAnimateKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-7 pb-10 mb-10">
      <BackgroundImage visible={isVisible} />
      <Hero handleViewChange={handleViewChange} />
      <Nav
        handleYearChange={handleYearChange}
        isVisible={isVisible}
        curYearIndex={curYearIndex}
      />
      <div className="w-full m-10">
        <div className="flex flex-col items-center">
          {data
            .filter(
              (
                item: [
                  string,
                  {
                    Date: string;
                    Chinese: string;
                    English: string;
                    photos: string[];
                  }
                ]
              ) => item[1].Date.slice(3, 6) === years[curYearIndex]
            )
            .map(
              (
                item: [
                  string,
                  {
                    Date: string;
                    Chinese: string;
                    English: string;
                    photos: string[];
                  }
                ],
                index: number
              ) => (
                <Card
                  key={`${index}-${animateKey}`}
                  index={index}
                  date={item[1].Date}
                  chin={item[1].Chinese}
                  eng={item[1].English}
                  photos={item[1].photos}
                />
              )
            )}
        </div>
      </div>
    </div>
  );
}

export default App;
