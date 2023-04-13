export default function TextField({ initial, placeholder, className }) {
  return (
    <input
      type="text"
      name={"TextField - " + placeholder}
      content={initial ?? ""}
      className={`${className} px-3 py-2 border border-gray-100 rounded-lg opacity-90`}
      placeholder={placeholder}
    />
  );
}
