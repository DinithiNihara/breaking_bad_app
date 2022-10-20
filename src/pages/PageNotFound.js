import { Link } from "react-router-dom";
import error from "../images/error.jpg";

export const PageNotFound = () => {
  return (
    <div>
      <img src={error} className="errorImage" alt="errorImage" />
      <div>
        <Link to="/" className="returnLink">
          Return to Home Page
        </Link>
      </div>
    </div>
  );
};
