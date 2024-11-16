import React , {useState} from 'react';

const CustomCheckBox = ({name , onchange , defaultValue}) => {
  const [value, setValue] = useState(defaultValue)

  const handleChange = (e) => {
    onchange({name:e.target.name, value:!value})
    setValue(!value)
  }

  return (
    <div className="flex items-center  ">
      <input value={value} onChange={(e) => handleChange(e)} id="remember_me" name={name} type="checkbox"
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
