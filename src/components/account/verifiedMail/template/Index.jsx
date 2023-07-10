// import React from 'react'
import BriefNote from "../../briefNote/Index";
import VerifiedMail from "../Index";

const VerifiedMailTemplate = () => {
  return (
    <div className=" w-full grid md:grid-flow-col">
      <BriefNote />
      <VerifiedMail />
    </div>
  );
};

export default VerifiedMailTemplate;
