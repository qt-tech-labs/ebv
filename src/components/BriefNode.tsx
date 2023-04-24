import { AiOutlineSetting } from "react-icons/ai";
import TextView from "./TextView";
import Icon from "./Icon";

type BriefNodeProps = {
  title?: string,
  color?: string,
  icon?: any,
  data?: string
}

export default function BriefNode({ title, color, icon, data }: BriefNodeProps) {
  return (
    <div className="flex flex-col flex-1 mx-3 bg-white rounded-lg p-4">
      <div className="flex">
        <TextView text={title} className={`text-content-dark text-lg`} />
        <span className="p-1 flex items-center ml-auto">
          <AiOutlineSetting />
        </span>
      </div>
      <div className="flex items-center mt-3">
        <div className="flex flex-col justify-center">
          <TextView text={`Bệnh nhân`} className="font-light " />
          <TextView
            text={data}
            className={`text-content-dark text-3xl font-bold`}
          />
        </div>
        <Icon color={color} icon={icon} className={`text-5xl ml-auto`} />
      </div>
    </div>
  );
}
