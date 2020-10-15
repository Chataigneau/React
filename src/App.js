import React from 'react';
import { grommet, dark } from 'grommet/themes'
import { Grommet, Nav, Button, Box, Header, Menu } from 'grommet'
import './App.css';
import Name from './features/Name/Name.js';
import Contact from './features/Contact/Contact.js'
import Photo from './features/Photo/Photo.js'
import Content from './features/Content/Content.js'
import Navigation from './features/Navigation/Navigation';


function App() {
  return (

    <Grommet theme={dark} full>
      <Navigation></Navigation>
      <Header>
        <Name></Name>
        <Photo align="center"></Photo>
      </Header>
      <body>
          <Box fill align="center" justify="center" direction="row">
              <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                Learn React
              </a>
          </Box>

          <Content align="center"></Content>
          
      </body>
      <Contact></Contact>
      </Grommet>
    
  );
}

export default App;
