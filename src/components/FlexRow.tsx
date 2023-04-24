type FlexRowProps = {
  className?: string,
  children?: JSX.Element | JSX.Element[]
}
export function FlexRow({ className, children }: FlexRowProps) {
  return <div className={`flex ${className}`}>{children}</div>;
}
