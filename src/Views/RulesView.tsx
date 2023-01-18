import Card from "../components/Card";
import { ReactComponent as Check } from "../assets/icon-check.svg";
import type { Dispatch, SetStateAction } from "react";
function RulesView({ setView }: RulesViewProps) {
  return (
    <Card className="bg-white text-black px-9 py-8 w-[20.93rem] tablet:w-[30rem] relative">
      <h1 className="text-hl uppercase text-center mb-8">rules</h1>
      <h2 className="text-hs text-purple uppercase">objective</h2>
      <p className="text-body text-black text-opacity-60 mt-4 mb-9">
        Be the first player to connect 4 of the same colored discs in a row
        (either vertically, horizontally, or diagonally).
      </p>
      <h2 className="text-hs text-purple uppercase">how to play</h2>
      <ol className="mb-7">
        <li className="flex text-body  text-black  text-opacity-60 mt-4  ">
          <div className="text-hxs text-black pr-5">1</div>
          <div className="">Red goes first in the first game.</div>
        </li>
        <li className="text-body text-black  text-opacity-60 mt-2 flex ">
          <div className="text-hxs text-black pr-5">2</div>
          <div className="">
            Players must alternate turns, and only one disc can be dropped in
            each turn.
          </div>
        </li>
        <li className="flex text-body text-black  text-opacity-60 mt-2">
          <div className="text-hxs text-black pr-5">3</div>{" "}
          <div className="">
            The game ends when there is a 4-in-a-row or a stalemate.
          </div>
        </li>
        <li className="flex text-body text-black  text-opacity-60 mt-2">
          <div className="text-hxs text-black pr-5">4</div>{" "}
          <div className="">
            The starter of the previous game goes second on the next game.
          </div>
        </li>
      </ol>
      <button className="absolute -bottom-9 mx-auto left-0 right-0">
        <Check onClick={() => setView(0)} />
      </button>
    </Card>
  );
}

type RulesViewProps = {
  setView: Dispatch<SetStateAction<number>>;
};

export default RulesView;
