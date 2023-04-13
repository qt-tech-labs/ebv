import { AiOutlineDown } from "react-icons/ai";
import TextView from "../components/TextView";
import TextIcon from "../components/TextIcon";
import TextField from "../components/TextField";
import BriefNode from "../components/BriefNode";
import { nodes } from "../constants/contents";

export default function Dashboard({ className }) {
  return (
    <div className={`${className} bg-slate-100 flex flex-col `}>
      {/* Header */}
      <div className="flex bg-white">
        <div className="flex-1">
          <TextField placeholder={`Search`} />
        </div>
        <div className="flex items-center">
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
        </div>
      </div>
      {/* Header */}

      {/* Overview */}
      <TextView
        text="Ngày 14, tháng 4, 2023"
        className={`text-lg font-bold my-10`}
      />

      {/* Brief */}
      <div className="flex flex-row">
        {nodes.map((val) => (
          <BriefNode {...val} />
        ))}
      </div>
      {/* Brief */}

      {/* Overview */}
    </div>
  );
}
