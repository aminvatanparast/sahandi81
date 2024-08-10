import React from 'react';
import {ArrowRight} from "../../icons/icons";
import {Link} from "react-router-dom";

const SidebarItem = ({img , title , link}) => {
  return (
    <>
      <li className={"py-4  [&:not(:last-child)]:border-b border-secondary-800 hover:opacity-70"}>
        <Link  className={"flex flex-row-reverse justify-between items-center cursor-pointer text-white px-5"} to={link}>
          <ArrowRight />
           <div className={"flex justify-end flex-row-reverse  items-center"}>
             <div className={'ml-4'}>
               {title}
             </div>
             <img alt={'menu-icon'} src={img} />
           </div>
        </Link>
      </li>
    </>
  );
};

export default SidebarItem;
