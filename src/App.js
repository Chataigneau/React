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
      </Header>
      <body>
          <Box fill align="center" justify="center" direction="row">
            <Content></Content>
          </Box> 
      </body>
      <Contact></Contact>
      </Grommet>
    
  );
}

export default App;
