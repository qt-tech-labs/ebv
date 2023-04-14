import { ProgressBar } from "./ProgressBar";
import "../pages/styles/dashboard.module.css";

export function TableView() {
  return (
    <table className="talbe-auto border text-center">
      <thead className="border-b">
        <tr>
          {[
            "",
            "Tên",
            "Tuổi",
            "Địa chỉ",
            "Tiến trình",
            "Ngày nhập viện",
            "",
          ].map((val) => (
            <th className="px-6 py-4">{val}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[
          {
            sex: "👨‍🦰",
            name: "Nguyen Van A",
            dob: "19/06/2003",
            add: "Hanoi",
            progress: "",
            arrivalDate: "30/04/2023",
            action: 1,
          },
        ].map((val) => (
          <tr className=" transition ease-in-out duration-300 hover:bg-neutral-100">
            <td>{val.sex}</td>
            <td>{val.name}</td>
            <td>{val.dob}</td>
            <td>{val.add}</td>
            <td>
              <ProgressBar background={`bg-green-400`} completed={50} />
            </td>
            <td>{val.arrivalDate}</td>
            <td>{val.action}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
