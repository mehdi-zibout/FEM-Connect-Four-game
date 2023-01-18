import { ReactComponent as MarkerYellow } from "../assets/marker-yellow.svg";
import { ReactComponent as MarkerRed } from "../assets/marker-red.svg";

function Marker({ isPlayer1Turn, hoveringOver, className }: MarkerProps) {
  if (!isPlayer1Turn)
    return (
      <MarkerYellow
        className={
          "absolute -top-[49px] left-[35px] transition-transform duration-500 hidden desktop:block " +
          className
        }
        style={{ transform: `translateX(${88 * hoveringOver}px)` }}
      />
    );
  else
    return (
      <MarkerRed
        className={
          "absolute -top-[49px] left-[35px] transition-transform duration-500 hidden desktop:block " +
          className
        }
        style={{ transform: `translateX(${88 * hoveringOver}px)` }}
      />
    );
}

type MarkerProps = {
  isPlayer1Turn: boolean;
  hoveringOver: number;
  className?: string;
};
export default Marker;
