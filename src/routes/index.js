import { Route, Switch } from "react-router-dom";
import Profile from "../pages/Profile";
import Description from "../pages/Description";
import Feed from "../pages/Feed";
import UserLogin from "../components/CardLogin";
import UserRegister from "../components/CardRegister";

const Routes = () => {
  return (
    <Switch>
      {/* Página Home */}
      <Route exact path="/"></Route>

      {/* Página de Login */}
      <Route exact path="/login">
        <UserLogin></UserLogin>
      </Route>

      {/* Página de Cadastro */}
      <Route exact path="/cadastro">
        <UserRegister></UserRegister>
      </Route>

      {/* Profile */}
      <Route exact path="/profile">
        <Profile />
      </Route>

      {/* Feed */}
      <Route exact path="/feed">
        <Feed />
      </Route>

      {/* Página de Descrição do Item */}
      <Route exact path="/description">
        <Description />
      </Route>
    </Switch>
  );
};

export default Routes;
