import { useEffect, useState } from "react";
import Header from "./components/Header";
import SortingInput from "./components/SortingInput";
import SortingWindow from "./components/SortingWindow";

function App() {
  const [arraySize, setArraySize] = useState(0);

  useEffect(() => {
    console.log(arraySize);
  }, [arraySize]);

  return (
    <div className="App">
      <Header />
      <div className="flex gap-2 justify-between w-full h-full">
        <SortingInput setArraySize={setArraySize} />
        <SortingWindow />
      </div>
    </div>
  );
}

export default App;
