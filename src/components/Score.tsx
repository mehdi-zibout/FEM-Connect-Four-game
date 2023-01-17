import type { FunctionComponent, SVGProps } from "react";
import Card from "./Card";

function Score({ score, name, Icon, isReverse }: ScoreProps) {
  return (
    <>
      <Card className="bg-white text-black text-center px-9 py-2 relative">
        <div className="text-hxs uppercase">{name}</div>
        <div className="font-bold text-[2rem] leading-[41px] tablet:text-hl">
          {score}
        </div>
        <Icon
          className={`absolute top-0 bottom-0 my-auto  ${
            isReverse ? "-right-6" : "-left-6"
          }`}
        />
      </Card>
    </>
  );
}

type ScoreProps = {
  name: string;
  score: number;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  isReverse?: boolean;
};

export default Score;
