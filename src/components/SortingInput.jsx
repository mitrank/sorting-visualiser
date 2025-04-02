import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const SortingInput = ({ arraySize, setArraySize, resetArray }) => {
  const [minVal] = useState(10);
  const [maxVal] = useState(100);
  const [stepSize] = useState(1);

  const handleResetArray = () => {
    return resetArray(5, 800);
  };

  return (
    <section className="w-md h-full rounded-md border border-[#ffa600]-200 bg-[#003f5c] flex flex-col space-y-4">
      <div className="flex flex-col justify-center items-center mt-4">
        <h4 className="text-lg font-semibold mb-2">Array Size: {arraySize}</h4>
        <div className="flex flex-row w-full justify-center">
          <span className="mr-2">{minVal}</span>

          <Slider
            defaultValue={[15]}
            min={minVal}
            max={maxVal}
            step={stepSize}
            className="w-[60%] dark"
            onValueChange={(val) => {
              setArraySize(val);
            }}
          />
          <span className="ml-2">{maxVal}</span>
        </div>
      </div>

      <Button
        className="ml-10 mr-10 hover:cursor-pointer"
        onClick={handleResetArray}
      >
        Reset Array
      </Button>
    </section>
  );
};

export default SortingInput;
