/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as Icon } from "./assets/player-vs-player.svg";
import Button from "./components/Button";
import Card from "./components/Card";
function App() {
  return (
    <div className="text-hl bg-purple p-10 h-screen">
      <Button bgColor="white" alignStart>
        Game Rules
      </Button>
      <Button bgColor="yellow" Icon={Icon}>
        Click me
      </Button>
    </div>
  );
}

export default App;
