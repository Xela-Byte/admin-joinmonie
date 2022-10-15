import "./css/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllCampaigns from "./pages/AllCampaigns";
import AllDonations from "./pages/AllDonations";
import BlockCampaigns from "./pages/BlockCampaigns";
import GetNotified from "./pages/GetNotified";
import GetAllUsers from "./pages/GetAllUsers";
import Home from "./pages/Home";
import UnblockAFterReviews from "./pages/UnblockAFterReviews";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Password from "./pages/Password";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/set-password" element={<Password />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="campaigns" element={<AllCampaigns />} />
        <Route path="donations" element={<AllDonations />} />
        <Route path="block-campaign" element={<BlockCampaigns />} />
        <Route path="users" element={<GetAllUsers />} />
        <Route path="notify" element={<GetNotified />} />
        <Route path="unblock" element={<UnblockAFterReviews />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
