import { CampaignContainer } from "../styled/Campaigns";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../assets/images/left-arrow.png";

const GetAllUsers = () => {
  const navigate = useNavigate();
  return (
    <CampaignContainer>
      <img src={ArrowLeft} alt="" onClick={() => navigate(-1)} />
      <p>All Users</p>
    </CampaignContainer>
  );
};

export default GetAllUsers;
