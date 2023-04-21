import { Outlet } from "react-router-dom";
import FlexRow from "../components/FlexRow";
import SideBar from "../components/Sidebar";
import FlexCol from "../components/FlexCol";
import { AiOutlineDown } from "react-icons/ai";
import TextIcon from "../components/TextIcon";
import TextField from "../components/TextField";
import React from "react";

export default function Root() {
  return (
    <FlexRow className={`bg-new-gray`}>
      <SideBar className={`flex-[20%] bg-new-primary shadow-xl`} />
      <FlexCol>
        {/* Header */}
        <FlexRow className={"bg-new-ww"}>
          <div className="flex-1 p-3">
            <TextField
              className={`bg-new-primary w-80`}
              placeholder={`type here to search...`}
            />
          </div>
          <FlexRow className={`items-center cursor-pointer`}>
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
        <Outlet />
      </FlexCol>
    </FlexRow>
  );
}
