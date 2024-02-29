import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 1em;

  color: white;
  background-color: black;

  & nav {
    display: flex;
    gap: 1.5em;
    flex-grow: 1;
    justify-content: center;

    font-size: 1.6em;

    & a.active {
      text-decoration: underline;
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <h1>STARWARSFRONT</h1>
      <nav>
        <NavLink to={"/"}>Liste</NavLink>
        <NavLink to={"/character/1"}>Personnage</NavLink>
        <NavLink to={"/compare"}>Comparer</NavLink>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
