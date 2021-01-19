import CardSearch from "../../components/CardSearch";
import CardItem from "../../components/CardItem";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { BodyPage } from "./style";

const Feed = () => {
  return (
    <>
      <Header>
        {/* AQUI VAI TERNARIO PARA SE ESTIVER LOGADO */}
        <div>
          <Link to="/cadastro">Seja um doador</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </Header>
      <BodyPage>
        <CardSearch />
        <CardItem />
      </BodyPage>
    </>
  );
};

export default Feed;

export const Header = styled.div`
  width: 100%;
  height: 5vh;
  background-color: #ff9f1c;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  div {
    margin: 0 1%;
  }
`;
