import { nodes } from "../constants/contents";
import {FlexRow, TableView, BriefNode, ProgressBar, TextView} from "../components";
import { AiFillDelete } from "react-icons/ai";
import strs from "../constants/strings";
import { TableViewProps } from "../components/TableView";
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
  interface TableModel {
    sex: string,
      name: string,
      dob: string,
      add: string,
      progress: number,
      arrivalDate: string,
      actions: [1, 2],
  }
  const data : TableModel[] = [
    {
      sex: "👨‍🦰",
      name: "Nguyen Van A",
      dob: "19/06/2003",
      add: "Hanoi",
      progress: 1,
      arrivalDate: "30/04/2023",
      actions: [1, 2],
    },
  ];
  const itemGenerator = (val:TableModel) => (
    <tr
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
  const tableContent : TableViewProps<TableModel> =  {
    headers: headers,
    data: data,
    itemGenerator: itemGenerator
  }
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
        <TableView className={``} {...tableContent} />
      </div>
      {/* End of overview */}
    </>
  );
}
