import { stringify } from "postcss";
import React from "react";

export default function NewProgressBar({ level }) {
  console.log(level);
  return (
    <div className="border border-primary rounded">
      <div
        className="bg-primary h-[24px] transition-all duration-700"
        style={{ width: level + "%" }}
      ></div>
    </div>
  );
}
