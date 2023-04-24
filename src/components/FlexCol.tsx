import FlexRow from "./FlexRow";
type FlexColProps = {
  className?: string,
  children?: any
}

export default function FlexCol({ className, children } : FlexColProps) {
  return <FlexRow className={`flex-col ${className}`} children={children} />;
}
