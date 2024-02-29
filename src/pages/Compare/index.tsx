import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

import SelectCharacter from "../../components/SelectCharacter";
import CharacterCart from "../../components/CharacterCart";

const Main = styled.main`
  max-width: 1080px;
  margin: auto;

  & .layout {
    display: flex;
    & .left,
    .right {
      padding: 1em;
      flex: 1 1;
    }
  }
  & select {
    margin-bottom: 1em;

    & option:first-child {
      font-weight: 100;
    }
  }
`;

function Compare() {
  useEffect(() => {
    document.title = "Comparer deux personnages";
  }, []);

  const [idLeft, setIdLeft] = useState();
  const [idRight, setIdRight] = useState();

  return (
    <Main>
      <h1>Comparer deux personnages</h1>
      <div className="layout">
        <div className="left">
          <SelectCharacter onChange={(e) => setIdLeft(e.target.value)} />
          {idLeft && idLeft != 0 && <CharacterCart id={idLeft} />}
        </div>
        <div className="right">
          <SelectCharacter onChange={(e) => setIdRight(e.target.value)} />
          {idRight && idRight != 0 && <CharacterCart id={idRight} />}
        </div>
      </div>
    </Main>
  );
}

export default Compare;
