import logo from "../assets/img/logo.png"
import save from "../assets/icon/save.png"
import download from "../assets/icon/download.png"
import info from "../assets/icon/info.png"
import arrowRight from "../assets/icon/arrow-right.svg"
import setting from "../assets/icon/setting.png"
import menu from "../assets/icon/menu/menu.png"
import close from "../assets/icon/menu/close.svg"

export const AppleIcon = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
         className="bi bi-apple" viewBox="0 0 16 16">
      <path
        d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
      <path
        d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
    </svg>
  )
}

export const GoogleIcon = () => {
  return(
    <svg className="w-4" viewBox="0 0 533.5 544.3">
      <path
        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
        fill="#4285f4"/>
      <path
        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
        fill="#34a853"/>
      <path
        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
        fill="#fbbc04"/>
      <path
        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
        fill="#ea4335"/>
    </svg>
  )
}

export const Logo = () => {
  return(
    <div className={"w-[100px] flex justify-center"}>
      <img alt={"logo"} src={logo}/>
    </div>
  )
}

export const Save = () => {
  return(
    <div className={" flex justify-center"}>
      <img alt={"Save"} src={save}/>
    </div>
  )
}

export const Download = () => {
  return(
    <div className={"flex justify-center"}>
      <img alt={"Download"} src={download}/>
    </div>
  )
}

export const Info = () => {
  return(
    <div className={"flex justify-center"}>
      <img alt={"Info"} src={info}/>
    </div>
  )
}

export const ArrowRight = () => {
  return(
    <div className={"flex justify-center w-[15px]"}>
      <img alt={"arrowRight"} src={arrowRight}/>
    </div>
  )
}

export const Setting = () => {
  return(
    <div className={"flex justify-center w-[20px]"}>
      <img alt={"setting"} src={setting}/>
    </div>
  )
}

export const Menu = () => {
  return(
    <div className={"flex justify-center w-[20px]"}>
      <img alt={"menu"} src={menu}/>
    </div>
  )
}

export const Close = () => {
  return(
    <div className={"flex justify-center w-[20px]"}>
      <img alt={"close"} src={close}/>
    </div>
  )
}
