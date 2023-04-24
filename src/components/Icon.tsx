import React from "react";
import { BaseType } from "./common";
interface IconProps extends BaseType {
  icon: string,
  color: string
}
export function Icon({ icon, className, color }: IconProps) {
  return React.createElement(icon, {
    className: className,
    style: { color: color },
  });
}
