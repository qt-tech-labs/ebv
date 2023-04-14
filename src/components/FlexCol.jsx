import FlexRow from "./FlexRow";

export default function FlexCol({ className, children }) {
  return <FlexRow className={`flex-col ${className}`} children={children} />;
}
