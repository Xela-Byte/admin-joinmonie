import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  PasswordTC,
  ReferralText,
  SignUpBtn,
  SignUpContainer,
  SignUpForm,
  SignUpHeaderText,
  SignUpInputContainer,
} from "../styled/SignUp";
import { Line } from "../styled/UniversalStyles";
import Loading from "../components/Loading";
import { registerRoute } from "../utils/APIRoutes";
import Eye from "../assets/images/eye.svg";
import EyeSlash from "../assets/images/eye-slash.svg";
import useGetWindowSize from "../hooks/useWindowSize";

const Password = () => {
  // ******** //
  // Set Password```//
  //********* //

  //  Title for the page
  document.title = "JoinMonie | Set Password";

  // Hooks
  const navigate = useNavigate();
  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const windowWidth = useGetWindowSize().innerWidth;

  // Password Reveal
  const handlePasswordReveal = () => {
    setShowPassword(!showPassword);
  };
  const handleConfirmPasswordReveal = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Getting user data from local storage
  let userData = localStorage.getItem("JoinMonie");
  userData = JSON.parse(userData);

  // Getting Inputs
  const handleChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  // Validation
  const handleValidation = () => {
    const { password, confirmPassword } = passwords;
    if (!password || !confirmPassword) {
      toast.error("Please input your password");
      setIsLoading(false);
      return false;
    }
    if (password < 8 || confirmPassword < 8) {
      toast.error("Password is too short");
      setIsLoading(false);
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Both passwords does not match");
      setIsLoading(false);
      return false;
    } else {
      const inputName = {
        password: "password",
        role: "role",
      };
      userData = { ...userData, [inputName.password]: password };
      userData = { ...userData, [inputName.role]: "ADMIN" };
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (handleValidation()) {
      const {
        fullName,
        email,
        country,
        currency,
        organisationName,
        DOB,
        password,
        role,
      } = userData;
      await axios
        .post(registerRoute, {
          fullName,
          email,
          country,
          currency,
          organisationName,
          DOB,
          password,
          role,
        })
        .then((res) => {
          localStorage.setItem("JoinMonie-Admin-Verify-Token", res.data.token);
        })
        .then(() => {
          toast.success(
            "An email has been sent to your mail, please check it for verification. If you don't verify your account, you won't be able to create a campaign."
          );
        })
        .then(() => {
          setTimeout(() => {
            navigate("/dashboard");
          }, 5000);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
          setIsLoading(false);
        });
    }
  };

  const { password, confirmPassword } = passwords;

  return (
    <>
      {isLoading && <Loading />}
      <SignUpContainer
        style={{
          width: windowWidth > 990 ? "60%" : "",
        }}
      >
        <SignUpHeaderText>Get Started</SignUpHeaderText>
        <div style={{ display: "flex" }}>
          <Line style={{ width: "48%", background: "#eee" }} />
          <Line style={{ marginLeft: "auto" }} />
        </div>

        <SignUpForm onSubmit={(e) => handleSubmit(e)}>
          <p>Password and Security</p>
          <SignUpInputContainer>
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={(e) => handleChange(e)}
              value={password}
            />
            <img
              src={showPassword ? EyeSlash : Eye}
              alt=""
              onClick={() => handlePasswordReveal()}
            />
            <p>Must be at least 8 characters.</p>
          </SignUpInputContainer>
          <SignUpInputContainer>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={(e) => handleChange(e)}
              autoComplete="new-password"
              value={confirmPassword}
            />
            {showConfirmPassword ? (
              <img
                src={EyeSlash}
                alt=""
                onClick={() => handleConfirmPasswordReveal()}
              />
            ) : (
              <img
                src={Eye}
                alt=""
                onClick={() => handleConfirmPasswordReveal()}
              />
            )}

            <p>Both passwords must match!</p>
          </SignUpInputContainer>
          <PasswordTC>
            <p>
              By signing up, you agree to our
              <a href="https://docs.google.com/document/d/1wDSwL3uImyZYtFn-xSKAzGXse5no0wgxAmczB5Aj8VU/edit?usp=drivesdk&urp=gmail_link">
                Terms and Condition.
              </a>
            </p>
          </PasswordTC>
          <SignUpBtn type="submit" onClick={() => setIsLoading(true)}>
            Sign Up
          </SignUpBtn>
          <ReferralText>
            Already have an account? <Link to={"/login"}>Log In.</Link>
          </ReferralText>
        </SignUpForm>
        <ToastContainer />
      </SignUpContainer>
    </>
  );
};

export default Password;
