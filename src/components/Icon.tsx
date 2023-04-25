import React from "react";
import { ActionType, BaseType } from "./Common";
interface IconProps extends BaseType, ActionType {
  icon: string;
  color: string;
}
export function Icon({ icon, className, color, action }: IconProps) {
  return (
    <span onClick={() => action()}>
      {React.createElement(icon, {
        className: className,
        style: { color: color },
      })}
    </span>
  );
}
