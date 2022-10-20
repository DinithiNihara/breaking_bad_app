import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { RingLoader } from "react-spinners";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { motion } from "framer-motion";
import { PageNotFound } from "./PageNotFound";

export const Character = () => {
  let navigate = useNavigate();
  let { id } = useParams();

  // Using React Query, fetch data from the API
  const {
    data: character,
    isLoading,
    isError,
  } = useQuery(["character"], () => {
    return Axios.get(`https://breakingbadapi.com/api/characters/${id}`).then(
      (res) => res.data
    );
  });

  const ringLoaderStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  //Display the loading spinner until the API data is completely loaded
  if (isLoading) {
    return (
      <RingLoader
        cssOverride={ringLoaderStyle}
        size={180}
        color={"#555"}
      ></RingLoader>
    );
  }

  //Display if there's an error while loading data from the API
  if (isError) {
    return <h1>Oops!!! Something went wrong.</h1>;
  }

  //Display the character details if the loaded array is not empty
  return character && character.length === 0 ? (
    <PageNotFound />
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="row detailView">
        <div className="col-6">
          <img
            src={character[0].img}
            style={{ height: "680px" }}
            alt="characterImage"
          />
        </div>
        <div className="col-6">
          <div className="detailText">
            <span
              className="backSymbol"
              onClick={() => {
                navigate("/");
              }}
            >
              &lt;
            </span>{" "}
            <span className="detailTitle">{character[0].name}</span>
            <br />
            <br />
            <span className="detail">Name: </span>
            <span>{character[0].name}</span>
            <br />
            <span className="detail">Birthday: </span>
            <span>{character[0].birthday}</span>
            <br />
            <span className="detail">Nickname:</span>
            <span> {character[0].nickname}</span>
            <br />
            <span className="detail">Status:</span>
            <span> {character[0].status}</span>
            <br />
            <br />
            <span className="detail">Category:</span>
            <span> {character[0].category}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
