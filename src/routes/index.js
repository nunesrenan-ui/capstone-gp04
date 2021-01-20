import { Route, Switch } from "react-router-dom";
import Profile from "../pages/Profile";
import Description from "../pages/Description";
import Feed from "../pages/Feed";
import HomePage from "../pages/Home/";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  return (
    <AnimatePresence>
      <Switch>
        {/* Página Home */}
        <Route exact path="/">
          <HomePage />
        </Route>

        {/* Página de Login */}
        <Route exact path="/login">
          <LoginPage />
        </Route>

        {/* Página de Cadastro */}
        <Route exact path="/cadastro">
          <RegisterPage />
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
    </AnimatePresence>
  );
};

export default Routes;
