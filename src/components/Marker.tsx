import { ReactComponent as MarkerYellow } from "../assets/marker-yellow.svg";
import { ReactComponent as MarkerRed } from "../assets/marker-red.svg";

function Marker({ isPlayer1Turn, hoveringOver }: MarkerProps) {
  if (!isPlayer1Turn)
    return (
      <MarkerYellow
        className="absolute -top-10 left-[35px] transition-transform duration-500"
        style={{ transform: `translateX(${88 * hoveringOver}px)` }}
      />
    );
  else
    return (
      <MarkerRed
        className="absolute -top-10 left-[35px] transition-transform duration-500"
        style={{ transform: `translateX(${88 * hoveringOver}px)` }}
      />
    );
}

type MarkerProps = {
  isPlayer1Turn: boolean;
  hoveringOver: number;
};
export default Marker;
