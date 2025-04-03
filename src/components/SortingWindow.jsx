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

const SortingWindow = ({
  arraySize,
  currArray,
  setCurrArray,
  isSortingStarted,
  setIsSortingStarted,
  sortingAlgo,
}) => {
  const sortingWindowRef = useRef();
  const [activeBars, setActiveBars] = useState([]);
  const [isArraySorted, setIsArraySorted] = useState(false);

  const delay = useCallback(
    (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
    []
  );

  const sortingAlgorithms = useMemo(() => {
    const arr = [...currArray];

    const algorithms = {
      selectionSort: async () => {
        for (let i = 0; i < arr.length - 1; i++) {
          let mini = i;

          for (let j = i + 1; j < arr.length; j++) {
            if (arr[mini] > arr[j]) {
              mini = j;
            }
          }

          if (i !== mini) {
            [arr[i], arr[mini]] = [arr[mini], arr[i]];

            setCurrArray([...arr]);
            setActiveBars([i, mini]);
            await delay(200);
          }
        }

        setActiveBars([]);
        setIsArraySorted(true);
      },

      mergeSort: () => console.log("mergeSort algo starting here"),

      bubbleSort: async () => {
        for (let i = arr.length - 1; i >= 0; i--) {
          let didSwap = 0;

          for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

              setCurrArray([...arr]);
              setActiveBars([j, j + 1]);
              await delay(200);

              didSwap = 1;
            }
          }

          if (didSwap == 0) break;
        }

        setActiveBars([]);
        setIsArraySorted(true);
      },

      quickSort: () => console.log("quickSort algo starting here"),

      insertionSort: async () => {
        for (let i = 0; i < arr.length; i++) {
          let j = i;

          while (j > 0 && arr[j - 1] > arr[j]) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];

            setCurrArray([...arr]);
            setActiveBars([j, j - 1]);
            await delay(200);

            j--;
          }
        }

        setActiveBars([]);
        setIsArraySorted(true);
      },
    };

    return algorithms;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currArray]);

  const handleStartSorting = useCallback(() => {
    if (isSortingStarted) {
      const selectedAlgo = sortingAlgorithmsList.find(
        (algo) => algo.id === sortingAlgo
      );
      if (selectedAlgo) {
        sortingAlgorithms[selectedAlgo.id]?.();
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
