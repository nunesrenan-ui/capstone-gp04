import { RegisterLayout, Header } from "./styles";
import UserRegister from "../../components/CardRegister";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <Header />
      <RegisterLayout>
        <UserRegister />
      </RegisterLayout>
      <Footer />
      </>
  );
};

export default RegisterPage;
