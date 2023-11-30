import React from "react";
import { clsx } from "clsx";

interface ButtonProps {
  title: string;
  className?: string;
  type: "Primary" | "Secondary" | "Success";
  isActive?: boolean;
  id?: any;
  onClick?: (id: number) => void;
}

function Button({
  title,
  className,
  type,
  isActive,
  onClick,
  id,
}: ButtonProps) {
  const handleClick = () => {
    if (onClick && id !== undefined) {
      onClick(id);
    }
  };
  return (
    <button
      onClick={handleClick}
      className={clsx(
        "text-base font-medium   px-2 py-1 ",
        {
          "bg-[#4d5562] text-white  rounded-md ": isActive,
        },
        { "text-[#4d5562]": !isActive }
      )}
    >
      {title}
    </button>
  );
}

export default Button;
