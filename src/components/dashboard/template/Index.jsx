import HeaderWrap from "../header/Index";
import NavbarTemplate from "../navbar/template/Index";

const DashboardTemplate = () => {
  return (
    <div className="w-full flex">
      <NavbarTemplate />
      <HeaderWrap headerTitle="My Portfolio" />
    </div>
  );
};

export default DashboardTemplate;
