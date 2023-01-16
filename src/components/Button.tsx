import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
  SVGProps,
} from "react";
import Card from "./Card";

function Button({
  bgColor,
  Icon,
  className,
  children,
  alignStart,
  ...props
}: ButtonProps) {
  return (
    <Card
      className={`${getButtonStyles(bgColor, Icon)} text-hm  ${className} `}
    >
      <button
        className={`w-full h-full p-5 uppercase ${
          Icon
            ? "flex justify-between items-center"
            : alignStart
            ? "text-left"
            : "text-center"
        }`}
        {...props}
      >
        <div className=""> {children}</div>
        {Icon && <Icon />}
      </button>
    </Card>
  );
}

type ButtonProps = {
  bgColor: "white" | "red" | "yellow";
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  alignStart?: boolean;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

function getButtonStyles(
  bgColor: "white" | "red" | "yellow",
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>
): string {
  let className = "hover:border-dark-purple hover:shadow-card-purple";
  switch (bgColor) {
    case "red":
      return className + " bg-red text-white";
    case "white":
      return className + " bg-white text-black";
    case "yellow":
      return className + " bg-yellow text-black";
  }
}
export default Button;
