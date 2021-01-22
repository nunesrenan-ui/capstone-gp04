import ProfileSideBar from "../../components/ProfileSideBar/index.js";
import ProfileTabs from "../../components/ProfileTabs/index.js";
import { DivCentral, Container } from "./style";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import FooterAll from "../../components/Footer";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import HeaderAll from "../../components/Header";
import jwt_decode from "jwt-decode";
import axios from "axios";

const Profile = () => {
  const [userInfo, setUserInfor] = useState([]);
  const history = useHistory();
  const localToken = localStorage.getItem("authToken");
  const data = jwt_decode(localToken);
  const userId = Number(data.sub);

  const userData = useSelector((state) => state.loginData);
  const { token } = userData;

  const getUserInfo = () => {
    axios
      .get(`https://api-capstone-grupo04.herokuapp.com/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUserInfor(res.data));
  };

  const { name, lastName, phone, email, profilePicture } = userInfo;

  useEffect(() => {
    if (localToken) {
      getUserInfo();
    }
    if (!localToken) {
      history.push("/");
    }
  }, [localToken, history, userId, token]);

  const defaultImage =
    "https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <HeaderAll />
        <DivCentral>
          <ProfileSideBar
            image={profilePicture || defaultImage}
            name={name}
            lastName={lastName}
            email={email}
            phone={phone}
            location="São Paulo"
          />
          <ProfileTabs userId={userId} token={token} />
        </DivCentral>
      </Container>
      <FooterAll />
    </motion.div>
  );
};

export default Profile;
