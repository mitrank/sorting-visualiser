import Header from "./components/Header";
import SortingInput from "./components/SortingInput";
import SortingWindow from "./components/SortingWindow";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex gap-2 justify-between w-full h-full">
        <SortingInput />
        <SortingWindow />
      </div>
    </div>
  );
}

export default App;
