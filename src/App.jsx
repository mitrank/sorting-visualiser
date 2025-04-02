import { useState } from "react";
import Header from "./components/Header";
import SortingInput from "./components/SortingInput";
import SortingWindow from "./components/SortingWindow";

function App() {
  const [arraySize, setArraySize] = useState(10);

  return (
    <div className="App">
      <Header />
      <div className="flex gap-2 justify-between w-full h-full">
        <SortingInput arraySize={arraySize} setArraySize={setArraySize} />
        <SortingWindow arraySize={arraySize} />
      </div>
    </div>
  );
}

export default App;
