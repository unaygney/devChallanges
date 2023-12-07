"use client";
import clsx from "clsx";
import React from "react";

function Button({ onClick, children, isActive }) {
  return (
    <button
      className={clsx("p-2 rounded-md", { "bg-[#6F757C]": isActive })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
