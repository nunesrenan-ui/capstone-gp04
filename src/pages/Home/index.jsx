import HomePageCard from "../../components/HomePageCard";
import MenuBar from "../../components/MenuBar";
import AboutGiver from "../../components/AboutGiver";
import { HomePageLayout } from "./styles";

const HomePage = () => {
 

  return (
    <div>
      <MenuBar registerButton={"Seja um doador"} loginButton={"Login"}/>
      <HomePageLayout>
        <HomePageCard />
      </HomePageLayout>
      <AboutGiver />
    </div>
  );
};

export default HomePage;
