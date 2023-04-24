import { Outlet } from "react-router-dom";
import FlexRow from "../components/FlexRow";
import SideBar from "../components/Sidebar";
import FlexCol from "../components/FlexCol";
import { AiOutlineDown } from "react-icons/ai";
import TextIcon from "../components/TextIcon";
import TextField from "../components/TextField";
<<<<<<<< HEAD:src/pages/root.tsx
import React from "react";
========
import Modal from "../components/modal/Modal";
>>>>>>>> main:src/pages/root.jsx

export default function Root() {
  return (
    <FlexRow className={`bg-new-gray w-screen h-screen absolute`}>
      <SideBar className={`w-20 md:w-[200px] bg-new-primary shadow-xl`} />
      <FlexCol className={`flex-1`}>
        {/* Header */}
        <FlexRow className={"bg-new-ww"}>
          <div className="flex-1 p-3">
            <TextField
              className={`bg-new-primary w-80  text-new-ww placeholder-new-ww`}
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
      {/* <Modal /> */}
    </FlexRow>
  );
}
