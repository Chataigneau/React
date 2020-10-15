import React from "react"
import {Grid, Box, Main} from "grommet"
import APropos from "./APropos/APropos"
import Experience from "./Experiences/Experiences.js"
import Competences from "./Competences/Competences.js"

const Content = () => {
    return(

    <Grid
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
        <Box>
            <h1>A propos</h1>
            <APropos></APropos>
        </Box>
    </Main>

  <Main gridArea="experiences" background="dark-6">
        <Box>
            <h1>Expériences</h1>
            <Experience></Experience>
        </Box>
  </Main>

  <Main gridArea="competences" background="dark-3">
    <Box>
        <h1>Compétences</h1>
        <Competences></Competences>
    </Box>
  </Main>

    </Grid>
    )
}

export default Content;