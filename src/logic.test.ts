import { findWinner } from "./logic";
import { expect, it } from "vitest";

it("finds winner", () => {
  const data = [
    [0, 0, 1, -1, 0, 0, 0],
    [0, 0, -1, 1, 0, 0, 0],
    [0, 0, 1, -1, 0, 0, 0],
    [-1, 1, 1, 1, -1, 0, 0],
    [-1, -1, 1, -1, 1, 0, 0],
    [-1, -1, -1, 1, 1, 0, 0],
  ];
  const isPlayer1Turn = false;
  const i = 2;
  const j = 5;
  const result = findWinner(data, isPlayer1Turn, i, j);
  const result1 = findWinner(data, !isPlayer1Turn, 2, 0);
  const result2 = findWinner(data, !isPlayer1Turn, 5, 5);
  const result3 = findWinner(data, !isPlayer1Turn, 5, 6);
  expect(result.winner).toBe(-1);
  expect(result1.winner).toBe(1);
  expect(result2.winner).toBe(1);
  expect(result3.winner).toBe(0);
});
