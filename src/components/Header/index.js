import React from "react";
import { useHistory } from "react-router-dom";
import { Header, Button } from "grommet";
import { Home, Login, Logout, Flows, User } from "grommet-icons";
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
          icon={<Login />}
          hoverIndicator
          title="Login"
          onClick={() => history.push("/")}
        />

        <Button
          icon={<Flows />}
          hoverIndicator
          title="Feed"
          onClick={() => history.push("/")}
        />

        <Button
          icon={<User />}
          hoverIndicator
          title="Meu perfil"
          onClick={() => history.push("/")}
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
