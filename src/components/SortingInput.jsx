import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sortingAlgorithmsList } from "../constants";

const SortingInput = ({
  arraySize,
  setArraySize,
  resetArray,
  setSortingAlgo,
  sortingAlgo,
  isSortingStarted,
  setIsSortingStarted,
  sortingSpeed,
  setSortingSpeed,
}) => {
  const [minVal] = useState(10);
  const [maxVal] = useState(100);
  const [stepSize] = useState(5);

  const [ssMinVal] = useState(100);
  const [ssMaxVal] = useState(500);
  const [ssStepSize] = useState(50);

  const handleResetArray = () => {
    return resetArray(5, 800);
  };

  const handleArraySorting = () => {
    setIsSortingStarted(true);
  };

  return (
    <section className="w-md h-full rounded-md border border-[#ffa600]-200 bg-[#003f5c] flex flex-col">
      <div className="flex flex-col justify-center m-10">
        <h4 className="text-lg font-semibold mb-2">Array Size: {arraySize}</h4>
        <div className="flex flex-row w-full justify-center">
          <span className="mr-2">{minVal}</span>

          <Slider
            defaultValue={[15]}
            min={minVal}
            max={maxVal}
            step={stepSize}
            className="w-full dark"
            onValueChange={(val) => {
              setArraySize(val[0]);
            }}
            disabled={isSortingStarted}
          />
          <span className="ml-2">{maxVal}</span>
        </div>
      </div>

      <Button
        className="ml-10 mr-10 -mt-5 hover:cursor-pointer"
        onClick={handleResetArray}
        variant="secondary"
        disabled={isSortingStarted}
      >
        Reset Array
      </Button>

      <div className="m-10 mt-15">
        <h4 className="text-lg font-semibold mb-2">Sorting Algorithm</h4>
        <Select onValueChange={(val) => setSortingAlgo(val)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a Sorting Algorithm" />
          </SelectTrigger>
          <SelectContent>
            {sortingAlgorithmsList.map((ele, idx) => (
              <SelectItem value={ele.id} key={idx}>
                {ele.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button
        className="ml-10 mr-10 -mt-5 hover:cursor-pointer"
        onClick={handleArraySorting}
        variant="secondary"
        disabled={!sortingAlgo || isSortingStarted}
      >
        Sort Array
      </Button>

      <div className="flex flex-col justify-center m-10">
        <h4 className="text-lg font-semibold mb-2">
          Sorting Speed: {sortingSpeed}ms
        </h4>
        <div className="flex flex-row w-full justify-center">
          <span className="mr-2">{ssMinVal}</span>

          <Slider
            defaultValue={[300]}
            min={ssMinVal}
            max={ssMaxVal}
            step={ssStepSize}
            className="w-full dark"
            onValueChange={(val) => {
              setSortingSpeed(val[0]);
            }}
            disabled={isSortingStarted}
          />
          <span className="ml-2">{ssMaxVal}</span>
        </div>
      </div>
    </section>
  );
};

export default SortingInput;
