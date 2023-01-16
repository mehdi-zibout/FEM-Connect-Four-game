import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

function MiniButton({ className, children, ...props }: MiniButtonProps) {
  return (
    <button
      className={`text-hxs text-white rounded-full bg-dark-purple hover:bg-red px-5 py-2 uppercase transition duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

type MiniButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default MiniButton;
