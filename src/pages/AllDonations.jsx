import {
  DonationAmountTab,
  DonationCampaignContainer,
  DonationContainer,
  DonationInputContainer,
} from "../styled/Donations";
import ArrowLeft from "../assets/images/left-arrow.png";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { CampaignInfo, CampaignTab } from "../styled/Campaigns";
import { CampaignContainer } from "../styled/Campaigns";
import { useState } from "react";
import { allCampaignRoute } from "../utils/APIRoutes";
import axios from "axios";
import useGetWindowWidth from "../hooks/useWindowSize";

const AllDonations = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("JoinMonie-Admin-Verify-Token");
  const [campaigns, setCampaigns] = useState([]);
  const [campaignId, setCampaignId] = useState("");
  const [donation, setDonation] = useState(0);
  const windowWidth = useGetWindowWidth().innerWidth;

  const getCampaignId = (value) => {
    setCampaignId(value);
  };
  const getCampaigns = async () => {
    const headers = {
      Authorization: token,
    };
    const getConfig = {
      method: "GET",
      url: allCampaignRoute,
      headers: headers,
    };

    await axios(getConfig)
      .then((res) => {
        const singleCampaign = res.data.campaigns.filter((campaign) => {
          return campaign._id === campaignId;
        });
        setCampaigns(singleCampaign);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err);
      });
    const getDonationConfig = {
      method: "GET",
      url: `${allCampaignRoute}/${campaignId}/donations`,
    };
    await axios(getDonationConfig)
      .then((res) => {
        setDonation(res.data.data);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err);
      });
  };

  return (
    <DonationContainer>
      <img src={ArrowLeft} alt="" onClick={() => navigate(-1)} />
      <p>All Donations</p>
      <DonationInputContainer>
        <label htmlFor="Campaign ID">Please Input Campaign ID</label>
        <input
          type="text"
          name="campaignId"
          onChange={(e) => getCampaignId(e.target.value)}
        />
        <button onClick={() => getCampaigns()}>Get Donations</button>
      </DonationInputContainer>
      <DonationCampaignContainer>
        <DonationAmountTab>{donation}</DonationAmountTab>
        <p style={{ textAlign: "center" }}>Donations</p>
        {campaigns.map((campaign) => {
          const {
            _id,
            campaignName,
            campaignPhoto,
            currentBalance,
            fundsGoal,
            endDate,
          } = campaign;
          return (
            <CampaignContainer
              key={_id}
              style={{
                width: windowWidth > 990 ? "100%" : "",
              }}
            >
              <CampaignTab key={_id}>
                <img src={campaignPhoto} alt="" />
                <p>{campaignName}</p>

                <CampaignInfo>
                  <p>Current Balance</p>
                  <p>{currentBalance}</p>
                </CampaignInfo>
                <CampaignInfo>
                  <p>Fund Goal</p>
                  <p>{fundsGoal}</p>
                </CampaignInfo>
                <CampaignInfo>
                  <p>End Date </p>
                  <p>{endDate}</p>
                </CampaignInfo>
              </CampaignTab>
              <ToastContainer />
            </CampaignContainer>
          );
        })}
      </DonationCampaignContainer>
    </DonationContainer>
  );
};

export default AllDonations;
