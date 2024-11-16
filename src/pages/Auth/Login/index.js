import { useState } from 'react';
import { beforeAuthRoutes } from '../../../configs/routes.js';
import {Link, useNavigate} from "react-router-dom";
import CustomInput from "../../../components/UI/customInput/customInput";
import CustomButton from "../../../components/UI/customButton/customButton";
import {AppleIcon, GoogleIcon} from "../../../icons/icons";
import Api from "../../../apis/axios";

const Login = () => {
  const navigate = useNavigate();
  const [msisdn, setMsisdn] = useState('');
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState([]);
  const api = new Api()

  async function handleSubmit() {
    setLoading(true);

    api.post("login" , form)
      .then((res) => console.log(res))
      .finally(() => setLoading(false));
  }

  const handleForm = ({name, value}) => {
    setForm((prevState) => ({...prevState, [name]: value}))
  }

  return (
    <div className="min-h-[766px] 2xl:min-h-screen bg-gray-100 text-gray-900 flex justify-center 2xl:items-center ">
      <div
        className="max-w-screen-xl  2xl:min-h-[845px] m-0 sm:m-10 bg-white shadow sm:rounded-lg flex  justify-center flex-1">
        <div className="w-full flex flex-col justify-center lg:w-1/2 xl:w-1/2 p-6 sm:p-12 bg-cover bg-contain bg-center bg-no-repeat" style={{backgroundImage: "url('/bord.svg')"}}>

          <div className="mt-12 flex flex-col items-center lg:px-16 lg:mr-[27px]">
            <h1 className="text-2xl xl:text-3xl font-extrabold mb-4">
              Sing In
            </h1>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto flex flex-col gap-5">
                <CustomInput
                  placeHolder={"email"}
                  name={"email"}
                  type={"text"}
                  onchange={(e) => handleForm(e)}
                />
                <CustomInput
                  placeHolder={"password"}
                  name={"password"}
                  type={"password"}
                  onchange={(e) => handleForm(e)}
                />
                <div className={"flex gap-5 items-center mt-3"}>
                  <div className={"w-1/2 "}>
                    <CustomButton onClick={() => handleSubmit()} title={'Sign Up'} loading={false}/>
                  </div>

                  <div className="flex justify-between items-center gap-5 w-1/2">
                    <button
                      className="w-full max-w-xs font-bold shadow-sm rounded-full py-3 max-h-[50px] bg-white text-gray-800 flex  items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                      <div className="bg-white p-2 rounded-full">
                        <GoogleIcon/>
                      </div>
                    </button>

                    <button
                      className="w-full max-w-xs max-h-[50px] font-bold shadow-sm rounded-full py-3  bg-white  text-gray-800 flex  items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                      <div className="bg-white p-1 rounded-full">
                        <AppleIcon/>
                      </div>
                    </button>

                  </div>

                </div>

                <p className="mt-6 text-md font-bold text-gray-600 text-center">
                  new here ?
                  <Link to={beforeAuthRoutes.register}>
                    <span className={"text-main font-semibold ml-2"}>create an accoun</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div className="bg-auto w-[110%] bg-auto bg-center bg-no-repeat rounded-l-[34px] w-[120%] left-[-20px] ml-[-25px] z-20 shadow-left-lg shadow-gray-900     "
               style={{backgroundImage: "url('/left.svg')" ,  boxShadow: "-10px 0 20px -5px rgba(115,115,115,0.5)"}}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
