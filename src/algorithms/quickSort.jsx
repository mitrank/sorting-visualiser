const quickSort = async (
  arr,
  setCurrArray,
  setActiveBars,
  setIsArraySorted,
  delay,
  sortingSpeed
) => {
  let low = 0,
    high = arr.length - 1;

  const getPivotPoint = async (arr, low, high) => {
    const pivot = arr[low];
    let i = low,
      j = high;

    while (i < j) {
      while (arr[i] <= pivot && i <= high - 1) {
        i++;
      }

      while (arr[j] > pivot && j >= low + 1) {
        j--;
      }

      if (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];

        setCurrArray([...arr]);
        setActiveBars([i, j]);
        await delay(sortingSpeed);
      }
    }

    [arr[j], arr[low]] = [arr[low], arr[j]];

    setCurrArray([...arr]);
    setActiveBars([i, low]);
    await delay(sortingSpeed);

    return j;
  };

  const qs = async (arr, low, high) => {
    if (low < high) {
      const pIdx = await getPivotPoint(arr, low, high);
      await qs(arr, low, pIdx - 1);
      await qs(arr, pIdx + 1, high);
    }
  };

  await qs(arr, low, high);

  setActiveBars([]);
  setIsArraySorted(true);
};

export default quickSort;
