import React from 'react';
import { Counter } from './features/counter/Counter';
import HeaderComponent from './components/Header';
import Footer from './components/Footer';
import Mens from './components/MensComponent';
import CampsiteList from './features/campsites/CampsitesList';


import './App.css';

function App() {
  return (
    <div className="App">
           <HeaderComponent />
            <Mens />
            
    </div>
  );
}

export default App;
/*<Navbar dark color='primary' sticky='top' expand='md'>
               <Container>
                    <NavbarBrand href='/'>
                        <img src={VitengeLogo} alt='vitenge logo' />
                    </NavbarBrand>
                </Container>
            </Navbar>*/