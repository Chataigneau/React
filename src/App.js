import React from 'react';
import { grommet, dark } from 'grommet/themes'
import { Grommet, Nav, Button, Box, Header, Menu } from 'grommet'
import './App.css';
import Name from './features/Name/Name.js';
import Contact from './features/Contact/Contact.js'
import Photo from './features/Photo/Photo.js'
import {Article,BarChart,Briefcase } from 'grommet-icons'
import APropos from './features/Content/APropos/APropos';
import Content from './features/Content/Content.js'


function App() {
  return (

    <Grommet theme={dark} full>
      <Nav align="center" flex={false} justify="center" direction="row-responsive">
        <Button icon ={<Menu icon={<Article/>}/>}/>
        <Button icon ={<Menu icon={<BarChart/>}/>}/>
        <Button icon ={<Menu icon={<Briefcase/>}/>}/>
      </Nav>
      <Header>
        <Name></Name>
      </Header>
      <body>
          <Box fill align="center" justify="center" direction="row">
              <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                Learn React
              </a>
          </Box>

          <Content></Content>
          
      </body>
      <Contact></Contact>
      </Grommet>
    
  );
}

export default App;
