import React, {useState} from 'react';

const CustomInput = ({placeHolder, type = "text", onchange, name}) => {
  const [value, setvalue] = useState()
  const handleChange = (e) => {
    onchange({name, value})
    setvalue(e.target.value)
  }
  return (
    <>
      <input value={value} onChange={(e) => handleChange(e)} type={type}
             className='bg-primary-900 text-left border-1 outline-none border-white-200 rounded-full py-3 w-full px-4  placeholder-gray-400 text-white-900'
             placeholder={placeHolder}/>
    </>
  );
};

export default CustomInput;
