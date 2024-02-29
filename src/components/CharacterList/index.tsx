import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Button from "../Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1080px;
  margin: auto;

  & p.message {
    text-align: center;
    font-size: 4em;
  }
`;

function CharacterList() {
  const { isLoading, error, data } = useQuery("getPeople", () =>
    fetch("http://localhost:3000/api/people").then((res) => res.json())
  );

  if (isLoading)
    return (
      <Container>
        <p className="message">Chargement...</p>
      </Container>
    );

  if (error)
    return (
      <Container>
        <p className="message">Une erreur est survenue: {error.message}</p>
      </Container>
    );

  return (
    <Container>
      {data.map((pers, index) => (
        <NavLink to={`/character/${index + 1}`} key={index}>
          <Button width="100%">{pers.name}</Button>
        </NavLink>
      ))}
    </Container>
  );
}

export default CharacterList;
