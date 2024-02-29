import { useQuery } from "react-query";
import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.6em;
  border-radius: 5px;
`;

function SelectCharacter(props) {
  const { isLoading, error, data } = useQuery("getPeople", () =>
    fetch("http://localhost:3000/api/people").then((res) => res.json())
  );

  if (isLoading) return <p className="message">Chargement...</p>;

  if (error)
    return <p className="message">Une erreur est survenue: {error.message}</p>;

  return (
    <StyledSelect {...props}>
      <option value='0'>Choisir un personnage</option>
      {data.map((pers, index) => (
        <option value={index + 1} key={index}>
          {pers.name}
        </option>
      ))}
    </StyledSelect>
  );
}

export default SelectCharacter;
