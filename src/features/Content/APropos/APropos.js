import React from "react"
import {Card,Main,CardBody,CardFooter,CardHeader,Button,Box} from "grommet"
import {Facebook,Instagram,Github,Contact} from "grommet-icons"
import Photo from "../../Photo/Photo"
import { Link } from "react-router-dom"

const APropos = () => {

    let facebook ="https://www.facebook.com/nicolas.chataigneau/"
    let instagram = "https://www.instagram.com/chataigneau/?hl=fr"
    let github = "https://github.com/Chataigneau/React"

    return(
        <Main align="center" gap="medium" margin="medium" direction="column">

            <Photo/>

            <Box>

            <Card fill="horizontal" fill background="light-1">
            <Box >
                <CardHeader border="all" pad="small" justify="center">
                    <h2>A propos de moi</h2>
                </CardHeader>
            </Box>
            
            <CardBody border="all" pad="large" fill>Je m'appelle Nicolas Chataigneau, j'ai 23 ans
            et je suis développeur mobile. Je suis en master 2 Mobile et IoT à Ynov Toulouse et en alternance à Capgemini.
            Voici les compétences que j'ai pu acquérir au cours de mes expériences en entreprise.
            Ce portefolio présente mes quelques projets réalisés au cours de ma formation et mes projets personnels.</CardBody>
            <CardFooter border="all" pad={{horizontal: "small"}} background="light-2"> 

            <Button icon={<Facebook color="blue"/>} href={facebook} hoverIndicator="neutral-3"/>
            <Button icon={<Instagram color="pink"/>} href={instagram} hoverIndicator="neutral-3"/>
            <Button icon={<Github color="gray"/>} href={github} hoverIndicator="neutral-3"/>
            <Button icon={<Contact color="yellow" />} href="/form" hoverIndicator="neutral-3"/>
            </CardFooter>
            </Card>

            </Box>
        </Main>
    )
}

export default APropos;