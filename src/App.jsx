import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SideBar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className=" w-screen h-screen flex">
      <SideBar className={`flex-[20%] mr-5 shadow-xl`} />
      <Dashboard className={`flex-[80%]`} />
    </div>
  );
}

export default App;
