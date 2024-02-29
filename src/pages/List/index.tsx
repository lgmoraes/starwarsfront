import { useEffect } from 'react'
import styled from 'styled-components'


const Main = styled.main`
  margin-top: var(--header-height);
`

function List() {
  useEffect(() => {
    document.title = 'Acceuil'
  }, [])

  return (
    <Main>
      <h1>List</h1>
    </Main>
  )
}

export default List
