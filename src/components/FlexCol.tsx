import {FlexRow} from "./FlexRow";
type FlexColProps = {
  className?: string,
  children?: any
}

export function FlexCol({ className, children } : FlexColProps) {
  return <FlexRow className={`flex-col ${className}`} children={children} />;
}
