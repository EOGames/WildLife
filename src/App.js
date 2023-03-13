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

        <Route path='/About' element ={<About />} />

        <Route path='/Contact' element={<Contact/>} />
        
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

      
      {AddBackground("homeBG")}
    </div>
  );
}

function About()
{
  return(
    <div className="App">

      <Header />
      <SideNav />

      {AddBackground("aboutBG")}
    </div>
  );
}

function Contact()
{
  return(
    <div className="App">

    <Header />
    <SideNav />

    {AddBackground("contact")}
    </div>
  );
}


function AddBackground(cl="homeBG")
{
  if (document.body.classList.length >0)
  {
    document.body.classList = [];
  }
  document.body.classList.add(cl);
}

