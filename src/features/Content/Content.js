import React from "react"
import {Grid, Box, Main} from "grommet"

const Content = () => {
    return(

    <Grid className="center"
    rows={['medium', 'medium']}
    columns={['medium', 'medium']}
    gap="medium"
    areas={[
    { name: 'apropos', start: [0, 0], end: [1, 0] },
    { name: 'experiences', start: [0, 1], end: [0, 1] },
    { name: 'competences', start: [1, 1], end: [1, 1] },
    ]}
    >
  <Main gridArea="apropos" background="light-4">
    <Box className="center">
        <h1>A propos</h1>
        <p>23 ans</p>
    </Box>
  </Main>

  <Main gridArea="experiences" background="dark-6">
  <Box className="center">
        <h1>Expériences</h1>
        <p>Developpeur mobile</p>
    </Box>
  </Main>

  <Main gridArea="competences" background="dark-3">
  <Box className="center">
        <h1>Compétences</h1>
        <p>Android</p>
    </Box>
  </Main>
    </Grid>
    )
}

export default Content;