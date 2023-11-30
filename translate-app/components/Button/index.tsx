import React from "react";
import { clsx } from "clsx";

interface ButtonProps {
  title: string;
  className?: string;
  type: "Primary" | "Secondary" | "Success";
}

function Button({ title, className, type }: ButtonProps) {
  return <button className={clsx("text-base font-medium ")}>{title}</button>;
}

export default Button;
