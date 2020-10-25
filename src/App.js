import React, { useState } from 'react';
import { Grommet, Box, Header, ResponsiveContext, Text } from 'grommet'
import './App.css';
import Name from './features/Name/Name.js';
import Contact from './features/Contact/Contact.js'
import Content from './features/Content/Content.js'
import Accueil from './features/Accueil/Accueil.js'
import Navigation from './features/Navigation/Navigation';
import APropos from './features/Content/APropos/APropos';
import Experiences from './features/Content/Experiences/Experiences';
import Competences from './features/Content/Competences/Competences';
import Loisirs from './features/Content/APropos/Loisirs';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Formulaire from './features/Formulaire/Formulaire.js'

function App() {

  const size = React.useContext(ResponsiveContext);
  const [isSelected, setIsSelected] = useState("Accueil")
  return (
    <Grommet>

      <Navigation setIsSelected={setIsSelected}></Navigation>

      <Header>
        <Name></Name>
      </Header>

      <Router>

        <Route exact path="/" component={() => 
        <Box align="center" justify="center" direction="row">
        {
          isSelected === "Accueil"?
          <Accueil/>

          : isSelected ==="About"?
          <Box gap="medium">
            <APropos/>
            <Loisirs/>
          </Box>

          : isSelected ==="Experiences"?
          <Experiences/>

          : isSelected ==="Competences"?
          <Competences/>

          : isSelected ==="Overview"?
          <Content/>

          : <p>Rien</p>
        } 
        
      </Box>
    }/>
        <Route exact path='/form' component={() => <Formulaire/>}/>

      </Router>

      <Contact></Contact>

      </Grommet>
    
  );
}

export default App;