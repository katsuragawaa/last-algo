export default function two_crystal_balls(breaks: boolean[]): number {
  const jumpSize = Math.floor(Math.sqrt(breaks.length));
  let i = jumpSize;
  for (; i <= breaks.length; i += jumpSize) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jumpSize;
  for (let j = 0; j < jumpSize && i < breaks.length; j++, i++) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}
