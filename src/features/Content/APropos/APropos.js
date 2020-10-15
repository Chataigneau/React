import React from "react"
import {Card,Main,CardBody,CardFooter,CardHeader,Button,Box} from "grommet"
import {BarChart,Briefcase} from "grommet-icons"

const APropos = () => {
    return(
        <Main>
            <Card fill="horizontal" height="medium" width="medium" background="light-1">
            <Box align="center">
                <CardHeader  pad="medium">
                    <h2>A propos</h2>
                </CardHeader>
            </Box>
            
            <CardBody border="all" pad="medium">Je m'appelle Nicolas Chataigneau, j'ai 23 ans
            et je suis développeur mobile. Je suis en master 2 Mobile & IoT à Ynov Toulouse et en alternance à Capgemini.
            Voici les compétences que j'ai pu acquérir au cours de mes expériences en entreprise.
            Ce portefolio présente mes quelques projets réalisés au cours de ma formation et mes projets personnels.</CardBody>
            <CardFooter border="all" pad={{horizontal: "small"}} background="light-2">   
            <Button
                icon={<BarChart color="blue" />}
                hoverIndicator
            />
            <Button icon={<Briefcase color="green" />} hoverIndicator />
            </CardFooter>
            </Card>
        </Main>
    )
}

export default APropos;