import React from "react"
import {Text,Main,Box,Avatar} from "grommet"
import uipath_logo from "./uipath.jpg"

const Experiences = () => {
    return(
        <Main>
            <Box direction="row"  gap="large" justify="center" align="center">
                <Avatar src={uipath_logo} />  
            </Box>
            <Text>RPA - Automatisation de processus</Text>
            <Text>Developpement mobile</Text>
        </Main>
    )
}

export default Experiences;