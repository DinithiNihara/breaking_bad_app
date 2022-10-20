import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "../App.css";
import { motion } from "framer-motion";
import { RingLoader } from "react-spinners";

export const Home = () => {
  let navigate = useNavigate();

  // Using React Query, fetch data from the API
  const { data, isLoading, isError } = useQuery(["character"], () => {
    return Axios.get("https://breakingbadapi.com/api/characters").then(
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

  // Navigate to clicked character's detail page by passing character ID
  const handleClick = (char_id) => {
    navigate(`/character/${char_id}`);
  };

  return (
    data && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <br />
            <h1 className="title">The Breaking Bad</h1>
            <p className="description">
              A Breaking Bad Movie (or simply El Camino) is a 2019 American
              crime thriller film. Part of the Breaking Bad franchise, it serves
              as a sequel and epilogue to the television series Breaking Bad. It
              continues the story of Jesse Pinkman, who partnered with former
              teacher Walter White throughout the series to build a crystal meth
              empire based in Albuquerque. Series creator Vince Gilligan wrote,
              directed, and produced El Camino; Aaron Paul reprised his role as
              Jesse Pinkman. Several actors involved in Breaking Bad also
              reprised their roles, including Jesse Plemons, Krysten Ritter,
              Charles Baker, Matt Jones, Robert Forster, Jonathan Banks, and
              Bryan Cranston. Forster died on the day of El Camino's release,
              making the film one of his final on-screen appearances.
            </p>
            <br />

            {/* Grid of Characters */}
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-8">
                <div className="row">
                  {/* Grid - First Row */}
                  {/* Display 1st & 2nd images */}
                  {data.slice(0, 2).map((character, key) => (
                    <div className="col-md-6">
                      <Card>
                        <Card.Img
                          style={{ height: "400px" }}
                          src={character.img}
                          key={key}
                          onClick={() => handleClick(character.char_id)}
                        />
                        <Card.Text>{character.name}</Card.Text>
                      </Card>
                      <br />
                    </div>
                  ))}

                  {/* Grid - Second Row */}
                  {/* Display 3rd-5th images */}
                  {data.slice(2, 5).map((character, key) => (
                    <div className="col-md-4">
                      <Card>
                        <Card.Img
                          style={{ height: "280px" }}
                          src={character.img}
                          key={key}
                          onClick={() => handleClick(character.char_id)}
                        />
                        <Card.Text>{character.name}</Card.Text>
                      </Card>
                      <br />
                    </div>
                  ))}

                  {/* Grid - Third Row Onwards */}
                  {/* Display 6th image onwards */}
                  {data.slice(5).map((character, key) => (
                    <div className="col-md-3">
                      <Card>
                        <Card.Img
                          style={{ height: "200px" }}
                          src={character.img}
                          key={key}
                          onClick={() => handleClick(character.char_id)}
                        />
                        <Card.Text>{character.name}</Card.Text>
                      </Card>
                      <br />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-sm-2"></div>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </motion.div>
    )
  );
};
