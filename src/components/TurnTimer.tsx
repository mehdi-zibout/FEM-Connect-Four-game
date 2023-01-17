import { useEffect, useState } from "react";
import { ReactComponent as TurnBg } from "../assets/turn-background-red.svg";

function TurnTimer({ isPlayer1Turn }: TurnTimerProps) {
  const [timeleft, setTimeleft] = useState(30);
  useEffect(() => {
    if (timeleft > 0) {
      const timer = setTimeout(() => {
        setTimeleft((timeleft) => timeleft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
    // TO DO : LOSE
  }, [timeleft]);
  useEffect(() => {
    setTimeleft(30);
  }, [isPlayer1Turn]);
  return (
    <div className="relative -top-9 tablet:-top-[155px] desktop:-top-16 z-10 w-fit mx-auto  ">
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
        <h4 className="text-hxs uppercase">Your turn</h4>
        <h3 className="text-hl">{timeleft}s</h3>
      </div>
    </div>
  );
}

type TurnTimerProps = {
  isPlayer1Turn: boolean;
};
export default TurnTimer;
