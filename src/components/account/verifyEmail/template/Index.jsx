// import React from 'react'
import BriefNote from "../../briefNote/Index";
import VerifyMail from "../verify/Index";

const VerifyMailTemplate = () => {
  return (
    <div className=" w-full grid md:grid-flow-col">
      <BriefNote />
      <VerifyMail />
    </div>
  );
};

export default VerifyMailTemplate;
