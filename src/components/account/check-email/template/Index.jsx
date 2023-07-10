// import React from 'react'
import BriefNote from "../../briefNote/Index";
import CheckMail from "../Index";

const CheckMailTemplate = () => {
  return (
    <div className=" w-full grid md:grid-flow-col">
      <BriefNote />
      <CheckMail />
    </div>
  );
};

export default CheckMailTemplate;
