import { Link } from "react-router-dom";
import verifiedMail from "../../../assets/verifiedMail.png";

const VerifiedMail = () => {
  return (
    <div className="bg-[#F8FAFC] h-full w-full p-[7.125rem]">
      <div className="p-[4.125rem] shadow-xl mx-auto justify-center items-center bg-white w-[30.563rem] h-[24.063rem]">
        <img
          src={verifiedMail}
          alt="VerifiedMail"
          className="flex mx-auto mb-[2rem]"
        />
        <p className="text-[1.5rem] text-center text-[#1D1D18]  font-semibold mb-[0.5rem]">
          Email verified !
        </p>
        <p className="w-[100%] text-center text-[0.875rem] text-[#5B6871] mb-[1.3rem]">
          The verified email address will be associated with your account. Click
          on the button below to continue
        </p>
        <div className="w-[10rem] mx-auto mb-[1.5rem]">
          <Link to="">
            <div className=" bg-[#FF8600] flex justify-center p-2 rounded-[0.375rem]">
              <span className="text-[#F6F8F9] text-[0.875rem]">Continue</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifiedMail;
