import { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { ReactComponent as TurnBg } from "../assets/turn-background-red.svg";

function TurnTimer({
  isPlayer1Turn,
  setIsGameEnded,
  pause,
  isAgainstCPU,
}: TurnTimerProps) {
  const [timeleft, setTimeleft] = useState(30);
  useEffect(() => {
    if (timeleft > 0) {
      if (!pause) {
        const timer = setTimeout(() => {
          setTimeleft((timeleft) => timeleft - 1);
        }, 1000);
        return () => clearTimeout(timer);
      }
      return;
    }
    setIsGameEnded(isPlayer1Turn ? -1 : 1);
  }, [timeleft, pause]);
  useEffect(() => {
    setTimeleft(30);
  }, [isPlayer1Turn]);
  return (
    <div className="relative -top-9 tablet:-top-16 desktop:-top-16 z-10 w-fit mx-auto  ">
      <TurnBg
        className={`shadow-card rounded-[20px] transition-all duration-300 ${
          isPlayer1Turn ? "fill-red" : "fill-yellow"
        } `}
      />

      <div
        className={`absolute inset-0 top-6 m-auto z-20 w-fit h-fit transition-all duration-300 ${
          isPlayer1Turn ? "text-white" : "text-black"
        }  text-center`}
      >
        <h4 className="text-hxs uppercase">
          {isAgainstCPU
            ? isPlayer1Turn
              ? "your turn"
              : "cpu's turn"
            : isPlayer1Turn
            ? "player 1's turn"
            : "player 2's turn"}
        </h4>
        <h3 className="text-hl">{timeleft}s</h3>
      </div>
    </div>
  );
}

type TurnTimerProps = {
  isAgainstCPU: boolean;
  pause: boolean;
  isPlayer1Turn: boolean;
  setIsGameEnded: Dispatch<SetStateAction<boolean | 1 | -1>>;
};
export default TurnTimer;
