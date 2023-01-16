import { ReactElement } from "react";

function Card({ children, className }: CardProps) {
  return (
    <div
      className={`border-black rounded-[20px] shadow-card border-[3px] ${
        className || "bg-white text-black"
      }`}
    >
      {children}
    </div>
  );
}

export default Card;

type CardProps = {
  children: ReactElement;
  className?: string;
};
