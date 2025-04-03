import { useEffect, useState } from "react";
import Header from "./components/Header";
import SortingInput from "./components/SortingInput";
import SortingWindow from "./components/SortingWindow";

function App() {
  const [arraySize, setArraySize] = useState(15);
  const [sortingSpeed, setSortingSpeed] = useState(300);
  const [currArray, setCurrArray] = useState([]);
  const [sortingAlgo, setSortingAlgo] = useState(undefined);
  const [isSortingStarted, setIsSortingStarted] = useState(false);

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
          setSortingAlgo={setSortingAlgo}
          sortingAlgo={sortingAlgo}
          isSortingStarted={isSortingStarted}
          setIsSortingStarted={setIsSortingStarted}
          sortingSpeed={sortingSpeed}
          setSortingSpeed={setSortingSpeed}
        />
        <SortingWindow
          arraySize={arraySize}
          currArray={currArray}
          setCurrArray={setCurrArray}
          isSortingStarted={isSortingStarted}
          setIsSortingStarted={setIsSortingStarted}
          sortingAlgo={sortingAlgo}
          sortingSpeed={sortingSpeed}
        />
      </div>
    </div>
  );
}

export default App;
