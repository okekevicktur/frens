import { PropTypes } from "prop-types";
import userImage from "../../../../assets/userImage.png";

const LogoutWrapper = ({ username, title }) => {
  return (
    <div className="relative mt-24 text-[0.8rem] flex flex-col justify-center text-center  mx-auto pt-4 pb-3 px-2 shadow-2xl rounded-[1rem]">
      <span className="mt-5">{username}</span>
      <span className="text-[0.7rem] text-[#818187]">{title}</span>

      <div className="bg-[#e8bf92] cursor-pointer rounded-[1rem] mt-4 p-1">
        <span className="text-[#FF8600]">Logout</span>
      </div>
      <div className="absolute bottom-24 left-9 mx-auto w-[3.75rem] h-[3.75rem]">
        <img src={userImage} alt="User Profile" className="w-full" />
      </div>
    </div>
  );
};
LogoutWrapper.propTypes = {
  username: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
};
export default LogoutWrapper;
