import LogoutWrapper from "../logoutCard/Index";
import MenuWrap from "../menu/Index";

const NavbarTemplate = () => {
  return (
    <div className="w-full flex  p-2">
      <MenuWrap>
        <LogoutWrapper username="Theresa milly" title="Influencer" />
      </MenuWrap>
    </div>
  );
};

export default NavbarTemplate;
