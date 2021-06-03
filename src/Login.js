import React, { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();

  useEffect(() => {
    async function getAPI() {
      const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(resp);
      setName(resp.data.name);
      setMoves(resp.data.moves.length);
    }
    getAPI();
  });

  return (
    <>
      <h2>
        You have selected the following {num} option and the corresponding
        pokemon for the option you selected is{" "}
        <span style={{ color: "red" }}>{name}</span> and it has{" "}
        <span style={{ color: "red" }}>{moves}</span> moves
      </h2>
      <select
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      >
        <option value="1"> 1 </option>
        <option value="21"> 21 </option>
        <option value="13"> 13 </option>
        <option value="14"> 14 </option>
      </select>
    </>
  );
};

export default Login;
