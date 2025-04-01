import React from "react";
import { Slider } from "@/components/ui/slider";

const SortingInput = ({ setArraySize }) => {
  return (
    <div className="w-md h-full rounded-md border border-[#ffa600]-200 bg-[#003f5c]">
      <div className="flex flex-col justify-center items-center mt-4">
        <h4 className="text-lg font-semibold mb-2">Array Size</h4>
        <div className="flex flex-row w-full justify-center">
          <span className="mr-2">10</span>

          <Slider
            defaultValue={[50]}
            min={10}
            max={500}
            step={1}
            className="w-[60%] dark"
            onValueChange={(val) => {
              setArraySize(val);
            }}
          />
          <span className="ml-2">500</span>
        </div>
      </div>
    </div>
  );
};

export default SortingInput;
