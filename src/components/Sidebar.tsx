import logo from "../assets/logo.svg";
import React from "react";
import { tabs } from "../constants/contents";
import { Link } from "react-router-dom";

export function SidbarRow({ icon, text, path, isSelected }) {
  const iconClasses = `${isSelected ? "text-new-primary" : "text-new-ww"} w-10`;
  return (
    <li
      className={`${
        isSelected ? "bg-new-ww" : "bg-new-primary hover:bg-[#914d6f]"
      } rounded-lg px-3 py-2`}
    >
      <Link to={path} className="flex items-center">
        {React.createElement(icon, { className: iconClasses })}
        <span
          className={`${
            isSelected ? "text-new-primary" : "text-new-ww"
          }  hidden md:block`}
        >
          {text}
        </span>
      </Link>
    </li>
  );
}
export default function SideBar({ className }) {
  return (
    <div className={`${className} flex justify-start flex-col items-center`}>
      <div className="flex items-center mt-5 mx-3">
        <img src={logo} className="w-10 text-mred" />
        <span className=" text-new-ww font-mono font-bold">HEALTH CARE</span>
      </div>
      <ul className="flex-1 mt-10">
        {tabs.map((val) => (
          <SidbarRow {...val} />
        ))}
      </ul>
      <span className="text-content-light justify-self-end">
        v0.1.1 by nqt-tech
      </span>
    </div>
  );
}
