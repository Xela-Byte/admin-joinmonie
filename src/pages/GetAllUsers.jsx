import { CampaignContainer } from "../styled/Campaigns";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../assets/images/left-arrow.png";
import { host } from "../utils/APIRoutes";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { UserTab } from "../styled/User";

const GetAllUsers = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("JoinMonie-Admin-Verify-Token");
  const [users, setUsers] = useState([]);

  // Calling the function whenever window loads.
  useEffect(() => {
    const getAllUsers = async () => {
      const headers = {
        Authorization: token,
      };
      const getConfig = {
        method: "GET",
        url: ` ${host}/admin/all-users`,
        headers: headers,
      };

      await axios(getConfig)
        .then((res) => {
          setUsers(res.data.data);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
          console.log(err);
        });
    };

    if (document.readyState === "complete") {
      getAllUsers();
    } else {
      window.addEventListener("load", () => {
        getAllUsers();
      });
      return () =>
        document.removeEventListener("load", () => {
          getAllUsers();
        });
    }
  }, [token]);
  // console.log(users);
  return (
    <CampaignContainer>
      <img src={ArrowLeft} alt="" onClick={() => navigate(-1)} />
      <p>All Users</p>
      {users.map((user) => {
        const { _id, fullName, email } = user;
        return (
          <UserTab key={_id}>
            <div>
              <p>{fullName}</p>
              <p>{email}</p>
            </div>
          </UserTab>
        );
      })}
      <ToastContainer />
    </CampaignContainer>
  );
};

export default GetAllUsers;
