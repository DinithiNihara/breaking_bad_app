import { useContext } from "react";
import { AppContext } from "../App";

export const Character = () => {
  const { character } = useContext(AppContext);
  return (
    <div>
      <img src={character.img} style={{ width: "250px" }} />
      <h1>
        <span style={{fontSize:"44px"}}>&lt;</span> {character.name}
      </h1>
      <p>Name: {character.name}</p>
      <p>Birthday: {character.birthday}</p>
      <p>Nickname: {character.nickname}</p>
      <p>Status: {character.status}</p>
      <br />
      <p>Category: {character.category}</p>
    </div>
  );
};
