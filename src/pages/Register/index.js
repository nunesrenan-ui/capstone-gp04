import { RegisterLayout } from "./styles";
import MenuBar from "../../components/MenuBar";
import CardRegister from "../../components/CardRegister";

const RegisterPage = () => {
    return(
        <>
        <MenuBar />
        <RegisterLayout>
            <CardRegister />
        </RegisterLayout>
        </>
    )
}

export default RegisterPage;