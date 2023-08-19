import { useParams } from "react-router-dom";
import "./index.css";
import { useEffect, useState } from "react";
import {
  Api_key,
  FAILED,
  INITIAL,
  LOADING,
  SUCCESS,
  imageUrl,
} from "../../ReduxStore/Constants";
import FailureView from "../../ReUseableComponents/FailureView";
import InProgressView from "../../ReUseableComponents/InProgressView";

const MovieCardItemDetails = () => {
  const { id } = useParams();
  // console.log("ParamsId", id);
  const [movieDetails, setMovieDetails] = useState({});
  const [castList, setCastList] = useState([]);
  const [apiStatus, setApiStatus] = useState(INITIAL);

  const getMovieDetails = async () => {
    setApiStatus(LOADING);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${Api_key}&language=en-US`
      );
      if (response.ok) {
        const data = await response.json();
        // console.log("ApiDetails", data);
        setApiStatus(SUCCESS);
        setMovieDetails(data);
      } else {
        console.log("ApiDetails Failed");
        setApiStatus(FAILED);
      }
    } catch (error) {
      setApiStatus(FAILED);
      console.log(error);
    }
  };

  const getCastList = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Api_key}&language=en-US`
      );
      if (response.ok) {
        const data = await response.json();
        // console.log("ApiDetails", data);
        setCastList(data.cast);
      } else {
        console.log("ApiDetails Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieDetails();
    getCastList();
  }, []);

  const {
    original_title,
    vote_average,
    runtime,
    overview,
    genres,
    poster_path,
    release_date,
    backdrop_path,
  } = movieDetails;

  // console.log(castList);

  const renderSuccessView = () => (
    <div className="d-flex flex-column  min-vh-100 card_background p-3 w-100">
      <div className="d-flex bg-danger">
        <div
          style={{
            backgroundImage: `url(${imageUrl}${backdrop_path})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            //   backgroundPosition: "center",
            // height: "500px",
          }}
          className="d-flex flex-column justify-content-between p-4 bg-dark w-100"
        >
          <div className="d-flex  flex-column text-light">
            <div className="d-flex flex-column flex-md-row">
              <div className="text-center">
                <img
                  className="posterImage"
                  src={`${imageUrl}${poster_path}`}
                  alt={original_title}
                />
              </div>
              <div className="ml-3">
                <h1 className="h2 mb-3">{original_title}</h1>
                <h1 className="h4 mb-3">Rating: {vote_average}</h1>
                <div className="d-flex">
                  <h1 className="h4">{runtime}min</h1>
                  <ul className="list-unstyled d-flex flex-column flex-md-row ml-5">
                    {genres?.map((each) => (
                      <li key={each.id} className="h4">
                        {each.name},
                      </li>
                    ))}
                  </ul>
                </div>
                <h1 className="h4">Release Date : {release_date}</h1>
              </div>
            </div>
            <div>
              <h1 className="h2">OverView</h1>
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-light mt-3">
        <h4>Cast</h4>
        <ul className="list-unstyled  d-flex overflow-auto">
          {castList.map((eachItem) => (
            <li key={eachItem.cast_id} className="d-flex flex-column m-2">
              <div className="">
                <img
                  className="cast_image_height"
                  src={`${imageUrl}${eachItem.profile_path}`}
                  alt={eachItem.original_name}
                />
              </div>
              <p className="m-0 mt-2">{eachItem.original_name}</p>
              <p className="mt-2">Character : {eachItem.character}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const decisionMaking = () => {
    switch (apiStatus) {
      case "success":
        return renderSuccessView();
      case "failed":
        return <FailureView callAPIAgain={getMovieDetails} />;
      case "loading":
        return <InProgressView />;
      default:
        return null;
    }
  };

  return <div>{decisionMaking()}</div>;
};

export default MovieCardItemDetails;
