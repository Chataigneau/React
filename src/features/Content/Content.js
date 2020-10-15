import React from "react"
import {Grid, Box, Main} from "grommet"
import APropos from "./APropos/APropos"
import Experience from "./Experiences/Experiences.js"
import Competences from "./Competences/Competences.js"

const Content = () => {
    return(

    <Grid
    rows={['medium', 'large']}
    columns={['medium', 'medium']}
    gap="large"
    areas={[
    { name: 'apropos', start: [0, 0], end: [1, 0] },
    { name: 'experiences', start: [0, 1], end: [0, 1] },
    { name: 'competences', start: [1, 1], end: [1, 1] },
    ]}
    >
    <Main gridArea="apropos" background="light-4">
        <Box>
            <APropos></APropos>
        </Box>
    </Main>

  <Main gridArea="experiences" background="dark-6">
        <Box align="center">
            <h1>Expériences</h1>
        </Box>

        <Box>
            <Experience></Experience>
        </Box>
  </Main>

  <Main gridArea="competences" background="dark-3">
    <Box align="center">
        <h1>Compétences</h1>
    </Box>

    <Box>
        <Competences></Competences>
    </Box>
  </Main>

    </Grid>
    )
}

export default Content;