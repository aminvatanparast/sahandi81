import React from 'react';
import {Download, Info, Logo, Save} from "../../icons/icons";

const Header = () => {
  return (
    <div className={"flex flex-row-reverse items-center border-b border-main mb-1 "}>
      <div className={"w-[100%] md:w-[calc(100%_-_262px)] bg-white flex flex-row-reverse justify-between px-1 md:px-5"}>
        <div className={"border-l border-gray-300 pl-4 flex items-center gap-4"}>
          <Save/>
          <Download/>
        </div>
        <div className={"flex items-center gap-3"}>
          <Info/>
          <span className={"mt-1 text-sm md:text-lg font-bold"}>
            Basic Information
          </span>
        </div>
      </div>
      <div className={'md:w-[262px] px-3 flex justify-center h-[70px] bg-primary-400 items-center'}>
        <Logo/>
      </div>
    </div>
  );
};

export default Header;
