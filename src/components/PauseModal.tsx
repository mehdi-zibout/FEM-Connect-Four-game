import Card from "./Card";
import Button from "./Button";
import type { Dispatch, SetStateAction } from "react";

function PauseModal({ restart, setShowMenu }: PauseModalProps) {
  return (
    <Card
      className="mx-5 bg-purple w-[30rem] tablet:px-10 tablet:py-12 rounded-[40px] px-5 py-8"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-hl uppercase text-center text-white mb-11 ">pause</h2>
      <Button onClick={() => setShowMenu(false)} bgColor="white">
        Continue Game
      </Button>
      <Button
        onClick={() => restart((matchNumber) => matchNumber + 1)}
        bgColor="white"
        className="my-8"
      >
        Restart
      </Button>
      <Button bgColor="red">quit</Button>
    </Card>
  );
}

type PauseModalProps = {
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  restart: Dispatch<SetStateAction<number>>;
};
export default PauseModal;
