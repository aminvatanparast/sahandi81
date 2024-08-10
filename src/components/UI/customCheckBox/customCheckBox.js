import React from 'react';

const CustomCheckBox = () => {
  return (
    <div className="flex items-center  ">
      <input id="remember_me" name="remember_me" type="checkbox"
             className="h-4 w-4 text-main focus:ring-main border-gray-300 rounded-full"/>
      <label htmlFor="remember_me" className="cursor-pointer ml-2 mt-1 block text-sm text-gray-900">
        i accept
        <span className={"text-main ml-1 "}>
          privacy policy
        </span>
      </label>
    </div>
  );
};

export default CustomCheckBox;
