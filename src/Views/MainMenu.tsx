import Card from "../components/Card";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as PlayVsPlayerIcon } from "../assets/player-vs-player.svg";
import { ReactComponent as PlayVsCpuIcon } from "../assets/player-vs-cpu.svg";
import Button from "../components/Button";
function MainMenu() {
  return (
    <Card className="w-full p-5 border-opacity-0 shadow-none tablet:shadow-card tablet:border-opacity-100 tablet:bg-purple tablet:w-[30rem] tablet:px-10 tablet:py-16 rounded-[40px]">
      <Logo className="w-fit mx-auto mb-20" />
      <Button Icon={PlayVsCpuIcon} bgColor="red" className="mb-8">
        play vs cpu
      </Button>
      <Button Icon={PlayVsPlayerIcon} bgColor="yellow" className="mb-8">
        play vs player
      </Button>
      <Button alignStart bgColor="white">
        Game Rules
      </Button>
    </Card>
  );
}

export default MainMenu;
