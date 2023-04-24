import human from "../assets/human.png";
import {
  AiFillApple,
  AiFillFacebook,
  AiFillGoogleSquare,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FlexRow, FlexCol, TextView, TextField, Button } from "../components";
import strs from "../constants/strings";

export default function Login() {
  const iconClasses = "w-10 h-10 md:w-14 md:h-14";
  return (
    <FlexRow
      className={`bg-new-gray w-screen h-screen items-center justify-center`}
    >
      <FlexRow className={`bg-gray-100 rounded-xl`}>
        <FlexRow
          className={`items-center justify-center rounded-xl border-4 border-new-ww w-1/3 bg-[#36b6dd]`}
        >
          <img src={human} className=" object-cover w-1/2" />
        </FlexRow>
        <FlexCol className={`items-center w-2/3 justify-center`}>
          <TextView
            text={strs.login.title}
            className={`font-bold text-xl font-mono`}
          />
          <TextView className={`text-xs my-3`} text={strs.login.desc} />
          <TextField
            placeholder={strs.login.email}
            className={`w-3/4 h-10`}
            type={`email`}
          />
          <TextField
            type={`password`}
            placeholder={strs.login.pwd}
            className={`w-3/4 h-10 my-3`}
          />
          <Button className={`underline bg-transparent mb-5 ml-auto mr-4`}>
            {strs.login.forgotPwd}
          </Button>
          <Button className={`bg-new-primary text-new-ww px-4 py-2`}>
            {strs.login.loginBtn}
          </Button>
          <TextView text={strs.login.otherMethods} className={`my-5`} />
          <FlexRow className={`items-center`}>
            <Button>
              <AiFillFacebook className={` text-blue-800 ${iconClasses}`} />
            </Button>
            <Button className={`mx-2 md:mx-3`}>
              <FcGoogle className={iconClasses} />
            </Button>
            <Button>
              <AiFillApple className={iconClasses} />
            </Button>
          </FlexRow>
        </FlexCol>
      </FlexRow>
    </FlexRow>
  );
}
