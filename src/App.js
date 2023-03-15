import React from 'react';
import Alphabets from './components/Books/Alphabets';
import './App.css';
import Home from './components/Layouts/Home';
import {Routes, Route} from 'react-router-dom';

function App() {
 

 

 
  return (
    <>
    <Routes>
       <Route path="/home" element={<Home/>}/>
       <Route path="/alphabets" element={ <Alphabets type={"alphabets"} title="Alphabets A to Z"/>}/>
       <Route path="/numbers" element={ <Alphabets type={"numbers"} title="Numbers 1 to 20"/>}/>
       <Route path="/shapes" element={ <Alphabets type={"shapes"} title="Shapes"/>}/>
       <Route path="/fruits" element={ <Alphabets type={"fruits"} title="Fruits"/>}/>
       <Route path="/vegetables" element={ <Alphabets type={"vegetables"} title="Vegetables"/>}/>
       <Route path="/transports" element={ <Alphabets type={"transports"} title="Transports"/>}/>
       <Route path="/colours" element={ <Alphabets type={"colours"} title="Colours"/>}/>
       <Route path="/birds" element={ <Alphabets type={"birds"} title="Birds" />}/>
       <Route path="/wild" element={ <Alphabets type={"wild"} title="Wild Animals"/>}/>
       <Route path="/farm" element={ <Alphabets type={"farm"} title="Farm Animals"/>}/>
      </Routes>
    </>
      
    
  );
}

export default App;
