import {
  AiFillCalendar,
  AiFillDashboard,
  AiOutlineUserDelete,
} from "react-icons/ai";

import { GiMedicines } from "react-icons/gi";
import { FaUserInjured } from "react-icons/fa";

import { xcolors } from "./colors";

const tabs = [
  {
    icon: AiFillDashboard,
    text: "Dashboard",
    path: "/",
    isSelected: false,
  },
  {
    icon: AiFillCalendar,
    text: "Appointments",
    path: "/appointments",
    isSelected: true,
  },
  {
    icon: FaUserInjured,
    text: "Patients",
    path: "/patients",
    isSelected: false,
  },
];

const nodes = [
  {
    icon: FaUserInjured,
    title: "Tổng số",
    color: xcolors.gre,
    data: 123,
  },
  {
    icon: GiMedicines,
    title: "Đang điều trị",
    color: xcolors.mred,
    data: 52,
  },
  {
    icon: AiOutlineUserDelete,
    title: "Ra viện",
    color: xcolors.content.dark,
    data: 6,
  },
];

export { nodes, tabs };
