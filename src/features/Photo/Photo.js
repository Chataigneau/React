import React from "react"
import {Box,Image} from "grommet"
import photo from './photo.jpg'

const Photo = () => {
    return(
        <Box height="small" width="small">
            <Image fit="cover" src={photo}/>
        </Box>
    )
}

export default Photo;