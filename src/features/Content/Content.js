import React from "react"
import {Grid, Box} from "grommet"

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
  <Box gridArea="apropos" background="light-4" />
  <Box gridArea="experiences" background="dark-6" />
  <Box gridArea="competences" background="dark-3" />
    </Grid>
    )
}

export default Content;