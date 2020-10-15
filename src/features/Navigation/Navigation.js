import React from "react"
import {Nav,Button,Menu} from "grommet"
import {Article,BarChart,Briefcase } from 'grommet-icons'

const Navigation = () => {
    return(
        <Nav align="center" flex={false} justify="center" direction="row-responsive">
        <Button icon ={<Menu icon={<Article/>}/>}/>
        <Button icon ={<Menu icon={<BarChart/>}/>}/>
        <Button icon ={<Menu icon={<Briefcase/>}/>}/>
      </Nav>
    )
}

export default Navigation;