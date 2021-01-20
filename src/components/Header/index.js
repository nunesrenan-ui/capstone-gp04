import React from "react";
import { useHistory } from "react-router-dom";
import { Header, Button } from "grommet";
import { Home, Login, Logout, Flows, User, Clipboard } from "grommet-icons";
import { Container } from "./style";

export const HeaderAll = () => {
  const history = useHistory();
  return (
    <Container>
      <Header background="#FF9F1C">
        <Button
          icon={<Home />}
          hoverIndicator
          title="Home"
          onClick={() => history.push("/")}
        />

        <Button
          icon={<Clipboard />}
          hoverIndicator
          title="Cadastre-se"
          onClick={() => history.push("/cadastro")}
        />

        <Button
          icon={<Login />}
          hoverIndicator
          title="Login"
          onClick={() => history.push("/login")}
        />

        <Button
          icon={<Flows />}
          hoverIndicator
          title="Feed"
          onClick={() => history.push("/feed")}
        />

        <Button
          icon={<User />}
          hoverIndicator
          title="Meu perfil"
          onClick={() => history.push("/profile")}
        />

        <Button
          icon={<Logout />}
          hoverIndicator
          title="Logout"
          onClick={() => history.push("/")}
        />
      </Header>
    </Container>
  );
};

export default HeaderAll;
