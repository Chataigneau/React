import React from 'react';
import { Grommet, Box, Header} from 'grommet'
import './App.css';
import Name from './features/Name/Name.js';
import Contact from './features/Contact/Contact.js'
import Content from './features/Content/Content.js'
import Navigation from './features/Navigation/Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Grommet> 
      <Router>
        <SomeComponent/>
      </Router>     
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

const BoutonDeNavigation = ({ libelle, history }) => (
  <button type="button" onClick={() => history.push('/ma-nouvelle-url')}>{libelle}</button>
);
const SomeComponent = () => (
  <Route path="/test" render={(props) => <BoutonDeNavigation {...props} title="Changer de page" />} />
)