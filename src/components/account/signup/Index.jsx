import Subtract from "../../../assets/Subtract.png";
import Google from "../../../assets/Google.png";
import bi_chat from "../../../assets/bi_chat.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="bg-[#F8FAFC] h-full w-full p-[7.125rem]">
      <div className="p-[3.125rem] shadow-xl  bg-white w-[30.563rem] h-[28.938rem]">
        <p className="text-[1.5rem] text-[#1D1D18] font-semibold mb-[2.75rem]">
          Register your account
        </p>
        <div className="w-full">
          <Link to="signup">
            <div className="flex border-[#DDE2E4] border-2 justify-center items-center p-2 rounded-[0.375rem]">
              <img src={Subtract} alt="Mail" className="mr-2" />
              <span className="text-[#5B6871] text-[1rem]">
                Sign up with email
              </span>
            </div>
          </Link>

          <div className="flex items-center py-3">
            <hr className="w-[45%] border-1 border-[#DDE2E4]" />
            <span className="px-4 text-[#5B6871]">or</span>
            <hr className="w-[45%] border-1 border-[#DDE2E4]" />
          </div>

          <Link to="signup">
            <div className="flex border-[#DDE2E4] border-2 justify-center items-center p-2 rounded-[0.375rem]">
              <img src={Google} alt="goggle" className="mr-2" />
              <span className="text-[#5B6871] text-[1rem]">
                Sign up with Google
              </span>
            </div>
          </Link>
        </div>
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
      </div>
      <div className="cursor-pointer  shadow-2xl flex w-[7.40rem] ml-auto mt-[12.75rem] bg-[#FF8600] justify-center gap-2 p-[0.938rem] rounded-[3.813rem]">
        <span className="text-[#FFFFFF] text-[.75rem]">Get Help</span>
        <img src={bi_chat} alt="help" className="w-[1.214rem] h-[1.214rem]" />
      </div>
    </div>
  );
};

export default Signup;
