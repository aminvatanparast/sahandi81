import React from 'react';
import Loading from "../../Loading";

const CustomButton = ({title , onClick , loading}) => {
  const handleClick = () => {
    onClick()
  }
  return (
    <button
      onClick={handleClick}
      className="tracking-wide max-h-[50px] font-semibold bg-main text-white gray-100 w-full py-4 rounded-full hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
      <span className="ml-3">
          {loading ? <Loading/> : title}
      </span>
    </button>
  );
};

export default CustomButton;
