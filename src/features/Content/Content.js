import React from "react"
import {Grid, Box, Main,ResponsiveContext} from "grommet"
import APropos from "./APropos/APropos"
import Experience from "./Experiences/Experiences.js"
import Competences from "./Competences/Competences.js"

const Content = () => {

    const size = React.useContext(ResponsiveContext);
    return(

    <Grid
    rows={[{size}, {size}]}
    columns={[{size}, {size}]}
    areas={[
    { name: 'apropos', start: [0, 0], end: [1, 0] },
    { name: 'experiences', start: [0, 1], end: [0, 1] },
    { name: 'competences', start: [1, 1], end: [1, 1] },
    ]}
    >
    <Main gridArea="apropos">
        <APropos></APropos>
    </Main>

  <Main gridArea="experiences" gap="small">
    <Box align="center" border='all' background="light-6" margin="medium">
        <h1>Expériences</h1>
    </Box>

    <Box fill>
        <Experience></Experience>
    </Box>

  </Main>

  <Main gridArea="competences" gap="small">
    <Box align="center" border="all" background="light-6" margin="medium">
        <h1>Compétences</h1>
    </Box>

    <Box fill>
        <Competences></Competences>
    </Box>

  </Main>

    </Grid>
    )
}

export default Content;