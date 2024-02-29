import { useQuery } from "react-query";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;

  max-width: 1080px;
  margin: auto;

  &::after {
    content: "";
    border-color: black;
    border-width: 4px;
    border-style: solid;
    position: absolute;
    top: -7px;
    bottom: -7px;
    left: -7px;
    right: -7px;
  }
  & p.message {
    text-align: center;
    font-size: 4em;
  }
  & p {
    text-align: center;
    font-size: 1.5em;
    margin: 0;

    &:nth-child(odd) {
      background-color: black;
      color: white;
    }
  }
`;

function CharacterCart({ id }) {
  const { isLoading, error, data } = useQuery(`getPeople/${id}`, () =>
    fetch(`http://localhost:3000/api/people/${id}`).then((res) => res.json())
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
      <p>NAME</p>
      <p>{data.name}</p>
      <p>HEIGHT</p>
      <p>{data.height}</p>
      <p>GENDER</p>
      <p>{data.gender}</p>
      <p>FILMS</p>
      <p>
        {data.films.map((film, index) => (
          <span key={index}>
            {film}
            <br />
          </span>
        ))}
      </p>
    </Container>
  );
}

export default CharacterCart;
