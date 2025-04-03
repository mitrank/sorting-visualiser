const mergeSort = async (
  arr,
  setCurrArray,
  setActiveBars,
  setIsArraySorted,
  delay,
  sortingSpeed
) => {
  let low = 0,
    high = arr.length - 1;

  const merge = async (arr, low, mid, high) => {
    const temp = [];
    let left = low,
      right = mid + 1;

    while (left <= mid && right <= high) {
      if (arr[left] <= arr[right]) {
        temp.push(arr[left]);
        left++;
      } else {
        temp.push(arr[right]);
        right++;
      }
    }

    while (left <= mid) {
      temp.push(arr[left]);
      left++;
    }

    while (right <= high) {
      temp.push(arr[right]);
      right++;
    }

    for (let i = low; i <= high; i++) {
      arr[i] = temp[i - low];

      setCurrArray([...arr]);
      setActiveBars([i, i - low]);
      await delay(sortingSpeed);
    }
  };

  const ms = async (arr, low, high) => {
    if (low >= high) return;
    const mid = Math.floor((low + high) / 2);

    await ms(arr, low, mid);
    await ms(arr, mid + 1, high);

    await merge(arr, low, mid, high);
  };

  await ms(arr, low, high);

  setActiveBars([]);
  setIsArraySorted(true);
};

export default mergeSort;
