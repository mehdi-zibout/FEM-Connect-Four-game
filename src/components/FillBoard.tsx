import { ReactComponent as CounterRed } from "../assets/counter-red-large.svg";
import { ReactComponent as CounterYellow } from "../assets/counter-yellow-large.svg";

function FillBoard({ gameState, focusedDiscs }: FillBoardProps) {
  return (
    <div className="absolute left-[7px] -top-[2px] gap-y-[0.9px] gap-x-[5.6px] tablet:left-[17px] tablet:top-[5px] overflow-hidden  grid grid-cols-7 grid-rows-6 tablet:gap-x-[18px] tablet:gap-y-[13px] ">
      {gameState.map((row, i) =>
        row.map((cell, j) =>
          cell === 1 ? (
            <div className="relative" key={`${i},${j}`}>
              <CounterRed className="animate-slide-in w-[41px] h-[46px] tablet:w-[70px] tablet:h-[75px]" />
              {inFocusedDiscs(i, j) && (
                <div className="absolute animate-fade-in  inset-0 m-auto -top-1 border-[6px] rounded-full border-white w-5 h-5 tablet:w-8 tablet:h-8"></div>
              )}
            </div>
          ) : cell === -1 ? (
            <div className="relative" key={`${i},${j}`}>
              <CounterYellow className="animate-slide-in w-[41px] h-[46px] tablet:w-[70px] tablet:h-[75px]" />
              {inFocusedDiscs(i, j) && (
                <div className="absolute animate-fade-in  inset-0 m-auto -top-1 border-[6px] rounded-full border-white w-8 h-8"></div>
              )}{" "}
            </div>
          ) : (
            <div key={`${i},${j}`}></div>
          )
        )
      )}
    </div>
  );
  function inFocusedDiscs(i: number, j: number): boolean {
    return focusedDiscs.some((disc) => disc[0] === i && disc[1] === j);
  }
}

type FillBoardProps = {
  gameState: number[][];
  focusedDiscs: number[][];
};

export default FillBoard;
