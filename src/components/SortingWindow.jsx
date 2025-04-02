import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { sortingAlgorithmsList } from "../constants";

const SortingWindow = ({
  arraySize,
  currArray,
  isSortingStarted,
  setIsSortingStarted,
  sortingAlgo,
}) => {
  const sortingWindowRef = useRef();

  const sortingAlgorithms = useMemo(
    () => ({
      selectionSort: () => {
        console.log("selectionSort algo starting here");
      },
      mergeSort: () => {
        console.log("mergeSort algo starting here");
      },
      bubbleSort: () => {
        console.log("bubbleSort algo starting here");
      },
      quickSort: () => {
        console.log("quickSort algo starting here");
      },
      insertionSort: () => {
        console.log("insertionSort algo starting here");
      },
    }),
    []
  );

  const handleStartSorting = useCallback(() => {
    if (isSortingStarted) {
      sortingAlgorithmsList.forEach((algo) => {
        if (sortingAlgo === algo.id) {
          sortingAlgorithms[algo.id]?.();
        }
      });
    }
    setIsSortingStarted(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortingAlgo, isSortingStarted, sortingAlgorithms]);

  useEffect(() => {
    isSortingStarted && handleStartSorting();
  }, [handleStartSorting, isSortingStarted, sortingAlgo]);

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
        <TooltipProvider>
          {currArray.map((ele, idx) => {
            const currWidth = getBarWidth();

            return (
              <Tooltip key={idx}>
                <TooltipTrigger>
                  <div
                    key={idx}
                    className="bg-amber-600"
                    style={{
                      height: `${ele}px`,
                      width: `${currWidth}px`,
                    }}
                  />
                </TooltipTrigger>
                <TooltipContent>{ele}</TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </div>
    </section>
  );
};

export default SortingWindow;
