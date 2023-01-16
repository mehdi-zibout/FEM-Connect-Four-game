import type { DetailedHTMLProps, HTMLAttributes } from "react";

function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={`border-black rounded-[20px] shadow-card border-[3px] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;

type CardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
