import { nodes } from "../../constants/contents";
import {
  FlexRow,
  TableView,
  BriefNode,
  ProgressBar,
  TextView,
  Icon,
} from "../../components";
import "./dashboard.module.css";
import { AiFillEdit } from "react-icons/ai";
import strs from "../../constants/strings";
import { useAppDispatch } from "../../app/hooks";
import { toggleModal } from "../../components/modal/modalSlice";
import { xcolors } from "../../constants/colors";
export default function Dashboard() {
  const appDispatch = useAppDispatch();
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
    sex: string;
    name: string;
    dob: string;
    add: string;
    progress: number;
    arrivalDate: string;
    actions: [1, 2];
  }
  const data: TableModel[] = [
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
  const itemGenerator = (val: TableModel) => (
    <tr className=" transition ease-in-out duration-300 hover:bg-neutral-100">
      <td>{val.sex}</td>
      <td>{val.name}</td>
      <td>{val.dob}</td>
      <td>{val.add}</td>
      <td>
        <ProgressBar background={`bg-green-400`} completed={10} />
      </td>
      <td>{val.arrivalDate}</td>
      <td>
        <Icon
          action={() => {
            console.log("Clicked!!!!");
            appDispatch(toggleModal());
          }}
          icon={AiFillEdit}
          color={xcolors.new.primary}
          className="cursor-pointer"
        />
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
        <TableView
          className={``}
          {...{
            headers: headers,
            data: data,
            itemGenerator: itemGenerator,
          }}
        />
      </div>
      {/* End of overview */}
    </>
  );
}
