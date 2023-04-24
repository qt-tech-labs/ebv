type ButtonAction = () => void
type ButtonProps = {
  action?: ButtonAction,
  className?: string,
  children?: any
}
export default function Button({ action, className, children }: ButtonProps) {
  return (
    <span className={`${className} rounded cursor-pointer`}>{children}</span>
  );
}
