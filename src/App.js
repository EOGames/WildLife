import Header from './Header';
import SideNav from './SideNav';
import {Route, Routes } from 'react-router-dom';
import React from 'react';
import SlideInfo from './SlideInfo';
import data from "./Database";



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
     
      <Header title ={data[0].title} />
      <SideNav />
      <SlideInfo info = {data[0].info}/>
      
      {AddBackground("homeBG")}
    </div>
  );
}

function About()
{
  return(
    <div className="App">

      <Header title ={data[1].title} />
      <SideNav />
      <SlideInfo info = {data[1].info}/>

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

