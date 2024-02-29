import { useEffect } from 'react'
import styled from 'styled-components'

import CharacterList from '../../components/CharacterList'


const Main = styled.main`
  
`

function List() {
  useEffect(() => {
    document.title = 'Acceuil'
  }, [])

  return (
    <Main>
      <h1>Liste de characteres</h1>
      <CharacterList />
    </Main>
  )
}

export default List
