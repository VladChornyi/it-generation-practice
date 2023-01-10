import { useEffect, useState } from "react";

import { fetchStarWarsCharacter } from "../services/api";
import { Form } from "./Form";
import { Characters } from "./Characters";
import Goback from "../Goback/Goback";

export const StarWars = () => {
  const [characters, setCharacters] = useState([]);
  const [submitedName, setSubmitedName] = useState("");

  useEffect(() => {
    if (submitedName) {
      async function fetchData() {
        const { results } = await fetchStarWarsCharacter(submitedName);
        console.log(results);
        setCharacters(results);
      }
      fetchData();
    }
  }, [submitedName]);

  return (
    <>
      <Form onSubmit={setSubmitedName} />
      <Characters users={characters} />
      <Goback />
    </>
  );
};
