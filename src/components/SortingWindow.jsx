import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { sortingAlgorithmsList } from "../constants";
import selectionSort from "../algorithms/selectionSort";
import bubbleSort from "../algorithms/bubbleSort";
import insertionSort from "../algorithms/insertionSort";
import mergeSort from "../algorithms/mergeSort";
import quickSort from "../algorithms/quickSort";

const SortingWindow = ({
  arraySize,
  currArray,
  setCurrArray,
  isSortingStarted,
  setIsSortingStarted,
  sortingAlgo,
  sortingSpeed,
}) => {
  const sortingWindowRef = useRef();
  const [activeBars, setActiveBars] = useState([]);
  const [isArraySorted, setIsArraySorted] = useState(false);

  const delay = useCallback(
    (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
    []
  );

  const sortingAlgorithms = useMemo(() => {
    const algorithms = {
      selectionSort,
      bubbleSort,
      insertionSort,
      mergeSort,
      quickSort,
    };

    return algorithms;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currArray]);

  const handleStartSorting = useCallback(async () => {
    if (isSortingStarted) {
      const selectedAlgo = sortingAlgorithmsList.find(
        (algo) => algo.id === sortingAlgo
      );
      if (selectedAlgo) {
        const arr = [...currArray];
        await sortingAlgorithms[selectedAlgo.id]?.(
          arr,
          setCurrArray,
          setActiveBars,
          setIsArraySorted,
          delay,
          sortingSpeed
        );
      }
      setIsSortingStarted(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSortingStarted, sortingAlgo]);

  useEffect(() => {
    if (isSortingStarted) {
      handleStartSorting();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSortingStarted]);

  useEffect(() => {
    setIsArraySorted(false);
  }, [currArray]);

  const getBarWidth = useMemo(() => {
    if (!sortingWindowRef.current) return 10; // Default width
    const containerWidth =
      sortingWindowRef.current.getBoundingClientRect().width;
    return Math.max(5, Math.min(20, containerWidth / (arraySize * 5)));
  }, [arraySize]);

  const renderBars = useMemo(() => {
    return currArray.map((ele, idx) => {
      const isActiveIdx = activeBars.includes(idx);

      return (
        <Tooltip key={idx}>
          <TooltipTrigger>
            <div
              className={cn(
                "transition-all duration-200",
                isActiveIdx ? "bg-purple-600" : "bg-amber-600",
                isArraySorted && "transition-colors duration-600 bg-green-600"
              )}
              style={{
                height: `${ele}px`,
                width: `${getBarWidth}px`,
              }}
            />
          </TooltipTrigger>
          <TooltipContent>{ele}</TooltipContent>
        </Tooltip>
      );
    });
  }, [currArray, activeBars, isArraySorted, getBarWidth]);

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
        <TooltipProvider>{renderBars}</TooltipProvider>
      </div>
    </section>
  );
};

export default SortingWindow;
