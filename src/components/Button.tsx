import { ActionType, BaseType } from "./Common";
export function Button({ action, className, children }: BaseType & ActionType) {
  return (
    <span
      onClick={() => action?.()}
      className={`${className} rounded cursor-pointer`}
    >
      {children}
    </span>
  );
}
