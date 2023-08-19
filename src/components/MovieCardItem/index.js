import { Link } from "react-router-dom";
import "./index.css";
import { imageUrl } from "../../ReduxStore/Constants";

const MovieCardItem = ({ EachMovieItem }) => {
  const { title, poster_path, vote_average, id } = EachMovieItem;
  return (
    <li className="text-center col-12 col-sm-6 col-md-4 col-lg-3 mb-3 ">
      <Link to={`${id}`} className="nav-link text-secondary">
        <img
          className="posterSize"
          src={`${imageUrl}${poster_path}`}
          alt={title}
        />
        <h1 className="h5">{title}</h1>
        <h1 className="h5">Rating: {vote_average}</h1>
      </Link>
    </li>
  );
};

export default MovieCardItem;
