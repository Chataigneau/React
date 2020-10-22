import React from 'react'
import { Avatar, Box, Main, Text } from 'grommet'
import smashBall from './smashBall.png'
import tennisBall from './tennisBall.png'
import mario from './mario.png'
import android from '../Competences/android.png'

const Loisirs = () => {
    return(

        <Main gap="small" align="center" justify="center">
            <Box fill align="center" border="all" gap="small">

            <h1>Loisirs et centre d'intérêts</h1>

            </Box>

            <Avatar src={android}/>
            <Text>Projets mobiles (Android Natif)</Text>
            <Avatar src={tennisBall}/>
            <Text>Joueur de tennis</Text>
            <Avatar src={smashBall}/>
            <Text>Tournoi Super Smash Bros Ultimate</Text>
            <Avatar src={mario}/>
            <Text>Jeux vidéos en tout genre</Text>

        </Main>
    )
}

export default Loisirs;