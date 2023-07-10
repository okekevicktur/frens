import { Link } from "react-router-dom";

const VerifyMail = () => {
  return (
    <div className="bg-[#F8FAFC] h-full w-full p-[7.125rem]">
      <div className="p-[4.125rem] shadow-xl justify-center bg-white w-[27.813rem] h-[26.938rem]">
        <p className="text-[1.5rem] text-[#1D1D18]  font-semibold mb-[0.5rem]">
          Verify your email
        </p>
        <p className="w-[100%] text-[0.875rem] text-[#5B6871] mb-[1.3rem]">
          A four digit OTP code has been sent to your email
          <span className="pl-1 text-[#FF8600]">seyi@zojatech.com</span>
        </p>
        <div className="flex gap-x-4  mb-[1.3rem]">
          <p className="border-[#FF8600] w-[3.125rem] border rounded-[0.375rem]  text-center items-center p-2">
            9
          </p>
          <p className="border-[#FF8600] w-[3.125rem] border rounded-[0.375rem] text-center items-center p-2">
            4
          </p>
          <p className="border-[#FF8600] w-[3.125rem] border rounded-[0.375rem] text-center items-center p-2">
            2
          </p>
          <p className="border-[#FF8600] w-[3.125rem] border rounded-[0.375rem] text-center items-center p-2">
            1
          </p>
        </div>
        <div className="w-[10rem] mb-[1.5rem]">
          <Link to="verified">
            <div className=" bg-[#FF8600] flex justify-center p-2 rounded-[0.375rem]">
              <span className="text-[#F6F8F9] text-[0.875rem]">
                Confirm code
              </span>
            </div>
          </Link>
        </div>

        <div className="flex flex-wrap text-[0.875rem] text-[#5B6871]">
          <p> Didn’t get the email?</p>
          <span className="pl-1 cursor-pointer text-[#FF8600]"> Resend</span>
        </div>
      </div>
    </div>
  );
};

export default VerifyMail;
