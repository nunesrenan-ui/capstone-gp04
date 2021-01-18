import ProfileSideBar from "../../components/PofileSideBar/index.js";
import ProfileTabs from "../../components/ProfileTabs/index.js";
import { Container } from "./style";

const Profile = () => {
  return (
    <>
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
    </>
  );
};

export default Profile;
