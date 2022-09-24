export default class Stack<T> {
  length: number;

  private head?: Node<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const node: Node<T> = { value: item, next: this.head };
    this.head = node;
    this.length++
  }

  pop(): T | undefined {
    if (!this.head) {
      return;
    }

    this.length--;
    const head = this.head;
    this.head = this.head.next;
    head.next = undefined;
    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

type Node<T> = {
  value: T;
  next?: Node<T>;
};
