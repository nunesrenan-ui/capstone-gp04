import { Route, Switch } from "react-router-dom";
import Profile from "../pages/Profile";
import Description from "../pages/Description";
import Feed from "../pages/Feed";
import HomePage from "../pages/Home/";
<<<<<<< HEAD
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
=======
import UserLogin from "../components/CardLogin/";
import UserRegister from "../components/CardRegister/";
import { AnimatePresence } from "framer-motion";
>>>>>>> d070e3309de3e54fb5b00198d9bcc06ecb39c856

const Routes = () => {
  return (
    <AnimatePresence>
      <Switch>
        {/* Página Home */}
        <Route exact path="/">
          <HomePage />
        </Route>

<<<<<<< HEAD
      {/* Página de Login */}
      <Route exact path="/login">
        <LoginPage />
      </Route>

      {/* Página de Cadastro */}
      <Route exact path="/cadastro">
        <RegisterPage />
      </Route>
=======
        {/* Página de Login */}
        <Route exact path="/login">
          <UserLogin></UserLogin>
        </Route>

        {/* Página de Cadastro */}
        <Route exact path="/cadastro">
          <UserRegister></UserRegister>
        </Route>
>>>>>>> d070e3309de3e54fb5b00198d9bcc06ecb39c856

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
