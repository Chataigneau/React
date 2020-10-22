import React, { useState } from 'react';
import { Grommet, Box, Header, ResponsiveContext} from 'grommet'
import './App.css';
import Name from './features/Name/Name.js';
import Contact from './features/Contact/Contact.js'
import Content from './features/Content/Content.js'
import Navigation from './features/Navigation/Navigation';
import APropos from './features/Content/APropos/APropos';
import Experiences from './features/Content/Experiences/Experiences';
import Competences from './features/Content/Competences/Competences';


function App() {


  const size = React.useContext(ResponsiveContext);
  const [isSelected, setIsSelected] = useState("Accueil")
  return (
    <Grommet>

      <Navigation setIsSelected={setIsSelected}></Navigation>
      <Header>
        <Name></Name>
      </Header>

      <Box fill align="center" justify="center" direction="row">
        {
          isSelected === "Accueil"?
          <p>Accueil</p>

          : isSelected ==="About"?
          <APropos></APropos>

          : isSelected ==="Experiences"?
          <Experiences></Experiences>

          : isSelected ==="Competences"?
          <Competences></Competences>

          : <p>Rien</p>
        } 
        
      </Box>

      <Contact></Contact>

      </Grommet>
    
  );
}

export default App;