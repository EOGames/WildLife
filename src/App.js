import Header from './Header';
import SideNav from './SideNav';
import {Route, Routes } from 'react-router-dom';
import React from 'react';


class App extends React.Component {
 

  render()
  {

    return (
      <Routes>
      
        <Route path='/' element = {<Home />} />
       

        <Route path='/About' element ={<About />}/>
        
    </Routes>
        );
  }
}

export default App;


function Home()
{
  
 
  return(
    <div className="App"  >
     
      <Header />
      <SideNav />

      
      {AddBackground()}
    </div>
  );
}

function About()
{
  return(
    <div className="App">

      <Header />
      <SideNav />
    </div>
  );
}


function AddBackground()
{
  document.body.classList.add("homeBG");
}

