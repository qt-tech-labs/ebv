import React from "react";
import { ReactElement } from "react";

type FlexRow = {
  className?: string,
  children?: ReactElement
}
export default function FlexRow({ className, children }) {
  return <div className={`flex ${className}`}>{children}</div>;
}
