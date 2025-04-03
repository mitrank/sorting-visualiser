const bubbleSort = async (
  arr,
  setCurrArray,
  setActiveBars,
  setIsArraySorted,
  delay,
  sortingSpeed
) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    let didSwap = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        setCurrArray([...arr]);
        setActiveBars([j, j + 1]);
        await delay(sortingSpeed);

        didSwap = 1;
      }
    }

    if (didSwap == 0) break;
  }

  setActiveBars([]);
  setIsArraySorted(true);
};

export default bubbleSort;
