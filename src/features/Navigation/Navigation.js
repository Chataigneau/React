import React from "react"
import {Nav,Button,Menu,Text,ResponsiveContext, Avatar} from "grommet"
import {Article,BarChart,Briefcase } from 'grommet-icons'
import {BrowserRouter as Router,Switch,Link,useRouteMatch,useParams} from "react-router-dom";
import Photo from "../Photo/Photo"

const Navigation = () => {

  const size = React.useContext(ResponsiveContext);

    return(
        <Nav align="center" flex={false} justify="center" direction="row-responsive" background="neutral-3" size={size}>
        <Avatar alignContent="left">
          <Photo></Photo>
        </Avatar>
        <Text><Button icon ={<Menu icon={<Article/>}/>}/>A propos</Text>
        <Text><Button icon ={<Menu icon={<BarChart/>}/>}/>Mes compétences</Text>
        <Text><Button icon ={<Menu icon={<Briefcase/>}/>}/>Mes expériences</Text>
      </Nav>
    )
}

export default Navigation;