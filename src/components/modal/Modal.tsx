import { FlexRow, Button } from "..";
import { useAppDispatch } from "../../app/hooks";
import strs from "../../constants/strings";
import { toggleModal } from "./modalSlice";

export function Modal() {
  const appDispatch = useAppDispatch();
  return (
    <div className=" fixed w-screen h-screen bg-gray-500">
      <span>Title</span>

      <FlexRow className={`justify-center`}>
        <Button
          action={() => appDispatch(toggleModal())}
          className={`bg-mred text-new-ww`}
        >
          {strs.examinationDialog.cancel}
        </Button>
      </FlexRow>
    </div>
  );
}
