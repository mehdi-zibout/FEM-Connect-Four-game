/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
import MiniButton from "./components/MiniButton";
import { ReactComponent as BackgroundWhite } from "./assets/board-layer-white-large.svg";
import { ReactComponent as BackgroundBlack } from "./assets/board-layer-black-large.svg";
import { ReactComponent as CounterRed } from "./assets/counter-red-large.svg";
import { ReactComponent as CounterYellow } from "./assets/counter-yellow-large.svg";
import { ReactComponent as MarkerYellow } from "./assets/marker-yellow.svg";
import { ReactComponent as MarkerRed } from "./assets/marker-red.svg";
import MainMenu from "./Views/MainMenu";
import PauseModal from "./components/PauseModal";
import Modal from "./components/Modal";
import Board from "./components/Board";
import GameView from "./Views/GameView";

const newGame: number[][] = new Array(6).fill(new Array(7).fill(0));
function App() {
  const [game, setGame] = useState(newGame);
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(false);
  const [hoveringOver, setHoveringOver] = useState(0);
  return (
    <>
      <main className="bg-purple w-screen h-screen overflow-hidden flex justify-center items-center">
        {/* <div className="relative ">
          <BackgroundBlack className="absolute  top-0 " />
          <div className="absolute w-full h-full overflow-hidden">
            <CounterRed
              className={`absolute transition duration-[1s] 
              } `}
              style={{
                transform: `translate(${18 + 88 * hoveringOver}px,${
                  isPlayer1Turn ? "-50px" : "500px"
                })`,
              }}
            />
          </div>
          {hoveringOver >= 0 &&
            (isPlayer1Turn ? (
              <MarkerRed
                className=" transition duration-700"
                style={{
                  transform: `translate(${33 + 88 * hoveringOver}px,-42px)`,
                }}
              />
            ) : (
              <MarkerYellow
                className=" transition duration-1000"
                style={{
                  transform: `translate(${33 + 88 * hoveringOver}px,-42px)`,
                }}
              />
            ))}
          <div className="w-full relative h-full grid grid-cols-7 grid-rows-6 gap-x-1 gap-y-[14px] px-4 -mt-5  ">
            {game.map((row, i) =>
              row.map((cell, j) =>
                cell === 2 ? (
                  <CounterRed key={`${i}${j}`} />
                ) : cell === 3 ? (
                  <CounterYellow key={`${i}${j}`} />
                ) : (
                  <div
                    onMouseEnter={() => setHoveringOver(j)}
                    className="z-50 relative cursor-pointer w-[70px] h-[75px] rounded-full"
                    key={`${i}${j}`}
                    onClick={() => handleOnClick(j)}
                  ></div>
                )
              )
            )}
          </div>
          <BackgroundWhite className="absolute top-0 " />
        </div> */}
        {/* <Board /> */}
        <GameView />
      </main>
      {/* <MainMenu />
        <button onClick={() => setIsPlayer1Turn(true)}>show modal</button>
      
      {isPlayer1Turn && (
        <Modal setShowModal={setIsPlayer1Turn}>
          <PauseModal />
        </Modal>
      )} */}
    </>
  );

  function handleOnClick(i: number) {
    const newGameState = [];
    let madeMove = false;
    for (let index = game.length - 1; index >= 0; index--) {
      const newRow = [...game[index]];
      if (game[index][i] == 0 && !madeMove) {
        madeMove = true;
        newRow[i] = isPlayer1Turn ? 2 : 3;
      }
      newGameState.push(newRow);
    }
    setGame(newGameState.reverse());
    setIsPlayer1Turn(!isPlayer1Turn);
  }
}

export default App;
