import strs from "../../constants/strings";
import Button from "../Button";
import FlexRow from "../FlexRow";

export default function Modal() {
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
