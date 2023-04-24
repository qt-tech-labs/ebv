import { FlexRow, Button } from "..";
import strs from "../../constants/strings";

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
