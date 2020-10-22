import React from 'react'
import {Box} from 'grommet'
import android_background from './androidBackground.png'

const Accueil = () => {

    return(
        <Box style={{backgroundImage :`url(${android_background})`}}>
            <h2>Bienvenue dans mon portefolio</h2>
        </Box>
    )
}

export default Accueil;