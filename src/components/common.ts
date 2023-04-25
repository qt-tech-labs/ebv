export interface BaseType {
  className?: string;
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
}

export interface ActionType<T = Record<string, never>> {
  action?: (val?: T) => void;
}
