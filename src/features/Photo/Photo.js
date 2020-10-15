import React from "react"
import Icons from "react"
import {Box,Avatar} from "grommet"
import me from './pangolin.png'

const Photo = () => {
    return(
        <Box direction="row"  gap="small" justify="center" align="center">
            <Avatar src={me} />  
        </Box>
    )
}

export default Photo;