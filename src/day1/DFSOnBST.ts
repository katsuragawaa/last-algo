function find(node: BinaryNode<number> | null, needle: number): boolean {
  if (!node) {
    return false;
  }

  if (needle === node.value) {
    return true;
  }

  if (needle < node.value) {
    return find(node.left, needle);
  }

  return find(node.right, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
  return find(head, needle);
}
