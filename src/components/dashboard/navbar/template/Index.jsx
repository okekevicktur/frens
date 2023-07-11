import LogoutWrapper from "../logoutCard/Index";
import MenuWrap from "../menu/Index";

const NavbarTemplate = () => {
  return (
    <div className="w-[15.625rem] flex  p-4">
      <MenuWrap>
        <LogoutWrapper username="Theresa milly" title="Influencer" />
      </MenuWrap>
    </div>
  );
};

export default NavbarTemplate;
