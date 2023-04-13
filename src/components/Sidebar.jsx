import logo from "../assets/logo.svg";
import React from "react";
import { tabs } from "../constants/contents";

export function SidbarRow({ icon, text, isSelected }) {
  return (
    <div
      className={`flex items-center ${
        isSelected ? "bg-gre" : ""
      } rounded-sm p-3 hover:bg-gre`}
    >
      {React.createElement(icon, { className: "w-10 text-content-light" })}
      <span className="text-content-light font-medium ml-5">{text}</span>
    </div>
  );
}
export default function SideBar({ className }) {
  return (
    <div className={`${className} flex justify-start flex-col items-center`}>
      <div className="flex items-center mt-5 mx-3">
        <img src={logo} className="w-10 text-mred" />
        <span className="text-mred font-mono font-bold">EBV System</span>
      </div>
      <div className="flex flex-col mt-10 flex-1">
        {tabs.map((val) => (
          <SidbarRow {...val} />
        ))}
      </div>
      <span className="text-content-light justify-self-end">
        v0.1.1 by nqt-tech
      </span>
    </div>
  );
}
