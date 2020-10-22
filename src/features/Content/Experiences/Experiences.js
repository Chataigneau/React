import React from "react"
import {Text,Main,Box, Avatar} from "grommet"
import uipath_logo from "./uipath.jpg"

const Experiences = () => {
    return(
        <Main background="light-6" gap="large" margin="medium">

            <Box direction="row" justify="center" align="center" gap="large">
                <Avatar src={uipath_logo} />
            </Box>

            <Box direction="row" justify="center" gap="large" align="center">
                <Text>RPA - Automatisation de processus</Text>
                <Text>Developpement mobile</Text>
            </Box>
            
        </Main>
    )
}

export default Experiences;