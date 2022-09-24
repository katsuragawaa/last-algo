function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high];
  let idx = low - 1;

  // move everything lower than the pivot to the start of the array
  for (let i = low; i < high; i++) {
    if (arr[i] <= pivot) {
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }

  // move the pivot so every number big than it goes to the end of the array
  idx++;
  arr[high] = arr[idx];
  arr[idx] = pivot;

  return idx;
}

function qs(arr: number[], low: number, high: number): void {
  if (low >= high) {
    return;
  }

  const idx = partition(arr, low, high);

  qs(arr, low, idx - 1);
  qs(arr, idx + 1, high);
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}
