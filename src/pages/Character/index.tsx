import { useEffect } from 'react'
import styled from 'styled-components'


const Main = styled.main`
  margin-top: var(--header-height);
`

function Character() {
  useEffect(() => {
    document.title = 'Character'
  }, [])

  return (
    <Main>
      <h1>Character</h1>
    </Main>
  )
}

export default Character
