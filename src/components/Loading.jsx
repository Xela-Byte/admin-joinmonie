import {
  LoadingContainer,
  LoadingContent,
  LoadingIcon,
} from "../styled/Loading";

import Logo from "../assets/images/logo.png";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingContent>
        <LoadingIcon as={motion.div}>
          <img src={Logo} alt="" />
        </LoadingIcon>
      </LoadingContent>
    </LoadingContainer>
  );
};

export default Loading;
