import React from "react"
import {Nav,Button,Menu,Text,ResponsiveContext, Avatar,Image } from "grommet"
import {Article,BarChart,Briefcase, Home , Overview , Mail } from 'grommet-icons'
import Photo from "../Photo/Photo"
import Ynov from './ynov.png'

const Navigation = () => {

  const size = React.useContext(ResponsiveContext);

    return(
      <Nav align="center" flex={false} justify="center" direction="row-responsive" background="neutral-3" size={size}>
        <Avatar>
          <Photo></Photo>
        </Avatar>

        <Text><Button icon ={<Menu icon={<Article/>}/>} href="/"/>A propos</Text>
        <Text><Button icon ={<Menu icon={<BarChart/>}/>} href="/comp"/>Compétences</Text>
        <Text><Button icon ={<Menu icon={<Briefcase/>}/>} href="exp"/>Expériences</Text>
        <Text><Button icon ={<Menu icon={<Overview/>}/>} href="overview"/>Overview</Text>
        <Text><Button icon ={<Menu icon={<Mail/>}/>} href="/form"/>Contacter</Text>

        <Image src={Ynov} size={size}/>

      </Nav>
    )
}

export default Navigation;