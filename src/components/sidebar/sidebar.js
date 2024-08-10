import React, {useState} from 'react';
import SidebarItem from "./sidebarItem";
import icon1 from "../../assets/icon/menu/d-1.png"
import {Link} from "react-router-dom";
import {Close, Menu, Setting} from "../../icons/icons";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <div onClick={() => setToggle(!toggle)}
           className={`md:hidden w-10 h-[50px] bg-primary-400 cursor-pointer flex items-center justify-center rounded-r-lg ${toggle && "translate-x-[262px]"} border-l border-main`}>
        {
          toggle ? <Close/> : <Menu/>
        }

      </div>
      <aside id="sidebar-multi-level-sidebar"
             className={`fixed top-[71px] left-0 z-40 w-[262px] h-screen transition-transform ${!toggle && "-translate-x-full"} sm:translate-x-0`}
             aria-label="Sidebar">
        <div className="h-full overflow-y-auto bg-primary-400  pb-32 ">
          <div className={"py-4 border-b-2 border-secondary-600 hover:opacity-70"}>
            <Link className={"flex flex-row-reverse justify-between items-center cursor-pointer text-white px-5"}
                  to={"/"}>
              <Setting/>
              <div className={"flex justify-end flex-row-reverse  items-center"}>
                <div>
                  {"Project name"}
                </div>
              </div>
            </Link>
          </div>
          <div className={" border-b-2 border-secondary-600"}>
            <Link className={"flex py-4  flex-row-reverse justify-end items-center cursor-pointer text-main px-5"}
                  to={"/"}>
              <div className={'ml-4'}>
                {"Master Well Plan"}
              </div>
              <img alt={'menu-icon'} src={icon1}/>
            </Link>
            <Link className={"flex pb-4  flex-row-reverse justify-end items-center cursor-pointer text-white px-5"}
                  to={"/"}>
              <div className={'ml-4'}>
                {"Basic Information"}
              </div>
              <img alt={'menu-icon'} src={icon1}/>
            </Link>
          </div>
          <ul className=" font-medium">
            <SidebarItem img={icon1} title={"Well Trajectory"} link={"/"}/>
            <SidebarItem img={icon1} title={"Bit & BHA"} link={"/"}/>
            <SidebarItem img={icon1} title={"Casing Design"} link={"/"}/>
            <SidebarItem img={icon1} title={"Hydraulic"} link={"/"}/>
            <SidebarItem img={icon1} title={"Geomechanics"} link={"/"}/>
            <SidebarItem img={icon1} title={"ROP Optimization"} link={"/"}/>
            <SidebarItem img={icon1} title={"Risk Monitoring"} link={"/"}/>
            <SidebarItem img={icon1} title={"Project Management"} link={"/"}/>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
