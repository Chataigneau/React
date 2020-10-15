import React from "react"
import {Nav,Button,Menu,Text} from "grommet"
import {Article,BarChart,Briefcase } from 'grommet-icons'

const Navigation = () => {
    return(
        <Nav align="center" flex={false} justify="center" direction="row-responsive" background="neutral-3" fill>
        <Text><Button icon ={<Menu icon={<Article/>}/>}/>A propos</Text>
        <Text><Button icon ={<Menu icon={<BarChart/>}/>}/>Mes compétences</Text>
        <Text><Button icon ={<Menu icon={<Briefcase/>}/>}/>Mes expériences</Text>
      </Nav>
    )
}

export default Navigation;