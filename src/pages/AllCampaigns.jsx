import { useState, useEffect } from "react";
import axios from "axios";
import {
  CampaignContainer,
  CampaignTab,
  CampaignInfo,
} from "../styled/Campaigns";
import { toast, ToastContainer } from "react-toastify";
import { allCampaignRoute } from "../utils/APIRoutes";
import ArrowLeft from "../assets/images/left-arrow.png";
import { useNavigate } from "react-router-dom";
import Clip from "../assets/images/clip.svg";

const AllCampaigns = () => {
  const navigate = useNavigate();
  // Getting Campaigns
  let token = localStorage.getItem("JoinMonie-Admin-Verify-Token");
  const [campaigns, setCampaigns] = useState([]);

  // Calling the function whenever window loads.
  useEffect(() => {
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
          setCampaigns(res.data.campaigns);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
          console.log(err);
        });
    };

    if (document.readyState === "complete") {
      getCampaigns();
    } else {
      window.addEventListener("load", () => {
        getCampaigns();
      });
      return () =>
        document.removeEventListener("load", () => {
          getCampaigns();
        });
    }
  }, [token]);

  const copy = (name, id) => {
    navigator.clipboard.writeText(id);
    toast.success(`${name} ID copied successfully`);
  };
  return (
    <CampaignContainer>
      <img src={ArrowLeft} alt="" onClick={() => navigate(-1)} />
      <p>All Campaigns</p>
      {campaigns.map((campaign) => {
        const {
          campaignPhoto,
          campaignName,
          campaignStory,
          currentBalance,
          fundsGoal,
          endDate,
          _id,
          isReported,
        } = campaign;
        return (
          <CampaignTab key={_id}>
            <img src={campaignPhoto} alt="" />
            <p>{campaignName}</p>
            <CampaignInfo>
              <p>About Campaign</p>
              <p>{campaignStory}</p>
            </CampaignInfo>
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
            <CampaignInfo>
              <p>Reported Status </p>
              <p>{isReported ? "True" : "False"}</p>
            </CampaignInfo>
            <CampaignInfo>
              <p>Campaign ID </p>
              <div>
                <p>{_id}</p>
                <img
                  src={Clip}
                  alt=""
                  onClick={() => copy(campaignName, _id)}
                />
              </div>
            </CampaignInfo>
          </CampaignTab>
        );
      })}
      <ToastContainer />
    </CampaignContainer>
  );
};

export default AllCampaigns;
