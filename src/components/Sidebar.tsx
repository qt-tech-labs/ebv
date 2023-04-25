import logo from "../assets/logo.png";
import React from "react";
import { tabs } from "../constants/contents";
import { Link, useLocation } from "react-router-dom";
import { BaseType } from "./Common";

interface SidbarRowProps extends BaseType {
  icon: any;
  text: string;
  path: string;
}

function SidbarRow({ icon, text, path }: SidbarRowProps) {
  const location = useLocation();
  const selected = location.pathname == path;
  const iconClasses = `${selected ? "text-new-primary" : "text-new-ww"} w-10`;

  return (
    <li
      className={`${
        selected ? "bg-new-ww" : "bg-new-primary hover:bg-[#914d6f]"
      } rounded-lg px-3 py-2`}
    >
      <Link to={path} className="flex items-center">
        {React.createElement(icon, { className: iconClasses })}
        <span
          className={`${
            selected ? "text-new-primary" : "text-new-ww"
          }  hidden md:block`}
        >
          {text}
        </span>
      </Link>
    </li>
  );
}
export function SideBar({ className }: BaseType) {
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
