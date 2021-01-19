import { LoginLayout } from "./styles";
import MenuBar from "../../components/MenuBar";
import UserLogin from "../../components/CardLogin";

const LoginPage = () => {
  return (
    <>
      <MenuBar />
      <LoginLayout>
        <UserLogin />
      </LoginLayout>
    </>
  );
};

export default LoginPage;
