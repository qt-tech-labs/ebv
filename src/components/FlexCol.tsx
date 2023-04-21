import React, { ReactNode } from "react";
import FlexRow from "./FlexRow";
type FlexColProps = {
  className?: string,
  children?: ReactNode
}

export default function FlexCol({ className, children } : FlexColProps) {
  return <FlexRow className={`flex-col ${className}`} children={children} />;
}
