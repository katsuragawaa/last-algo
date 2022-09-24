const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function walk(maze: string[], wall: string, current: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
  const x = current.x;
  const y = current.y;

  if (x === end.x && y === end.y) {
    path.push(current);
    return true;
  }

  if (seen[y][x]) {
    return false;
  }

  if (y < 0 || y >= maze.length || x < 0 || x >= maze[y].length) {
    return false;
  }

  if (maze[y][x] === wall) {
    return false;
  }

  seen[y][x] = true;
  path.push(current);

  for (let i = 0; i < directions.length; i++) {
    const [offX, offY] = directions[i];
    const next = { x: x + offX, y: y + offY };
    if (walk(maze, wall, next, end, seen, path)) {
      return true;
    }
  }

  path.pop();

  return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  const path: Point[] = [];
  const seen: boolean[][] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);

  return path;
}
