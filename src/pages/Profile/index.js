import ProfileSideBar from "../../components/PofileSideBar/index.js";
import ProfileTabs from "../../components/ProfileTabs/index.js";
import { Container } from "./style";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import FooterAll from "../../components/Footer";
import Header from "../../components/Header";

import { useEffect } from "react";

const Profile = () => {
  const history = useHistory();
  /* const localToken = useSelector((state) => state.loginData.token); */
  const localToken = localStorage.getItem("authToken");
  useEffect(() => {
    if (!localToken) {
      history.push("/");
    }
  }, [localToken, history]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <Container>
        <ProfileSideBar
          score="10000"
          image="https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg"
          name="Lorem Ipsum"
          email="lorem@ipsum.com"
          phone="555555"
          interests="Anything"
          location="AnyPlace"
        />
        <ProfileTabs />
      </Container>
      <FooterAll />
    </motion.div>
  );
};

export default Profile;
