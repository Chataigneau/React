import React from "react"
import {Nav,Button,Menu,Text,ResponsiveContext, Avatar,Image } from "grommet"
import {Article,BarChart,Briefcase, Home , Overview , Mail } from 'grommet-icons'
import Photo from "../Photo/Photo"
import Ynov from './ynov.png'

const Navigation = ({setIsSelected}) => {

  const size = React.useContext(ResponsiveContext);

    return(
      <Nav align="center" flex={false} justify="center" direction="row-responsive" background="neutral-3" size={size}>
        <Avatar>
          <Photo></Photo>
        </Avatar>

        <Text><Button icon ={<Menu icon={<Article/>}/>} onClick={() => setIsSelected("About")} href="/"/>A propos</Text>
        <Text><Button icon ={<Menu icon={<BarChart/>}/>} onClick={() => setIsSelected("Competences")}/>Compétences</Text>
        <Text><Button icon ={<Menu icon={<Briefcase/>}/>} onClick={() => setIsSelected("Experiences")}/>Expériences</Text>
        <Text><Button icon ={<Menu icon={<Overview/>}/>} onClick={() => setIsSelected("Overview")}/>Overview</Text>
        <Text><Button icon ={<Menu icon={<Mail/>}/>} href="/form"/>Contacter</Text>

        <Image src={Ynov} size={size}/>

      </Nav>
    )
}

export default Navigation;