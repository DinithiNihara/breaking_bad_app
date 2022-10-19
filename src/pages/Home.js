import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
  const { data } = useQuery(["character"], () => {
    return Axios.get("https://breakingbadapi.com/api/characters").then(
      (res) => res.data
    );
  });
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

        {data.map((character) => (
          <>
            <img src={character.img} style={{ height: "250px" }} />
            <p>{character.name}</p>
          </>
        ))}
      </div>
    )
  );
};
