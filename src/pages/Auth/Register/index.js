import Api, {register} from '../../../apis/axios';
import {beforeAuthRoutes} from '../../../configs/routes.js';
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import CustomInput from "../../../components/UI/customInput/customInput";
import CustomButton from "../../../components/UI/customButton/customButton";
import CustomCheckBox from "../../../components/UI/customCheckBox/customCheckBox";
import {AppleIcon, GoogleIcon} from "../../../icons/icons";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState([]);
  const [loading, setLoading] = useState(false);
  const api = new Api()

  async function handleSubmit() {
     setLoading(true);

    api.post("register" , form)
      .then((res) => console.log(res))
      .finally(() => setLoading(false));
  }

  const handleForm = ({name, value}) => {
    setForm((prevState) => ({...prevState, [name]: value}))
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center 2xl:items-center">
      <div
        className="max-w-screen-xl   2xl:min-h-[845px] m-0 sm:m-10 bg-white shadow sm:rounded-lg flex  justify-center flex-1">
        <div className="w-full lg:w-1/2 xl:w-1/2 p-6 sm:p-12 bg-cover bg-contain bg-center bg-no-repeat" style={{backgroundImage: "url('/bord.svg')"}}>

          <div className="mt-12 flex flex-col items-center lg:px-16">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              create an account
            </h1>
            <p className={"text-gray-500 pt-2"}>
              {"? your is gooood  "}
            </p>
            <div className="w-full flex-1 mt-8">
              <div className="flex justify-between items-center gap-5">

                <button
                  className="w-full max-w-xs font-bold shadow-sm rounded-full py-3 max-h-[50px] bg-white text-gray-800 flex  items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="bg-white p-2 rounded-full hidden md:flex">
                    <GoogleIcon/>
                  </div>
                  <span className="ml-2 text-sm mt-1">
                      Sign Up with Google
                  </span>
                </button>

                <button
                  className="w-full max-w-xs max-h-[50px] font-bold shadow-sm rounded-full py-3  bg-white  text-gray-800 flex  items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="bg-white p-1 rounded-full hidden md:flex">
                    <AppleIcon/>
                  </div>
                  <span className="ml-2 text-sm mt-1">
                      Sign Up with apple
                  </span>
                </button>


              </div>

              <div className="flex w-full items-center gap-2 py-10 text-sm text-slate-600">
                <div className="h-px w-full bg-secondary-500"></div>
                <div className=" w-full text-center">
                  OR width email
                </div>
                <div className="h-px w-full bg-secondary-500"></div>
              </div>

              <div className="mx-auto gap-5 flex flex-col">
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
                <CustomInput
                  placeHolder={"repeat password"}
                  name={"repeatpassword"}
                  type={"password"}
                  onchange={(e) => handleForm(e)}
                />

                <CustomCheckBox
                  defaultValue={false}
                  name={"accept"}
                  type={"checkBox"}
                  onchange={(e) => handleForm(e)}
                />

                <CustomButton disable={form.accept} onClick={() => handleSubmit()} title={'Sign Up'} loading={false}/>

                <p className="mt-6 text-md font-bold text-gray-600 text-center">
                  already have an account sign in?
                  <Link to={beforeAuthRoutes.login}>
                    <span className={"text-main font-semibold ml-2"}>Sign in</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div className="bg-auto w-full bg-auto bg-center bg-no-repeat"
               style={{backgroundImage: "url('/rightSide.svg')"}}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
