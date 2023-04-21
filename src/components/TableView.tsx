import "../pages/styles/dashboard.module.css";

export function TableView({ className, headers, data, itemGenerator }) {
  return (
    <table className={`${className} talbe-auto border text-center`}>
      <thead className="border-b">
        <tr>
          {headers.map((val) => (
            <th className="px-6 py-4">{val}</th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map(itemGenerator)}</tbody>
    </table>
  );
}
