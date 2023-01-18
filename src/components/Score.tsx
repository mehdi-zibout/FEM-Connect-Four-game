import type { FunctionComponent, SVGProps } from "react";
import Card from "./Card";

function Score({ score, name, Icon, isReverse, className }: ScoreProps) {
  return (
    <>
      <Card
        className={`bg-white min-w-[169px] h-fit desktop:w-fit desktop:min-w-[141px] desktop:block desktop:pt-11 desktop:pb-4 text-black text-center px-9 py-2 relative tablet:flex tablet:justify-between tablet:items-center  tablet:w-[296px] 
        ${isReverse ? "tablet:flex-row-reverse" : ""}  ${className}`}
      >
        <div className="text-hxs uppercase">{name}</div>
        <div className="font-bold text-[2rem] leading-[41px] tablet:text-hl">
          {score}
        </div>
        <Icon
          className={`absolute top-0 bottom-0 my-auto  ${
            isReverse ? "-right-6 tablet:-right-8" : "-left-6 tablet:-left-7"
          } desktop:left-0 desktop:right-0 desktop:mx-auto desktop:my-0 desktop:-top-8 `}
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
  className?: string;
};

export default Score;
