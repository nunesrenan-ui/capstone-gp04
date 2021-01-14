import { Route, Switch } from "react-router-dom";
import Description from "../pages/Description";

const Routes = () => {
  return (
    <Switch>
      {/* Página Home */}
      <Route exact path="/"></Route>

      {/* Página de Login */}
      <Route exact path="/Login"></Route>

      {/* Página de Cadastro */}
      <Route exact path="/cadastro"></Route>

      {/* Profile */}
      <Route exact path="/profile"></Route>

      {/* Feed */}
      <Route exact path="/feed"></Route>

      {/* Página de Descrição do Item */}
      <Route exact path="/description">
        <Description />
      </Route>
    </Switch>
  );
};

export default Routes;
