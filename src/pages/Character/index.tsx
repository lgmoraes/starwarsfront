import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CharacterCart from "../../components/CharacterCart";
import styled from "styled-components";

const Main = styled.main``;

function Character() {
  const { id } = useParams();

  useEffect(() => {
    document.title = "Fiche caractère";
  }, []);

  return (
    <Main>
      <h1>Fiche caractère</h1>
      <CharacterCart id={id} />
    </Main>
  );
}

export default Character;
