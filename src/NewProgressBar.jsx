import { stringify } from "postcss";
import React from "react";

export default function NewProgressBar({ level }) {
  console.log(level);
  return (
    <div className="border-[1px] border-primary-borders bg-primary-light rounded">
      <div
        className="bg-primary h-[24px] transition-all duration-700 rounded"
        style={{ width: level + "%" }}
      ></div>
    </div>
  );
}
