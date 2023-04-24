import "../pages/styles/dashboard.module.css";

export type TableViewProps<T> = {
  className?: string,
  headers: string[],
  data: T[],
  itemGenerator: (item: T) => JSX.Element
}

export function TableView<T>({ className, headers, data, itemGenerator } : TableViewProps<T>) {
  return (
    <table className={`${className ?? ""} talbe-auto border text-center`}>
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
