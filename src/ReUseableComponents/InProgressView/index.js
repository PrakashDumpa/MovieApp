import Loader from "react-loader-spinner";
import "./index.css";

const InProgressView = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  );
};

export default InProgressView;
