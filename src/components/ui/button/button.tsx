import React from "react";
import cn from "classnames";

export default function Button({ text, onClickHandler, icon, className }) {
  return (
    <button
      type="button"
      onClick={onClickHandler}
      className={cn(
        "flex rounded-xl items-center text-lg px-4 py-3",
        className
      )}
    >
      <span> {icon}</span>
      <p className="text-center">{text}</p>
    </button>
  );
}
