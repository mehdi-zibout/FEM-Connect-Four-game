import { ReactComponent as CounterRed } from "../assets/counter-red-large.svg";
import { ReactComponent as CounterYellow } from "../assets/counter-yellow-large.svg";
import { ReactComponent as CounterRedMobile } from "../assets/counter-red-small.svg";
import { ReactComponent as CounterYellowMobile } from "../assets/counter-yellow-small.svg";
import { useEffect, useState } from "react";

function FillBoard({ gameState }: FillBoardProps) {
  const [width, setWidth] = useState(() => window.innerWidth);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);
  const CR = width >= 768 ? CounterRed : CounterRedMobile;
  const CY = width >= 768 ? CounterYellow : CounterYellowMobile;
  return (
    <div className="absolute left-[7px] -top-[2px] gap-y-[0.9px] gap-x-[5.6px] tablet:left-[17px] tablet:top-[5px] overflow-hidden  grid grid-cols-7 grid-rows-6 tablet:gap-x-[18px] tablet:gap-y-[13px] ">
      {gameState.map((row, i) =>
        row.map((cell, j) =>
          cell === 2 ? (
            <CR key={`${i},${j}`} className="animate-slide-in " />
          ) : cell === 3 ? (
            <CY key={`${i},${j}`} className="animate-slide-in" />
          ) : (
            <div key={`${i},${j}`}></div>
          )
        )
      )}
    </div>
  );
}

type FillBoardProps = {
  gameState: number[][];
};
export default FillBoard;
