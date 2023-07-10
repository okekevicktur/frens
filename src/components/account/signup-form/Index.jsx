import Name from "../../../assets/Name.png";
import Mail from "../../../assets/Mail.png";
import bi_chat from "../../../assets/bi_chat.png";
import Password from "../../../assets/Password.png";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <div className="bg-[#F8FAFC] h-full w-full p-[7.125rem]">
      <form className="p-[3.125rem] shadow-xl  bg-white w-[30.563rem] h-[35.73rem]">
        <p className="text-[1.5rem] text-[#1D1D18] font-semibold mb-[0.45rem]">
          Register your account
        </p>
        <p className="text-[0.813rem] text-[#5B6871] font-semibold mb-[1.4rem]">
          Proceed to create account and setup your organization
        </p>
        <div className="w-full grid  gap-y-4">
          <div className="flex gap-x-6">
            <div className="flex hover:border-[#FF8600] h-[2.5rem] gap-x-3 pl-4 border-[#DDE2E4] border-2  items-center px-2 rounded-[0.375rem]">
              <img src={Name} alt="Mail" className="mr-1" />
              <input
                className="text-[#5B6871] w-full outline-none h-full placeholder-[#5B6871] text-[0.875rem]"
                placeholder="First Name"
              />
            </div>
            <div className="flex  hover:border-[#FF8600] h-[2.5rem] gap-x-3 pl-4 border-[#DDE2E4] border-2  items-center px-2 rounded-[0.375rem]">
              <img src={Name} alt="Mail" className="mr-1" />
              <input
                className="text-[#5B6871] w-full outline-none h-full placeholder-[#5B6871] text-[0.875rem]"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="flex  hover:border-[#FF8600] h-[2.5rem] gap-x-3 pl-4 border-[#DDE2E4] border-2  items-center px-2 rounded-[0.375rem]">
            <img src={Mail} alt="mail" className="mr-1" />
            <input
              className="text-[#5B6871] focus:border-[#FF8600] w-full outline-none h-full placeholder-[#5B6871] text-[0.875rem]"
              placeholder="Work email"
              type="email"
            />
          </div>
          <div className="group">
            <div className="flex group-active:border-[#FF8600] h-[2.5rem] gap-x-3 pl-4 border-[#DDE2E4] border-2  items-center px-2 rounded-[0.375rem]">
              <img src={Password} alt="mail" className="mr-1" />
              <input
                className="text-[#5B6871] group-hover:border-[#FF8600] w-full outline-none h-full placeholder-[#5B6871] text-[0.875rem]"
                placeholder="Password"
                type="password"
              />
            </div>
          </div>
        </div>
        <p className="flex justify-end text-[0.75rem] text-[#5B6871]">15/15</p>
        <Link to="checkmail">
          <button
            type="submit"
            className="w-full h-[2.5rem] hover:bg-[#FF8600] cursor-pointer text-[#F6F8F9] text-[0.875rem] rounded-[0.45rem] mt-8 bg-[#ECEDED]"
          >
            Create account
          </button>
        </Link>

        <div className="justify-left flex-wrap text-[#5B6871] mb-[2.5rem] text-[0.813rem]  py-7">
          <span className="pr-1 ">
            By clicking the button above, you agree to our{" "}
          </span>
          <span className="pr-1 cursor-pointer text-[#FF8600] ">
            Terms of Service
          </span>
          <span className="pr-1"> and </span>
          <span className="pr-1 cursor-pointer text-[#FF8600]">
            Privacy Policy.
          </span>
        </div>
        <div className="flex flex-wrap text-[0.875rem] text-[#5B6871]">
          <p>Already have an account?</p>
          <span className="pl-1 cursor-pointer text-[#FF8600]"> Login</span>
        </div>
      </form>
      <div className="cursor-pointer  shadow-2xl flex w-[7.40rem] ml-auto mt-[12.75rem] bg-[#FF8600] justify-center gap-2 p-[0.938rem] rounded-[3.813rem]">
        <span className="text-[#FFFFFF] text-[.75rem]">Get Help</span>
        <img src={bi_chat} alt="help" className="w-[1.214rem] h-[1.214rem]" />
      </div>
    </div>
  );
};

export default SignupForm;
