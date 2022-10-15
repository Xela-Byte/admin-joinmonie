import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ReferralText,
  SignUpBtn,
  SignUpContainer,
  SignUpForm,
  SignUpHeaderText,
  SignUpInputContainer,
} from "../styled/SignUp";
import { loginRoute } from "../utils/APIRoutes";
import Loading from "../components/Loading";
import useGetWindowSize from "../hooks/useWindowSize";

const Login = () => {
  // TITLE FOR PAGE
  document.title = "JoinMonie | Log In";

  // Hooks
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const windowWidth = useGetWindowSize().innerWidth;

  // Notification Props
  const ToastifyProps = {
    position: "top-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    style: {
      borderRadius: "10px",
    },
  };

  // Validation and Redirection
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const { email, password } = values;

    if (!email || !password) {
      toast.error(`Please Fill All Fields.`, ToastifyProps);
      setIsLoading(false);

      return false;
    }
    if (password < 8) {
      toast.error("Password is too short", ToastifyProps);
      setIsLoading(false);
      return false;
    }
    if (!email.includes("@") || !email.includes(".") || email.length < 8) {
      toast.error("Email is invalid.");
      setIsLoading(false);
      return false;
    } else {
      return true;
    }
  };

  const handleAutoFill = (e) => {
    e.target.removeAttribute("readOnly");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const data = values;
      const headers = {
        "Content-Type": "application/json",
      };
      const createConfig = {
        method: "POST",
        url: loginRoute,
        headers: headers,
        data: data,
      };
      await axios(createConfig)
        .then((res) => {
          localStorage.setItem("JoinMonie-Verify-Token", res.data.token);
        })
        .then(() => {
          navigate("/dashboard");
        })
        .catch((err) => {
          toast.error(err.response.data.message);
          setIsLoading(false);
        });
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <SignUpContainer>
        <SignUpHeaderText>Welcome Back</SignUpHeaderText>
        <SignUpForm onSubmit={(e) => handleSubmit(e)} autoComplete="off">
          <SignUpInputContainer>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              readOnly
              onChange={(e) => handleChange(e)}
              onClick={(e) => handleAutoFill(e)}
            />
          </SignUpInputContainer>
          <SignUpInputContainer>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              readOnly
              onChange={(e) => handleChange(e)}
              onClick={(e) => handleAutoFill(e)}
            />
            <p style={{ marginTop: "5%" }}>
              Forgot password? <Link to={"/reset-password"}>Reset </Link>
            </p>
          </SignUpInputContainer>

          <SignUpBtn type="submit" onClick={() => setIsLoading(true)}>
            Login
          </SignUpBtn>
        </SignUpForm>
        <ReferralText style={{ marginTop: windowWidth < 990 ? "-20%" : "" }}>
          Don't have an account? <Link to={"/register"}>Create One.</Link>
        </ReferralText>
        <ToastContainer />
      </SignUpContainer>
    </>
  );
};

export default Login;
