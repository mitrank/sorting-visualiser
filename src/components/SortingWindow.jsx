import React, { useRef } from "react";
import { cn } from "@/lib/utils";

const SortingWindow = ({ arraySize, currArray }) => {
  const sortingWindowRef = useRef();

  const getBarWidth = () => {
    const containerWidth =
      sortingWindowRef.current.getBoundingClientRect().width;
    return Math.max(5, Math.min(20, containerWidth / (arraySize * 5)));
  };

  return (
    <section
      ref={sortingWindowRef}
      className="w-full h-full border border-blue-200 flex flex-col justify-center rounded-md"
    >
      <div
        className={cn(
          "flex flex-row justify-center items-end gap-4",
          arraySize > 50 && "gap-2"
        )}
      >
        {currArray.map((ele, idx) => {
          const currWidth = getBarWidth();

          return (
            <div
              key={idx}
              className="bg-amber-600"
              style={{
                height: `${ele}px`,
                width: `${currWidth}px`,
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SortingWindow;
