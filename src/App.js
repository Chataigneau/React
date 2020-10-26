import React, { useState } from 'react';
import { Grommet, Box, Header, ResponsiveContext } from 'grommet'
import './App.css';
import Name from './features/Name/Name.js';
import Contact from './features/Contact/Contact.js'
import Content from './features/Content/Content.js'
import Navigation from './features/Navigation/Navigation';
import APropos from './features/Content/APropos/APropos';
import Experiences from './features/Content/Experiences/Experiences';
import Competences from './features/Content/Competences/Competences';
import Loisirs from './features/Content/APropos/Loisirs';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Formulaire from './features/Formulaire/Formulaire.js'

function App() {

  const size = React.useContext(ResponsiveContext);
  const [isSelected, setIsSelected] = useState("About")
  return (
    <Grommet>

      <Navigation setIsSelected={setIsSelected}></Navigation>

      <Header>
        <Name></Name>
      </Header>

      <Router>
        <Box align="center" justify="center" direction="row-responsive">

          <Route exact path="/" component={() =>
            <Box gap="medium">
              <APropos/>
              <Loisirs/>
            </Box>
          }/>

          <Route exact path="/comp" component={() => <Competences/>}/>

          <Route exact path="/exp" component={() => <Experiences/>}/>

          <Route exact path="/overview" component={() => <Content/>}/>

          <Route exact path='/form' component={() => <Formulaire/>}/>

        </Box>

      </Router>

      <Contact></Contact>

      </Grommet>
    
  );
}

export default App;