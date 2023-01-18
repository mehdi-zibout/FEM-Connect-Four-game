import { ReactComponent as BackgroundWhite } from "../assets/board-layer-white-large.svg";
import { ReactComponent as BackgroundBlack } from "../assets/board-layer-black-large.svg";
import { ReactComponent as BackgroundWhiteMobile } from "../assets/board-layer-white-small.svg";
import { ReactComponent as BackgroundBlackMobile } from "../assets/board-layer-black-small.svg";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useState } from "react";
import FillBoard from "./FillBoard";
import Marker from "./Marker";
import { cpuMoves, findWinner, ithAvailable, makeMove } from "../logic";

const NEWGAME: number[][] = new Array(6).fill(new Array(7).fill(0));

function Board({
  isAgainstCPU,
  isPlayer1Turn,
  setIsPlayer1Turn,
  isGameEnded,
  setIsGameEnded,
}: BoardProps) {
  const [gameState, setGameState] = useState(NEWGAME);
  const [focusedDiscs, setFocusedDiscs] = useState<number[][]>([]);
  const [hoveringOver, setHoveringOver] = useState(0);
  useEffect(() => {
    if (isAgainstCPU) {
      if (!isPlayer1Turn && !isGameEnded) {
        const howMuchIwantCPUToAppearThinking = Math.random();
        const cpuThinkingTime =
          Math.random() *
          (howMuchIwantCPUToAppearThinking > 0.2 ? 4000 : 30000);
        const timer = setTimeout(() => {
          const [newGameState, , i, j] = cpuMoves(gameState);
          setGameState(newGameState);
          checkGameState(newGameState, i, j);
          if (!isGameEnded) setIsPlayer1Turn(true);
        }, cpuThinkingTime);
        return () => clearTimeout(timer);
      }
    }
  }, [isPlayer1Turn]);
  return (
    <div className="relative w-fit mx-auto z-10 ">
      <Marker
        className={`${
          isGameEnded || (isAgainstCPU && !isPlayer1Turn) ? "invisible" : ""
        }`}
        hoveringOver={hoveringOver}
        isPlayer1Turn={isPlayer1Turn}
      />

      <BackgroundBlack className="hidden tablet:block" />
      <BackgroundBlackMobile className="tablet:hidden" />
      <FillBoard gameState={gameState} focusedDiscs={focusedDiscs} />

      <BackgroundWhite className="absolute  -top-3  hidden tablet:block" />
      <BackgroundWhiteMobile className="absolute -top-2 tablet:hidden" />
      <div className="absolute inset-0 -top-10 left-[20px] grid grid-cols-7 gap-[5px]">
        {new Array(7).fill(0).map((col, i) => (
          <button
            disabled={
              gameState[0][i] !== 0 ||
              Boolean(isGameEnded) ||
              (!isPlayer1Turn && isAgainstCPU)
            }
            onMouseEnter={() => setHoveringOver(i)}
            key={i}
            className="disabled:cursor-default h-full    w-[65px] " // CHECK WIDTH
            onClick={() => handleOnClick(i)}
          ></button>
        ))}
      </div>
    </div>
  );

  function handleOnClick(j: number) {
    let i = ithAvailable(gameState, j) as number;
    const [newGameState] = makeMove(gameState, isPlayer1Turn, i, j);
    setGameState(newGameState);
    checkGameState(newGameState, i, j);
    if (!isGameEnded) setIsPlayer1Turn(!isPlayer1Turn);
  }

  function markWinningDiscs(
    lines: {
      indexes: number[][];
      value: number;
    }[]
  ) {
    lines.forEach((line) => {
      if (line.value * (isPlayer1Turn ? 1 : -1) >= 0) {
        setFocusedDiscs((focusedDiscs) => focusedDiscs.concat(line.indexes));
      }
    });
  }

  function checkGameState(newGameState: number[][], i: number, j: number) {
    if (i === 0) {
      if (newGameState[0].every((x) => x !== 0)) {
        setIsGameEnded(true);
      }
    }
    let winner = findWinner(gameState, isPlayer1Turn, i, j);
    if (winner.winner) {
      setFocusedDiscs((focusedDiscs) => focusedDiscs.concat([[i, j]]));
      setIsGameEnded(winner.winner);
      if (winner.lines) {
        markWinningDiscs(winner.lines);
      }
      return;
    }
  }
}

type BoardProps = {
  isAgainstCPU: boolean;
  isPlayer1Turn: boolean;
  setIsPlayer1Turn: Dispatch<SetStateAction<boolean>>;
  isGameEnded: boolean | -1 | 1;
  setIsGameEnded: Dispatch<SetStateAction<boolean | -1 | 1>>;
};

export default Board;
