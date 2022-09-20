export default class DoublyLinkedList<T> {
  public length: number;

  private head?: Node<T>;

  private tail?: Node<T>;

  constructor() {
    this.length = 0;
  }

  prepend(item: T): void {
    const node: Node<T> = {
      item: item,
      next: this.head,
    };
    this.head = node;
    this.length++;

    if (node.next) {
      node.next.prev = node;
    }

    if (!this.tail) {
      this.tail = node;
    }
  }

  insertAt(item: T, idx: number): void {
    const nodeAtIdx = this.getNode(idx);
    if (nodeAtIdx) {
      const node: Node<T> = {
        item: item,
        next: nodeAtIdx,
        prev: nodeAtIdx.prev,
      };
      nodeAtIdx.prev = node;
      this.length++;

      if (node.prev) {
        node.prev.next = node;
      }
    } else {
      this.append(item);
    }
  }

  append(item: T): void {
    const node: Node<T> = {
      item: item,
      prev: this.tail,
    };
    this.tail = node;
    this.length++;

    if (node.prev) {
      node.prev.next = node;
    }

    if (!this.head) {
      this.head = node;
    }
  }

  remove(item: T): T | undefined {
    let current = this.head;
    if (!current) {
      return;
    }

    for (let i = 0; i < this.length; i++) {
      if (current.item === item) {
        return this.removeAt(i);
      }
      if (!current.next) {
        return;
      }
      current = current.next;
    }

    return;
  }

  get(idx: number): T | undefined {
    return this.getNode(idx)?.item;
  }

  removeAt(idx: number): T | undefined {
    const node = this.getNode(idx);
    if (!node) {
      return;
    }

    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    node.next = node.prev = undefined;
    this.length--;

    return node.item;
  }

  private getNode(idx: number): Node<T> | undefined {
    let current = this.head;
    if (!current) {
      return;
    }

    for (let i = 0; i < idx; i++) {
      if (!current.next) {
        return;
      }
      current = current.next;
    }

    return current;
  }
}

type Node<T> = {
  item: T;
  prev?: Node<T>;
  next?: Node<T>;
};
