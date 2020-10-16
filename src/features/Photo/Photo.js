import React from "react"
import Icons from "react"
import {Box,Image} from "grommet"
import me from './my_face.jpg'
import photo from './my_photo.jpg'

const Photo = () => {
    return(
        /*
        <Box direction="row" justify="center" align="center">
            <Avatar src={me}/>  
        </Box>
        */

       <Box height="small" width="small">
       <Image
         fit="cover"
         src={me}
       />
     </Box>
    )
}

export default Photo;