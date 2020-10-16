import React from 'react';
import { Grommet, Box, Header, ResponsiveContext} from 'grommet'
import './App.css';
import Name from './features/Name/Name.js';
import Contact from './features/Contact/Contact.js'
import Content from './features/Content/Content.js'
import Navigation from './features/Navigation/Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {

  const size = React.useContext(ResponsiveContext);
  return (
    <Grommet>     
      <Navigation></Navigation>
      <Header>
        <Name></Name>
      </Header>
      <Box>
          <Box fill align="center" justify="center" direction="row">
            <Content></Content>
          </Box> 
      </Box>
      <Contact></Contact>
      </Grommet>
    
  );
}

export default App;