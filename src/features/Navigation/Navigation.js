import React from "react"
import {Nav,Button,Menu,Text,ResponsiveContext, Avatar,Image, Box} from "grommet"
import {Article,BarChart,Briefcase, Home , Overview } from 'grommet-icons'
import Photo from "../Photo/Photo"
import Ynov from './ynov.png'
import APropos from "../Content/APropos/APropos.js";
import Competences from '../Content/Competences/Competences.js'
import Experiences from '../Content/Experiences/Experiences.js'

const Navigation = ({setIsSelected}) => {

  const size = React.useContext(ResponsiveContext);

    return(
      <Nav align="center" flex={false} justify="center" direction="row-responsive" background="neutral-3" size={size}>
        <Avatar>
          <Photo></Photo>
        </Avatar>

        <Text><Button icon ={<Menu icon={<Home/>}/>} onClick={() => setIsSelected("Accueil")}/>Accueil</Text>

        <Text><Button icon ={<Menu icon={<Article/>}/>} onClick={() => setIsSelected("About")}/>A propos</Text>
        
        <Text><Button icon ={<Menu icon={<BarChart/>}/>} onClick={() => setIsSelected("Competences")}/>Mes compétences</Text>
          
        <Text><Button icon ={<Menu icon={<Briefcase/>}/>} onClick={() => setIsSelected("Experiences")}/>Mes expériences</Text>

        <Text><Button icon ={<Menu icon={<Overview/>}/>} onClick={() => setIsSelected("Overview")}/>Overview</Text>

        <Image src={Ynov}/>

      </Nav>
    )
}

export default Navigation;