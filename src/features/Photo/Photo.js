import React from "react"
import {Box,Image} from "grommet"
import photo from './photo.jpg'

const Photo = () => {
    return(
        <Box height="medium" width="medium">
            <Image fit="contain" src={photo}/>
        </Box>
    )
}

export default Photo;