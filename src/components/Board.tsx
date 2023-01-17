import { ReactComponent as BackgroundWhite } from "../assets/board-layer-white-large.svg";
import { ReactComponent as BackgroundBlack } from "../assets/board-layer-black-large.svg";
import { ReactComponent as BackgroundWhiteMobile } from "../assets/board-layer-white-small.svg";
import { ReactComponent as BackgroundBlackMobile } from "../assets/board-layer-black-small.svg";
import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import FillBoard from "./FillBoard";
import Marker from "./Marker";

const NEWGAME: number[][] = new Array(6).fill(new Array(7).fill(0));

function Board({ isPlayer1Turn, setIsPlayer1Turn }: BoardProps) {
  const [gameState, setGameState] = useState(NEWGAME);
  const [hoveringOver, setHoveringOver] = useState(0);
  return (
    <div className="relative w-fit mx-auto z-10">
      <Marker hoveringOver={hoveringOver} isPlayer1Turn={isPlayer1Turn} />
      <BackgroundBlack className="hidden tablet:block" />
      <BackgroundBlackMobile className="tablet:hidden" />
      <FillBoard gameState={gameState} />

      <BackgroundWhite className="absolute  -top-3  hidden tablet:block" />
      <BackgroundWhiteMobile className="absolute -top-2 tablet:hidden" />
      <div className="absolute inset-0 -top-10 left-[20px] grid grid-cols-7 gap-[5px]">
        {new Array(7).fill(0).map((col, i) => (
          <button
            onMouseEnter={() => setHoveringOver(i)}
            key={i}
            className="h-full  group  w-[65px] "
            onClick={() => handleOnClick(i)}
          ></button>
        ))}
      </div>
    </div>
  );

  function handleOnClick(i: number) {
    const newGameState = [];
    let madeMove = false;
    for (let index = gameState.length - 1; index >= 0; index--) {
      const newRow = [...gameState[index]];
      if (gameState[index][i] == 0 && !madeMove) {
        madeMove = true;
        newRow[i] = isPlayer1Turn ? 2 : 3;
      }
      newGameState.push(newRow);
    }
    setGameState(newGameState.reverse());
    setIsPlayer1Turn(!isPlayer1Turn);
  }
}

type BoardProps = {
  isPlayer1Turn: boolean;
  setIsPlayer1Turn: Dispatch<SetStateAction<boolean>>;
};

export default Board;
