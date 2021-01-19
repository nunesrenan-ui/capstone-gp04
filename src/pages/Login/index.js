import { LoginLayout, Header } from "./styles";
import { Link } from "react-router-dom";
import UserLogin from "../../components/CardLogin";
import Footer from "../../components/Footer";

const LoginPage = () => {
  return (
    <>
      <Header>
        <div>
          <Link className="headerLinks" to="/cadastro">Não é um Giver? Cadastre-se</Link>
        </div>
      </Header>
      <LoginLayout>
        <UserLogin />
      </LoginLayout>
      <Footer />
    </>
  );
};

export default LoginPage;
