import { AiOutlineDown } from "react-icons/ai";
import TextView from "../components/TextView";
import TextIcon from "../components/TextIcon";
import TextField from "../components/TextField";
import BriefNode from "../components/BriefNode";
import { nodes } from "../constants/contents";
import { TableView } from "../components/TableView";
import FlexRow from "../components/FlexRow";
import FlexCol from "../components/FlexCol";

export default function Dashboard({ className }) {
  return (
    <FlexCol className={`bg-slate-50`}>
      {/* Header */}
      <FlexRow className={"bg-ww"}>
        <div className="flex-1">
          <TextField placeholder={`Search`} />
        </div>
        <FlexRow className={`items-center`}>
          {/* Avatar */}
          <img
            src="https://picsum.photos/200/300"
            alt="avatar"
            className="rounded-full w-8 h-8 object-fill shadow-md border"
          />
          <TextIcon
            text={`Jhun Sung`}
            icon={AiOutlineDown}
            props={{
              textClasses: "font-light mx-4",
              iconClasses: "w-3",
            }}
          />
        </FlexRow>
      </FlexRow>
      {/* Header */}

      {/* Overview */}
      <TextView
        text="Ngày 14, tháng 4, 2023"
        className={`text-lg font-bold my-10`}
      />

      {/* Brief */}
      <FlexRow>
        {nodes.map((val) => (
          <BriefNode {...val} />
        ))}
      </FlexRow>
      {/* Brief */}

      <TextView text={`Đang điều trị`} />

      <TableView />
      {/* End of overview */}
    </FlexCol>
  );
}
