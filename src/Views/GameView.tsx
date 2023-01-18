import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import MiniButton from "../components/MiniButton";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as PlayerOne } from "../assets/player-one.svg";
import { ReactComponent as PlayerTwo } from "../assets/player-two.svg";
import { ReactComponent as RedsTurn } from "../assets/turn-background-red.svg";
import Score from "../components/Score";
import Board from "../components/Board";
import TurnTimer from "../components/TurnTimer";
import Card from "../components/Card";
import Modal from "../components/Modal";
import PauseModal from "../components/PauseModal";

function GameView({ restart }: GameViewProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
  const [playersScore, setPlayersScore] = useState({ 1: 0, 2: 0 });
  const [isGameEnded, setIsGameEnded] = useState<boolean | -1 | 1>(false);
  const [gameNumber, setGameNumber] = useState(0);
  useEffect(() => {
    setIsPlayer1Turn(gameNumber % 2 === 0);
    if (isGameEnded === 1)
      setPlayersScore({ ...playersScore, 1: playersScore[1] + 1 });
    else if (isGameEnded === -1)
      setPlayersScore({ ...playersScore, 2: playersScore[2] + 1 });
  }, [isGameEnded]);
  return (
    <>
      <div className="pt-12 px-5 tablet:px-16 desktop:pt-14 desktop:px-0 tablet:pt-8 w-full h-full relative">
        {/* TABLET VIEW */}
        <div className="desktop:hidden ">
          <header className="flex justify-between items-center tablet:w-[631px] mx-auto w-[335px]">
            <MiniButton onClick={() => setShowMenu(true)} className="w-[108px]">
              Menu
            </MiniButton>
            <Logo className="w-10 h-10 tablet:w-[52px] tablet:h-[52px]" />
            <MiniButton
              onClick={() => {
                restart((matchNumber) => matchNumber + 1);
              }}
              className="w-[108px]"
            >
              restart
            </MiniButton>
          </header>
          <div className="flex justify-center items-center my-12 ">
            <Score
              name="player 1"
              score={playersScore[1]}
              Icon={PlayerOne}
              className="mr-5 tablet:mr-10"
            />
            <Score
              name="player 2"
              score={playersScore[2]}
              Icon={PlayerTwo}
              isReverse
            />
          </div>
        </div>
        {/* DESKTOP VIEW */}

        <div className="desktop:flex items-center justify-center ">
          <div className="hidden desktop:block">
            <Score
              name="player 1"
              score={playersScore[1]}
              Icon={PlayerOne}
              className="desktop:mr-16 "
            />
          </div>
          <div className="">
            <div className="hidden desktop:block">
              <header className="flex justify-between items-center mb-14">
                <MiniButton
                  onClick={() => setShowMenu(true)}
                  className="w-[108px]"
                >
                  Menu
                </MiniButton>
                <Logo className="w-10 h-10 tablet:w-[52px] tablet:h-[52px]" />
                <MiniButton
                  onClick={() => {
                    restart((matchNumber) => matchNumber + 1);
                  }}
                  className="w-[108px]"
                >
                  restart
                </MiniButton>
              </header>
            </div>
            <Board
              key={gameNumber}
              isPlayer1Turn={isPlayer1Turn}
              setIsPlayer1Turn={setIsPlayer1Turn}
              isGameEnded={isGameEnded}
              setIsGameEnded={setIsGameEnded}
            />
          </div>
          <Score
            name="player 2"
            className="ml-16 desktop:block hidden"
            score={playersScore[2]}
            Icon={PlayerTwo}
            isReverse
          />
        </div>
        {/* SHARED */}
        {isGameEnded ? (
          <Card className="relative z-10 py-4 px-[4.5rem] bg-white text-center mx-auto right-0 left-0 w-fit -top-9 tablet:-top-[155px] desktop:-top-16">
            <h2 className="uppercase text-hxs">
              {isGameEnded === 1
                ? "Player 1"
                : isGameEnded === -1
                ? "Player 2"
                : ""}
            </h2>
            <h3 className="uppercase text-hl">
              {isGameEnded === 1 || isGameEnded === -1 ? "wins" : "draw"}
            </h3>
            <MiniButton
              onClick={() => {
                setGameNumber(gameNumber + 1);
                setIsGameEnded(false);
              }}
            >
              play again
            </MiniButton>
          </Card>
        ) : (
          <TurnTimer
            pause={showMenu}
            setIsGameEnded={setIsGameEnded}
            isPlayer1Turn={isPlayer1Turn}
          />
        )}
        <div className="absolute  bottom-0 w-full h-[calc(100%-570px)] tablet:h-[calc(100%-790px)] desktop:h-[calc(100vh-700px)] bg-dark-purple rounded-t-[60px] -mx-5 tablet:-mx-16 desktop:-mx-0"></div>
      </div>
      {showMenu && (
        <Modal setShowModal={setShowMenu}>
          <PauseModal setShowMenu={setShowMenu} restart={restart} />
        </Modal>
      )}
    </>
  );
}

type GameViewProps = {
  restart: Dispatch<SetStateAction<number>>;
};
export default GameView;
