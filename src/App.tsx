import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'

function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`,
    }}>
      <GridItem area="nav" >
        <NavBar /> 
      </GridItem>
        <GridItem area="aside" bg="gold" _dark={{ bg: 'gray.700', color: 'white' }} display={{ base: 'none', lg: 'block' }}>
        Aside
      </GridItem>
        <GridItem area="main" _dark={{ bg: 'gray.900', color: 'white' }}>
          <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
