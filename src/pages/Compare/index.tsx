import { useEffect } from 'react'
import styled from 'styled-components'


const Main = styled.main`
  margin-top: var(--header-height);
`

function Compare() {
  useEffect(() => {
    document.title = 'Comparer deux personnages'
  }, [])

  return (
    <Main>
      <h1>Comparer deux personnages</h1>
    </Main>
  )
}

export default Compare
