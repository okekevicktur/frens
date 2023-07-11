import { PropTypes } from "prop-types";
import Bell from "../../../assets/bell.png";
import search from "../../../assets/search.png";

const HeaderWrap = ({ headerTitle }) => {
  return (
    <div className="flex bg-gray-50 justify-between p-2 h-[3rem] w-[70.87rem]">
      <span className="text-[1.563] font-extrabold">{headerTitle}</span>
      <div className="flex w-[60%] md:w-[38%] justify-between gap-x-3">
        <div className="bg-white rounded-xl w-[20.375rem] px-2 py-1 flex max-h-fit items-center justify-left">
          <img src={search} alt="search" className="w-4 mx-2 h-4 flex  " />
          <input
            type="search"
            className="outline-none h-full w-full text-[#818187] items-center text-left text-[0.875rem]"
            placeholder="search"
            name="search"
            id="search"
          />
        </div>
        <div className="w-[2.1rem] h-[2.1rem] p-2 rounded-full bg-white flex items-center font-bold cursor-pointer justify-center">
          +
        </div>
        <div className="w-[2.1rem] h-[2.1rem] p-2 rounded-full bg-white flex items-center font-bold cursor-pointer justify-center">
          <img src={Bell} alt="bell" className="w-[1rem] h-[1rem]" />
        </div>
      </div>
    </div>
  );
};
HeaderWrap.propTypes = {
  headerTitle: PropTypes.node.isRequired,
};
export default HeaderWrap;
