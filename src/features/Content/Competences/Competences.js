import React from "react"
import {Text,Main,Box,Avatar} from "grommet"
import android_logo from "./android.png"

const Competences = () => {
    return(
        <Main>
            <Box direction="row"  gap="large" justify="center" align="center">
                <Avatar src={android_logo} />  
            </Box>
            <Text>Android</Text>
        </Main>
    )
}

export default Competences;