export default function Button({ action, className, children }) {
  return (
    <span className={`${className} rounded cursor-pointer`}>{children}</span>
  );
}
