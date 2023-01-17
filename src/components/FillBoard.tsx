import { ReactComponent as CounterRed } from "../assets/counter-red-large.svg";
import { ReactComponent as CounterYellow } from "../assets/counter-yellow-large.svg";

function FillBoard({ gameState }: FillBoardProps) {
  return (
    <div className="absolute left-[7px] -top-[2px] gap-y-[0.9px] gap-x-[5.6px] tablet:left-[17px] tablet:top-[5px] overflow-hidden  grid grid-cols-7 grid-rows-6 tablet:gap-x-[18px] tablet:gap-y-[13px] ">
      {gameState.map((row, i) =>
        row.map((cell, j) =>
          cell === 1 ? (
            <CounterRed
              key={`${i},${j}`}
              className="animate-slide-in w-[41px] h-[46px] tablet:w-[70px] tablet:h-[75px]"
            />
          ) : cell === -1 ? (
            <CounterYellow
              key={`${i},${j}`}
              className="animate-slide-in w-[41px] h-[46px] tablet:w-[70px] tablet:h-[75px]"
            />
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
