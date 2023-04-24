import { AiOutlineSetting } from "react-icons/ai";
import { Icon, TextView } from ".";

type BriefNodeProps = {
  title?: string,
  color?: string,
  icon?: string,
  data?: number
}

export function BriefNode({ title, color, icon, data }: BriefNodeProps) {
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
        <Icon color={color ?? "#fff"} icon={icon ?? AiOutlineSetting} className={`text-5xl ml-auto`} />
      </div>
    </div>
  );
}
