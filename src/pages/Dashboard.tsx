import BriefNode from "../components/BriefNode";
import { nodes } from "../constants/contents";
import { TableView } from "../components/TableView";
import FlexRow from "../components/FlexRow";
import { ProgressBar } from "../components/ProgressBar";
import { AiFillDelete } from "react-icons/ai";
import TextView from "../components/TextView";
import strs from "../constants/strings";
export default function Dashboard() {
  const headers = [
    "",
    "Tên",
    "Tuổi",
    "Địa chỉ",
    "Tiến trình",
    "Ngày nhập viện",
    "",
  ];
  const data = [
    {
      sex: "👨‍🦰",
      name: "Nguyen Van A",
      dob: "19/06/2003",
      add: "Hanoi",
      progress: "",
      arrivalDate: "30/04/2023",
      actions: [1, 2],
    },
  ];
  const itemGenerator = (val) => (
    <tr
      onClick={() => {}}
      className=" transition ease-in-out duration-300 hover:bg-neutral-100"
    >
      <td>{val.sex}</td>
      <td>{val.name}</td>
      <td>{val.dob}</td>
      <td>{val.add}</td>
      <td>
        <ProgressBar background={`bg-green-400`} completed={10} />
      </td>
      <td>{val.arrivalDate}</td>
      <td>
        {val.actions.map((action) => (
          <AiFillDelete className="text-new-primary cursor-pointer" />
        ))}
      </td>
    </tr>
  );
  return (
    <>
      {/* Overview */}

      {/* Brief */}
      <FlexRow className={`mt-3`}>
        {nodes.map((val) => (
          <BriefNode {...val} />
        ))}
      </FlexRow>
      {/* Brief */}
      <div className="bg-new-ww m-3 rounded-xl">
        <TextView
          text={strs.dashboard.patientToday}
          className={`text-new-primary font-medium font-mono text-lg px-4 my-4`}
        />
        <TableView className={``} {...{ data, headers, itemGenerator }} />
      </div>
      {/* End of overview */}
    </>
  );
}
