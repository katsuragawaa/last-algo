export default class MinHeap {
  public length: number;

  private data: number[];

  constructor() {
    this.data = [];
    this.length = 0;
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  delete(): number {
    if (this.length === 0) {
      return -1;
    }

    this.length--;
    const out = this.data[0];
    if (this.length === 0) {
      this.data = [];
      return out;
    }

    this.data[0] = this.data[this.length];
    this.heapifyDown(0);

    return out;
  }

  private getLeftChildIdx(idx: number): number {
    return 2 * idx + 1;
  }

  private getRightChildIdx(idx: number): number {
    return 2 * idx + 2;
  }

  private getParentIdx(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  private heapifyUp(idx: number): void {
    if (idx === 0) {
      return;
    }

    const parentIdx = this.getParentIdx(idx);
    const parent = this.data[parentIdx];
    const current = this.data[idx];

    if (parent <= current) {
      return;
    }

    this.data[idx] = parent;
    this.data[parentIdx] = current;

    this.heapifyUp(parentIdx);
  }

  private heapifyDown(idx: number): void {
    if (idx >= this.length) {
      return;
    }

    const leftIdx = this.getLeftChildIdx(idx);
    const rightIdx = this.getRightChildIdx(idx);

    if (leftIdx >= this.length) {
      return;
    }

    const current = this.data[idx];
    const leftChild = this.data[leftIdx];
    const rightChild = this.data[rightIdx];

    if (leftChild < rightChild && leftChild < current) {
      this.data[leftIdx] = current;
      this.data[idx] = leftChild;
      this.heapifyDown(leftIdx);
    } else if (rightChild < leftChild && rightChild < current) {
      this.data[rightIdx] = current;
      this.data[idx] = rightChild;
      this.heapifyDown(rightIdx);
    }
  }
}
