import logo from "../../../assets/logo.png";
import Checkbox from "../../../assets/Checkbox.png";

const BriefNote = () => {
  return (
    <div className="p-[7.125rem] h-full w-full">
      <div className="flex justify-left items-center mb-[8.063rem]">
        <div className="w-[1.938rem] h-[2.25rem] mr-2">
          <img src={logo} alt="logo" className="w-full" />
        </div>
        <p className="text-[1.563rem] text-[#3B3B45] font-bold">Buddy</p>
      </div>
      <div className="justify-left">
        <div className="flex items-center mb-[2.313rem]">
          <div className="w-[1.5rem] h-[1.5rem] mr-[1rem]">
            <img src={Checkbox} alt="logo" className="w-full" />
          </div>
          <p className="text-[1.125rem] text-[#3B3B45] ">
            Track real-time overview of company’s financial performance.
          </p>
        </div>
        <div className="flex items-center mb-[2.313rem]">
          <div className="w-[1.5rem] h-[1.5rem] mr-[1rem]">
            <img src={Checkbox} alt="logo" className="w-full" />
          </div>
          <p className="text-[1.125rem] text-[#3B3B45] ">
            Track created projects budget against actual revenue and expenses.
          </p>
        </div>
        <div className="flex items-center mb-[7.063rem]">
          <div className="w-[1.5rem] h-[1.5rem] mr-[1rem]">
            <img src={Checkbox} alt="logo" className="w-full" />
          </div>
          <p className="text-[1.125rem] flex items-center text-[#3B3B45] ">
            Highlighted reports on budget deficit and surplus, accounting
            {/* dimensions, balance sheets and real-time sales margin estimation.
             */}
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-[0.813rem] flex items-center flex-wrap text-[#3B3B45] ">
            © 2022 Revvex. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default BriefNote;
