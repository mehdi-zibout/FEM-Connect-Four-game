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
import RulesView from "./Views/RulesView";

function App() {
  const [matchNumber, setMatchNumber] = useState(0);
  const [isAgainstCPU, setIsAgainstCPU] = useState(false);
  const [view, setView] = useState(0);
  return (
    <>
      <main className="bg-purple w-screen h-screen overflow-hidden flex justify-center items-center">
        {view === 0 ? (
          <MainMenu setIsAgainstCPU={setIsAgainstCPU} setView={setView} />
        ) : view === 1 ? (
          <GameView
            isAgainstCPU={isAgainstCPU}
            key={matchNumber}
            restart={setMatchNumber}
            setView={setView}
          />
        ) : (
          <RulesView setView={setView} />
        )}
      </main>
    </>
  );
}

export default App;
