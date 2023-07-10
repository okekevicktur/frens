import { Link } from "react-router-dom";
import sentmail from "../../../assets/sentmail.png";

const CheckMail = () => {
  return (
    <div className="bg-[#F8FAFC] h-full w-full p-[7.125rem]">
      <div className="p-[4.125rem] shadow-xl text-center items-center mx-auto justify-center bg-white w-[30.563rem] h-[28.938rem]">
        <img src={sentmail} alt="Mail" className="flex mx-auto " />
        <p className="text-[1.5rem] text-[#1D1D18]  font-semibold mb-[0.5rem]">
          Check your mailbox !
        </p>
        <p className="w-[90%] mx-auto text-[0.875rem] text-[#5B6871] mb-[1.3rem]">
          We’ve sent an email to seyi@zojatech.com with a an OTP to confirm your
          account. Check your inbox to activate your account.
        </p>
        <div className="w-[10rem] mx-auto mb-[1.5rem]">
          <Link to="/verify">
            <div className=" bg-[#FF8600] flex justify-center items-center p-2 rounded-[0.375rem]">
              <span className="text-[#F6F8F9] text-[0.875rem]">
                Confirm Email
              </span>
            </div>
          </Link>
        </div>

        <div className="flex justify-center flex-wrap text-[0.875rem] text-[#5B6871]">
          <p> Didn’t get the email?</p>
          <span className="pl-1 cursor-pointer text-[#FF8600]"> Resend</span>
        </div>
      </div>
    </div>
  );
};

export default CheckMail;
