import "./index.css";
import { NavLink } from "react-router-dom";

const NotFoundView = () => (
  <div className="h-100 d-flex flex-column justify-content-center align-items-center">
    <div className="col-5">
      <img
        className="w-100"
        src="https://res.cloudinary.com/dp8ggbibl/image/upload/v1675939101/Mini%20Project/page_not_found_rumnvb.png"
        alt="not found"
      />
    </div>
    <h1 className="mt-3">Page Not Found</h1>
    <p className="h5 text-secondary mt-3">
      We are sorry, the page you requested could not be found, Please go back to
      the homepage.
    </p>
    <NavLink to="/">
      <button type="button" className="btn btn-primary mt-3">
        Go Back to Home
      </button>
    </NavLink>
  </div>
);

export default NotFoundView;
