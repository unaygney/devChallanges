import React from "react";
import { clsx } from "clsx";

function Button({ title, className, isActive, onClick, id, tag }) {
  const handleClick = () => {
    if (onClick && id !== undefined) {
      onClick(id);
    }
  };
  return (
    <button
      tag={tag}
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
