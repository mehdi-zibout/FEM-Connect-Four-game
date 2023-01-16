/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
import { ReactComponent as Icon } from "./assets/player-vs-player.svg";
import Button from "./components/Button";
import Card from "./components/Card";
import MiniButton from "./components/MiniButton";
import Modal from "./components/Modal";
function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="text-hl bg-purple p-10 h-screen">
        <Button onClick={() => setShowModal(true)} bgColor="white" alignStart>
          Game Rules
        </Button>
        <div className="my-2"></div>
        <Button bgColor="yellow" Icon={Icon}>
          Click me
        </Button>
        <div className="my-2"></div>
        <MiniButton>restart</MiniButton>
      </div>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <Card
            className="w-1/2 h-1/2 bg-white text-black"
            onClick={(e) => e.stopPropagation()}
          >
            Hello World!
          </Card>
        </Modal>
      )}
    </>
  );
}

export default App;
