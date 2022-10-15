import {
  DonationCampaignContainer,
  DonationContainer,
  DonationInputContainer,
} from "../styled/Donations";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../assets/images/left-arrow.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { allCampaignRoute } from "../utils/APIRoutes";
import { toast, ToastContainer } from "react-toastify";
import {
  CampaignContainer,
  CampaignInfo,
  CampaignTab,
} from "../styled/Campaigns";
import useGetWindowWidth from "../hooks/useWindowSize";

const UnblockAfterReviews = () => {
  const navigate = useNavigate();
  const [campaignId, setCampaignId] = useState("");
  const [campaigns, setCampaigns] = useState([]);
  const windowWidth = useGetWindowWidth().innerWidth;

  let token = localStorage.getItem("JoinMonie-Admin-Verify-Token");

  const getCampaignId = (value) => {
    setCampaignId(value);
  };
  const blockCampaign = async () => {
    const headers = {
      Authorization: token,
      "Content-Type": "application/json",
    };
    const reportConfig = {
      method: "POST",
      url: `${allCampaignRoute}/${campaignId}/review`,
      headers: headers,
    };

    await axios(reportConfig)
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err);
      });
  };

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
          const reportedCampaigns = res.data.campaigns.filter((campaign) => {
            return campaign.isReported === true;
          });
          setCampaigns(reportedCampaigns);
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

  return (
    <DonationContainer>
      <img src={ArrowLeft} alt="" onClick={() => navigate(-1)} />
      <p>Unblock Campaign</p>
      <DonationInputContainer>
        <label htmlFor="Campaign ID">Please Input Campaign ID</label>
        <input
          type="text"
          name="campaignId"
          onChange={(e) => getCampaignId(e.target.value)}
        />
        <button onClick={() => blockCampaign()}>Unblock</button>
      </DonationInputContainer>
      <DonationCampaignContainer>
        <p
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px" }}
        >
          Blocked Campaigns
        </p>
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
      <ToastContainer />
    </DonationContainer>
  );
};

export default UnblockAfterReviews;
