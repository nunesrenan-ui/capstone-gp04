import { MenuBarLayout } from "./styles";

const MenuBar = ({ registerButton, loginButton }) => {
  return (
    <div>
      <MenuBarLayout>
        <div className="appName">Giver</div>
        <ul>
          <li>{registerButton}</li>
          <li>{loginButton}</li>
        </ul>
      </MenuBarLayout>
    </div>
  );
};

export default MenuBar;
