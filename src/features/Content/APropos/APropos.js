import React from "react"
import {Card,Main,CardBody,CardFooter,CardHeader,Button,Box} from "grommet"
import {Facebook,Instagram,Github,Contact} from "grommet-icons"
import Photo from "../../Photo/Photo"

const APropos = () => {
    return(
        <Main align="center" gap="medium">

            <Photo/>

            <Box background="light-4">

            <Card fill="horizontal" height="medium" width="medium" background="light-1">
            <Box >
                <CardHeader border="all"pad="small" justify="center">
                    <h2>A propos de moi</h2>
                </CardHeader>
            </Box>
            
            <CardBody border="all" pad="large" fill>Je m'appelle Nicolas Chataigneau, j'ai 23 ans
            et je suis développeur mobile. Je suis en master 2 Mobile et IoT à Ynov Toulouse et en alternance à Capgemini.
            Voici les compétences que j'ai pu acquérir au cours de mes expériences en entreprise.
            Ce portefolio présente mes quelques projets réalisés au cours de ma formation et mes projets personnels.</CardBody>
            <CardFooter border="all" pad={{horizontal: "small"}} background="light-2"> 

            <Button icon={<Facebook color="blue"/>} href="https://www.facebook.com/nicolas.chataigneau/" hoverIndicator="neutral-3"/>
            <Button icon={<Instagram color="pink"/>} href="https://www.instagram.com/chataigneau/?hl=fr" hoverIndicator="neutral-3"/>
            <Button icon={<Github color="gray"/>} href="https://github.com/Chataigneau/React" hoverIndicator="neutral-3"/>
            <Button icon={<Contact color="yellow" />} hoverIndicator="neutral-3"/>
            </CardFooter>
            </Card>

            </Box>
        </Main>
    )
}

export default APropos;