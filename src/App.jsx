import { useEffect, useState } from "react";
import Header from "./components/Header";
import SortingInput from "./components/SortingInput";
import SortingWindow from "./components/SortingWindow";

function App() {
  const [arraySize, setArraySize] = useState(10);
  const [currArray, setCurrArray] = useState([]);

  useEffect(() => {
    setCurrArray(resetArray(5, 800));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arraySize]);

  const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const resetArray = (min, max) => {
    const arr = [];
    for (let i = 0; i < arraySize; i++) {
      const randomValue = getRandomValue(min, max);
      arr.push(randomValue);
    }
    setCurrArray(arr);
    return arr;
  };

  return (
    <div className="App">
      <Header />
      <div className="flex gap-2 justify-between w-full h-full">
        <SortingInput
          arraySize={arraySize}
          setArraySize={setArraySize}
          resetArray={resetArray}
        />
        <SortingWindow
          arraySize={arraySize}
          resetArray={resetArray}
          currArray={currArray}
        />
      </div>
    </div>
  );
}

export default App;
