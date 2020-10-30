import React from "react"
import {Main,Box, Avatar, List} from "grommet"
import uipath_logo from "./uipath.jpg"

const Experiences = () => {
    return(
        <Main background="light-6" gap="large" margin="medium">

            <Box direction="row" justify="center" align="center" gap="large">
                <Avatar src={uipath_logo} />
            </Box>

            <Box direction="row" justify="center" gap="large" align="center">
                <List
                    primaryKey="nom_mission"
                    secondaryKey="nom_boite"
                    data={[
                        {nom_mission:'Developper RPA',nom_boite:'Capgemini'},
                        {nom_mission:'Certification développeur RPA',nom_boite:'UiPath'},
                        {nom_mission:'Plateforme de test Gatling (Scala)',nom_boite:'Capgemini'},
                        {nom_mission:'Script Korn Shell',nom_boite:'Capgemini'},
                        {nom_mission:'Application météo Android natif',nom_boite:'Sterella'},
                        {nom_mission:'Réparation équipements hardware',nom_boite:'Xizeos'},
                    ]}
                    />
            </Box>
            
        </Main>
    )
}

export default Experiences;