const selectionSort = async (
  arr,
  setCurrArray,
  setActiveBars,
  setIsArraySorted,
  delay
) => {
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
};

export default selectionSort;
