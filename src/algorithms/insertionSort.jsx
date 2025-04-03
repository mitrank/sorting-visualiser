const insertionSort = async (
  arr,
  setCurrArray,
  setActiveBars,
  setIsArraySorted,
  delay
) => {
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
};

export default insertionSort;
