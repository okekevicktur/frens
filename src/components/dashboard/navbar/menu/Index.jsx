import logo from "../../../../assets/logo.png";
import account from "../../../../assets/account.png";
import users from "../../../../assets/users.png";
import Mail from "../../../../assets/Mail.png";
import growth from "../../../../assets/growth.png";
import dollar from "../../../../assets/dollar.png";
import Setting from "../../../../assets/Setting.png";

import { PropTypes } from "prop-types";

const MenuWrap = ({ children }) => {
  return (
    <div className="w-[18.265] ">
      <div className="flex gap-x-1 justify-center w-[7.5rem] h-[2.25rem] mx-auto">
        <img src={logo} alt="logo" className="w-5 h-5 flex" />
        <span className="text-l font-bold">Frens</span>
      </div>
      <div className="mt-2 flex flex-col text-[#818187] gap-y-3 h-[21.7rem] w-full text-[0.8rem]">
        <div className=" flex cursor-pointer justify-left px-4 py-1 gap-x-2 items-center">
          <img src={account} alt="logo" className="w-4 h-4 flex " />
          <span className="text-[#FF8600] justify-center  ">My Portfolio</span>
        </div>
        <div className="border-l-2 flex cursor-pointer justify-left px-4 py-1 gap-x-2 items-center">
          <img src={users} alt="logo" className="w-4 h-4 flex " />
          <span>My Group</span>
        </div>
        <div className=" flex cursor-pointer justify-left px-4 py-1 gap-x-2 items-center">
          <img src={Mail} alt="logo" className="w-4 h-4 flex " />
          <span>Messages</span>
        </div>
        <div className=" flex cursor-pointer justify-left px-4 py-1 gap-x-2 items-center">
          <img src={growth} alt="logo" className="w-4 h-4 flex " />
          <span>Analytics</span>
        </div>
        <div className=" flex cursor-pointer justify-left px-4 py-1 gap-x-2 items-center">
          <img src={dollar} alt="logo" className="w-4 h-4 flex " />
          <span>Pack</span>
        </div>
        <div className=" flex cursor-pointer justify-left px-4 py-1 gap-x-2 items-center">
          <img src={Setting} alt="logo" className="w-4 h-4 flex " />
          <span>Settings</span>
        </div>
      </div>

      {children}
    </div>
  );
};
MenuWrap.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MenuWrap;
