import { ReactComponent as CounterRed } from "../assets/counter-red-large.svg";
import { ReactComponent as CounterYellow } from "../assets/counter-yellow-large.svg";

function FillBoard({ gameState }: FillBoardProps) {
  return (
    <div className="absolute left-[17px] top-[17px] overflow-hidden  grid grid-cols-7 grid-rows-6 gap-x-[18px] gap-y-[13px]">
      {gameState.map((row, i) =>
        row.map((cell, j) =>
          cell === 2 ? (
            <CounterRed className="animate-slide-in" key={`${i}${j}`} />
          ) : cell === 3 ? (
            <CounterYellow className="animate-slide-in" key={`${i}${j}`} />
          ) : (
            <div className=""></div>
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
