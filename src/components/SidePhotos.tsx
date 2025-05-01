import React, { useEffect, useState } from "react";

const SidePhotos = () => {
  const photos = [
    "src/assets/50th_front_cover.jpeg",
    "src/assets/60th_front_cover.jpeg",
    "src/assets/70th_front_cover.jpeg",
    "src/assets/75th_front_cover.jpeg",
    "src/assets/80th_front_cover.jpeg",
    "src/assets/85th_front_cover.jpeg",
    "src/assets/90th_front_cover.jpeg",
  ];

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % photos.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [photos.length]);

  const visiblePhotos = photos.slice(
    startIndex,
    Math.min(startIndex + 4, photos.length)
  );
  if (visiblePhotos.length < 4) {
    const remainingPhotos = photos.slice(0, 4 - visiblePhotos.length);
    visiblePhotos.push(...remainingPhotos);
  }

  return (
    <div>
      <div className="flex flex-col items-center transition-all duration-1000 ease-in-out">
        {visiblePhotos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            className=" h-auto mb-4 rounded-sm shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default SidePhotos;
