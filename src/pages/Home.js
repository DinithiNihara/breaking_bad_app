import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

export const Home = () => {
  const { setCharacter } = useContext(AppContext);
  let navigate = useNavigate();

  const { data, isLoading, isError } = useQuery(["character"], () => {
    return Axios.get("https://breakingbadapi.com/api/characters").then(
      (res) => res.data
    );
  });

  if (isLoading) {
    return <h1>Loading...</h1>; //spinner
  }

  if (isError) {
    return <h1>Oops!!! Something went wrong.</h1>;
  }

  return (
    data && (
      <div>
        <h1>The Breaking Bad</h1>
        <p>
          A Breaking Bad Movie (or simply El Camino) is a 2019 American crime
          thriller film. Part of the Breaking Bad franchise, it serves as a
          sequel and epilogue to the television series Breaking Bad. It
          continues the story of Jesse Pinkman, who partnered with former
          teacher Walter White throughout the series to build a crystal meth
          empire based in Albuquerque. Series creator Vince Gilligan wrote,
          directed, and produced El Camino; Aaron Paul reprised his role as
          Jesse Pinkman. Several actors involved in Breaking Bad also reprised
          their roles, including Jesse Plemons, Krysten Ritter, Charles Baker,
          Matt Jones, Robert Forster, Jonathan Banks, and Bryan Cranston.
          Forster died on the day of El Camino's release, making the film one of
          his final on-screen appearances.
        </p>

        {data.map((character, key) => (
          <>
            <img
              src={character.img}
              style={{ height: "250px" }}
              key={key}
              onClick={() => {
                setCharacter(character);
                navigate(`/character/${character.char_id}`);
              }}
            />
            <p>{character.name}</p>
          </>
        ))}
      </div>
    )
  );
};
