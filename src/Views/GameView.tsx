import MiniButton from "../components/MiniButton";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as PlayerOne } from "../assets/player-one.svg";
import { ReactComponent as PlayerTwo } from "../assets/player-two.svg";
import Score from "../components/Score";
import Board from "../components/Board";
function GameView() {
  return (
    <div className="pt-12 px-5 w-full h-full">
      <header className="flex justify-between items-center">
        <MiniButton>Menu</MiniButton>
        <Logo />
        <MiniButton>restart</MiniButton>
      </header>
      <div className="flex justify-around items-center my-12">
        <Score name="player 1" score={12} Icon={PlayerOne} />
        <Score name="player 2" score={23} Icon={PlayerTwo} isReverse />
      </div>
      <Board />
    </div>
  );
}

export default GameView;
