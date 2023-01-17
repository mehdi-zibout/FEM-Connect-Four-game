import MiniButton from "../components/MiniButton";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as PlayerOne } from "../assets/player-one.svg";
import { ReactComponent as PlayerTwo } from "../assets/player-two.svg";
import { ReactComponent as RedsTurn } from "../assets/turn-background-red.svg";
import Score from "../components/Score";
import Board from "../components/Board";
import { useState } from "react";
import TurnTimer from "../components/TurnTimer";
function GameView() {
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(false);
  return (
    <div className="pt-12 px-5 w-full h-full relative">
      <header className="flex justify-between items-center">
        <MiniButton className="w-[108px]">Menu</MiniButton>
        <Logo className="w-10 h-10" />
        <MiniButton className="w-[108px]">restart</MiniButton>
      </header>
      <div className="flex justify-around items-center my-12">
        <Score name="player 1" score={12} Icon={PlayerOne} />
        <Score name="player 2" score={23} Icon={PlayerTwo} isReverse />
      </div>
      <Board
        isPlayer1Turn={isPlayer1Turn}
        setIsPlayer1Turn={setIsPlayer1Turn}
      />
      <TurnTimer isPlayer1Turn={isPlayer1Turn} />
      <div className="absolute  bottom-0 w-full h-[calc(100%-570px)] bg-dark-purple rounded-t-[60px] -mx-5"></div>
    </div>
  );
}

export default GameView;
