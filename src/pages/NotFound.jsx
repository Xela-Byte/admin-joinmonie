import NotFoundImage from "../assets/images/404.svg";

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={NotFoundImage} alt="" />
    </div>
  );
};

export default NotFound;
