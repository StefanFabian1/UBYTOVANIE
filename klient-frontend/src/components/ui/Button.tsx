import clsx from "classnames";
import type { ButtonHTMLAttributes } from "react";

export default function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx(
        "rounded-md bg-primary text-white px-3 py-1 text-sm hover:bg-primary/90 disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
} 