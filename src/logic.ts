export function findWinner(
  gameState: number[][],
  isPlayer1Turn: boolean,
  i: number,
  j: number
) {
  let x = isPlayer1Turn ? 1 : -1;
  const [min, max] = positionScore(gameState, i, j);
  if (x < 0) {
    if (x * (min + x) === 4) return x;
  } else if (x * (max + x) === 4) return x;
  return 0;
}

// shit function sorry
export function positionScore(gameState: number[][], i: number, j: number) {
  let scores: number[] = [
    // cols 4
    (gameState?.[i - 3]?.[j] ?? 0) +
      (gameState?.[i - 2]?.[j] ?? 0) +
      (gameState?.[i - 1]?.[j] ?? 0),
    (gameState?.[i + 1]?.[j] ?? 0) +
      (gameState?.[i + 2]?.[j] ?? 0) +
      (gameState?.[i - 1]?.[j] ?? 0),
    (gameState?.[i + 1]?.[j] ?? 0) +
      (gameState?.[i - 2]?.[j] ?? 0) +
      (gameState?.[i - 1]?.[j] ?? 0),
    (gameState?.[i + 3]?.[j] ?? 0) +
      (gameState?.[i + 2]?.[j] ?? 0) +
      (gameState?.[i + 1]?.[j] ?? 0),
    // rows 4
    (gameState?.[i]?.[j + 1] ?? 0) +
      (gameState?.[i]?.[j + 2] ?? 0) +
      (gameState?.[i]?.[j + 3] ?? 0),
    (gameState?.[i]?.[j + 1] ?? 0) +
      (gameState?.[i]?.[j + 2] ?? 0) +
      (gameState?.[i]?.[j - 1] ?? 0),
    (gameState?.[i]?.[j + 1] ?? 0) +
      (gameState?.[i]?.[j - 2] ?? 0) +
      (gameState?.[i]?.[j - 1] ?? 0),
    (gameState?.[i]?.[j - 1] ?? 0) +
      (gameState?.[i]?.[j - 2] ?? 0) +
      (gameState?.[i]?.[j - 3] ?? 0),
    // diag \ 4
    (gameState?.[i - 1]?.[j - 1] ?? 0) +
      (gameState?.[i - 2]?.[j - 2] ?? 0) +
      (gameState?.[i - 3]?.[j - 3] ?? 0),
    (gameState?.[i - 1]?.[j - 1] ?? 0) +
      (gameState?.[i - 2]?.[j - 2] ?? 0) +
      (gameState?.[i + 1]?.[j + 1] ?? 0),
    (gameState?.[i - 1]?.[j - 1] ?? 0) +
      (gameState?.[i + 2]?.[j + 2] ?? 0) +
      (gameState?.[i + 1]?.[j + 1] ?? 0),
    (gameState?.[i + 1]?.[j + 1] ?? 0) +
      (gameState?.[i + 2]?.[j + 2] ?? 0) +
      (gameState?.[i + 3]?.[j + 3] ?? 0),
    // diag / 4
    (gameState?.[i - 1]?.[j + 1] ?? 0) +
      (gameState?.[i - 2]?.[j + 2] ?? 0) +
      (gameState?.[i - 3]?.[j + 3] ?? 0),
    (gameState?.[i + 1]?.[j - 1] ?? 0) +
      (gameState?.[i + 2]?.[j - 2] ?? 0) +
      (gameState?.[i + 3]?.[j - 3] ?? 0),
    (gameState?.[i - 1]?.[j + 1] ?? 0) +
      (gameState?.[i + 1]?.[j - 1] ?? 0) +
      (gameState?.[i + 2]?.[j - 2] ?? 0),
    (gameState?.[i - 1]?.[j + 1] ?? 0) +
      (gameState?.[i - 2]?.[j + 2] ?? 0) +
      (gameState?.[i + 1]?.[j - 1] ?? 0),
  ];

  const min = Math.min(...scores);
  const max = Math.max(...scores);

  return [min, max];
}
