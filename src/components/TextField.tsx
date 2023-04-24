export default function TextField({ initial, placeholder, className, type }) {
  return (
    <input
      type={type ?? "text"}
      name={"TextField - " + placeholder}
      content={initial ?? ""}
      className={`${className} px-3 py-1 border-none rounded-xl opacity-90 text-sm`}
      placeholder={placeholder}
    />
  );
}
