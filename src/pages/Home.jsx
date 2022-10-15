import {
  HomeContainer,
  HomeHeader,
  HomeIcon,
  HomeTab,
  HomeTabContainer,
  HomeWelcome,
} from "../styled/Home";

import Logo from "../assets/images/logo.png";
import Avatar from "../assets/images/person-3.jpg";
import RightArrow from "../assets/images/left-arrow.png";
import Campaigns from "../assets/images/skyscraper-filled.svg";
import Correct from "../assets/images/correct.svg";
import User from "../assets/images/user (3).png";
import Close from "../assets/images/close.svg";
import Valid from "../assets/images/valid.png";
import Bell from "../assets/images/bell (1).png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <HomeHeader>
        <HomeIcon>
          <img src={Logo} alt="" />
        </HomeIcon>
        <HomeWelcome>
          <p>Welcome back, Admin</p>
          <img src={Avatar} alt="" />
        </HomeWelcome>
      </HomeHeader>
      <HomeTabContainer>
        <HomeTab onClick={() => navigate("/campaigns")}>
          <img src={Campaigns} alt="" />
          <p>Get all campaigns</p>
          <img src={RightArrow} alt="" />
        </HomeTab>
        <HomeTab onClick={() => navigate("/donations")}>
          <img src={Correct} alt="" />
          <p>Get all donations</p>
          <img src={RightArrow} alt="" />
        </HomeTab>
        <HomeTab onClick={() => navigate("/users")}>
          <img src={User} alt="" />
          <p>Get all users</p>
          <img src={RightArrow} alt="" />
        </HomeTab>
        <HomeTab onClick={() => navigate("/block-campaign")}>
          <img src={Close} alt="" />
          <p>Block campaigns</p>
          <img src={RightArrow} alt="" />
        </HomeTab>
        <HomeTab onClick={() => navigate("/unblock")}>
          <img src={Valid} alt="" />
          <p>Unblock after reviews</p>
          <img src={RightArrow} alt="" />
        </HomeTab>
        <HomeTab onClick={() => navigate("/notify")}>
          <img src={Bell} alt="" />
          <p>Get notified on every withdrawal request</p>
        </HomeTab>
      </HomeTabContainer>
    </HomeContainer>
  );
};

export default Home;
