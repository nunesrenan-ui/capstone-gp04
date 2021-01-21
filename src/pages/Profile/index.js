import ProfileSideBar from "../../components/PofileSideBar/index.js";
import ProfileTabs from "../../components/ProfileTabs/index.js";
import { Container } from "./style";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import FooterAll from "../../components/Footer";
import Header from "../../components/Header";
import jwt_decode from "jwt-decode";

import { useEffect } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const history = useHistory();
  const localToken = localStorage.getItem("authToken");
  const data = jwt_decode(localToken);
  const sub = Number(data.sub);
  console.log(sub);

  const data2 = useSelector((state) => state.loginData.token);
  console.log(data2 === localToken);

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
        <ProfileTabs token={localToken} userId={sub} />
      </Container>
      <FooterAll />
    </motion.div>
  );
};

export default Profile;
