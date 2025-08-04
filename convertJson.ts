import { readFileSync, writeFileSync } from "fs";

const dataJson = JSON.parse(
  readFileSync(
    "./St. Francis Xavier Parish Timeline 1983-2008 (1).json", //this file has been removed - change to any file necessary
    "utf8"
  )
);

interface newItem {
  Date: string;
  English: string;
  Chinese: string;
  photos: string[];
}

interface oldItem {
  Date: number | string;
  English: string;
  Chinese: string;
}

function convertJson() {
  const newData: newItem[] = dataJson.map((item: oldItem) => {
    const date = item.Date.toString();
    const month = date.length >= 6 ? date.slice(4, 6) : "";
    return {
      Date: date.length >= 6 ? month + "-" + date.slice(0, 4) : date,
      English: item.English,
      Chinese: item.Chinese,
      photos: [],
    };
  });

  console.log("Start Write");
  writeFileSync("data2.json", JSON.stringify(newData), {
    flag: "w",
  });
  console.log("End Write");
}

convertJson();
