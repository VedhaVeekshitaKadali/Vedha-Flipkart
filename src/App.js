

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './FlipKart/Header';

import './css/flipkartclone.css'
import Section2 from './FlipKart/Section2';
import Section3 from './FlipKart/Section3';
import Section4 from './FlipKart/Section4';
import Section5 from './FlipKart/Section5';
import Axios from './Components/Axios';
import Tables from './Components/Tables';
function App() {
  /*
  return (
    <>
    <div class="container-fluid">
      <div class="row">
   <Logo/>
   <Navbar/>
   <Signin/>
   <Hello/>
   </div>
   </div>
  
    </>
  );*/
  return(
    <>
    <BrowserRouter>
    <div className='container sample'>
     <Header/>
     <Axios/>
     <Tables/>
     <Routes>
      <Route path='/Section2' element={<Section2/>}/>
    </Routes>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>

    </div>
    </BrowserRouter>
    
    </>
  )
}

export default App;
