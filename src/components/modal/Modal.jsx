import { useSelector } from "react-redux";
import strs from "../../constants/strings";
import Button from "../Button";
import FlexRow from "../FlexRow";
import { modalIsHidden } from "./modalSlice";

export default function Modal() {
  const isHidden = useSelector(modalIsHidden);
  return (
    <div className=" fixed w-screen h-screen bg-gray-500">
      <span>Title</span>

      <FlexRow className={`justify-center`}>
        <Button className={`bg-mred text-new-ww`}>
          {strs.examinationDialog.cancel}
        </Button>
      </FlexRow>
    </div>
  );
}
