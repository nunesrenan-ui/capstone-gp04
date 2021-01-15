import { MenuBarLayout } from "./styles";

const MenuBar = () => {
  return (
    <div>
      <MenuBarLayout>
        <div className="appName">
          Giver
        </div>
        <ul>
          <li>
            Seja um doador
          </li>
          <li>
            Login
          </li>
        </ul>
      </MenuBarLayout>
    </div>
  );
};

export default MenuBar;
