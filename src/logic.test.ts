import { cpuMoves, findWinner, ithAvailable } from "./logic";
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

it("finds available ith", () => {
  const data = [
    [0, 0, 1, -1, 0, 0, 0],
    [0, -1, -1, 1, 0, 0, 0],
    [0, 1, 1, -1, 0, 0, 0],
    [-1, 1, 1, 1, -1, 0, 0],
    [-1, -1, 1, -1, 1, 0, 0],
    [-1, -1, -1, 1, 1, 0, 1],
  ];

  const result = ithAvailable(data, 0);
  const result1 = ithAvailable(data, 1);
  const result2 = ithAvailable(data, 2);
  const result3 = ithAvailable(data, 3);
  const result4 = ithAvailable(data, 4);
  const result5 = ithAvailable(data, 5);
  const result6 = ithAvailable(data, 6);

  expect(result).toBe(2);
  expect(result1).toBe(0);
  expect(result2).toBeUndefined;
  expect(result3).toBeUndefined;
  expect(result4).toBe(2);
  expect(result5).toBe(5);
  expect(result6).toBe(4);
});

it("cpu should be able to move to first row", () => {
  const data = [
    [0, 0, 1, -1, 1, 1, 1],
    [1, -1, -1, 1, 1, 1, 1],
    [1, -1, 1, -1, 1, 1, 1],
    [-1, -1, 1, 1, -1, 1, 1],
    [-1, -1, 1, -1, 1, 1, 1],
    [-1, -1, -1, 1, 1, 1, 1],
  ];
  const result = cpuMoves(data);
  expect(result[0]).toEqual([
    [0, -1, 1, -1, 1, 1, 1],
    [1, -1, -1, 1, 1, 1, 1],
    [1, -1, 1, -1, 1, 1, 1],
    [-1, -1, 1, 1, -1, 1, 1],
    [-1, -1, 1, -1, 1, 1, 1],
    [-1, -1, -1, 1, 1, 1, 1],
  ]);
});
