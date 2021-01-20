import ProfileSideBar from "../../components/PofileSideBar/index.js";
import ProfileTabs from "../../components/ProfileTabs/index.js";
import { Container } from "./style";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Profile = () => {
  const history = useHistory();
  const checkToken = useSelector((state) => state.loginData.token);

  useEffect(() => {
    if (!checkToken) {
      history.push("/");
    }
  }, [checkToken]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Header>
        <div>
          <Link to="/feed">Feed</Link>
        </div>
        <div>
          <Link to="/">Logout</Link>
        </div>
      </Header>
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
      <Footer />
    </motion.div>
  );
};

export default Profile;

export const Header = styled.div`
  width: 100%;
  height: 5vh;
  background-color: #ff9f1c;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  div {
    margin: 0 1%;
  }
`;
