import { i } from "vitest/dist/index-50755efe";

export function findWinner(
  gameState: number[][],
  isPlayer1Turn: boolean,
  i: number,
  j: number
): {
  winner: 0 | 1 | -1;
  lines?: {
    indexes: number[][];
    value: number;
  }[];
} {
  let x: 1 | -1 = isPlayer1Turn ? 1 : -1;
  const [min, max, indexes] = positionScore(gameState, i, j);
  if (x < 0) {
    if (x * (min + x) === 4)
      return {
        winner: x,
        lines: indexes,
      };
  } else if (max + x === 4) return { winner: x, lines: indexes };
  return { winner: 0 };
}

// shit function sorry
export function positionScore(
  gameState: number[][],
  i: number,
  j: number
): [
  number,
  number,
  {
    indexes: number[][];
    value: number;
  }[]
] {
  let scores: {
    indexes: number[][];
    value: number;
  }[] = [];
  const linesContainingIJ = [
    [
      { value: gameState?.[i]?.[j - 3] ?? 0, i: i, j: j - 3 },
      { value: gameState?.[i]?.[j - 2] ?? 0, i: i, j: j - 2 },
      { value: gameState?.[i]?.[j - 1] ?? 0, i: i, j: j - 1 },
      { value: gameState?.[i]?.[j + 1] ?? 0, i: i, j: j + 1 },
      { value: gameState?.[i]?.[j + 2] ?? 0, i: i, j: j + 2 },
      { value: gameState?.[i]?.[j + 3] ?? 0, i: i, j: j + 3 },
    ],
    [
      { value: gameState?.[i - 3]?.[j] ?? 0, i: i - 3, j: j },
      { value: gameState?.[i - 2]?.[j] ?? 0, i: i - 2, j: j },
      { value: gameState?.[i - 1]?.[j] ?? 0, i: i - 1, j: j },
      { value: gameState?.[i + 1]?.[j] ?? 0, i: i + 1, j: j },
      { value: gameState?.[i + 2]?.[j] ?? 0, i: i + 2, j: j },
      { value: gameState?.[i + 3]?.[j] ?? 0, i: i + 3, j: j },
    ],
    [
      { value: gameState?.[i - 3]?.[j - 3] ?? 0, i: i - 3, j: j - 3 },
      { value: gameState?.[i - 2]?.[j - 2] ?? 0, i: i - 2, j: j - 2 },
      { value: gameState?.[i - 1]?.[j - 1] ?? 0, i: i - 1, j: j - 1 },
      { value: gameState?.[i + 1]?.[j + 1] ?? 0, i: i + 1, j: j + 1 },
      { value: gameState?.[i + 2]?.[j + 2] ?? 0, i: i + 2, j: j + 2 },
      { value: gameState?.[i + 3]?.[j + 3] ?? 0, i: i + 3, j: j + 3 },
    ],
    [
      { value: gameState?.[i - 3]?.[j + 3] ?? 0, i: i - 3, j: j + 3 },
      { value: gameState?.[i - 2]?.[j + 2] ?? 0, i: i - 2, j: j + 2 },
      { value: gameState?.[i - 1]?.[j + 1] ?? 0, i: i - 1, j: j + 1 },
      { value: gameState?.[i + 1]?.[j - 1] ?? 0, i: i + 1, j: j - 1 },
      { value: gameState?.[i + 2]?.[j - 2] ?? 0, i: i + 2, j: j - 2 },
      { value: gameState?.[i + 3]?.[j - 3] ?? 0, i: i + 3, j: j - 3 },
    ],
  ];
  for (let a = 0; a < linesContainingIJ.length; a++) {
    for (let b = 0; b < linesContainingIJ[a].length - 2; b++) {
      scores.push(calculateScore(linesContainingIJ[a].slice(b, b + 3)));
    }
  }
  const min = Math.min(...scores.map((score) => score.value));
  const max = Math.max(...scores.map((score) => score.value));
  if (min === -3 || max === 3) {
    return [
      min,
      max,
      scores.filter((score) => score.value === 3 || score.value === -3),
    ];
  }
  return [min, max, []];
}

function calculateScore(arr: { value: number; i: number; j: number }[]) {
  return {
    indexes: arr.map((x) => [x.i, x.j]),
    value: arr.reduce((acc, curr) => acc + curr.value, 0),
  };
}
