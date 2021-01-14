import { Route, Switch } from "react-router-dom";
import description from "../pages/ShowItems";
import Footer from "../components/footer";

const Rotes = () => {
  <Switch>
    {/* Página Home */}
    <Route exact path="/">
      <Footer />
    </Route>

    {/* Página de Login */}
    <Route exact path="/Login">
      <Footer />
    </Route>

    {/* Página de Cadastro */}
    <Route exact path="/cadastro">
      <Footer />
    </Route>

    {/* Profile */}
    <Route exact path="/profile">
      <Footer />
    </Route>

    {/* Feed */}
    <Route exact path="/feed">
      <Footer />
    </Route>

    {/* Página de Descrição do Item */}
    <Route exact path="/description">
      <description />
      <Footer />
    </Route>
  </Switch>;
};

export default Rotes;
