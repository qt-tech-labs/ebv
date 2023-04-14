export default function Button({ action, className, children }) {
  <span onClick={() => action()} className={`${className} rounded`}>
    {children}
  </span>;
}
