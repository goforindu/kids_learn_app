import React from 'react';
import Alphabets from './components/Books/Alphabets';
import './App.css';
import Home from './components/Layouts/Home';
import {Routes, Route} from 'react-router-dom';

function App() {
 
  return (
    <>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/alphabets" element={ <Alphabets type={"alphabets"} title="Alphabets A to Z" api="api1"/>}/>
       <Route path="/numbers" element={ <Alphabets type={"numbers"} title="Numbers 1 to 20" api="api1"/>}/>
       <Route path="/shapes" element={ <Alphabets type={"shapes"} title="Shapes" api="api2"/>}/>
       <Route path="/fruits" element={ <Alphabets type={"fruits"} title="Fruits" api="api2"/>}/>
       <Route path="/vegetables" element={ <Alphabets type={"vegetables"} title="Vegetables" api="api3"/>}/>
       <Route path="/transports" element={ <Alphabets type={"transports"} title="Transports" api="api4"/>}/>
       <Route path="/colours" element={ <Alphabets type={"colours"} title="Colours" api="api1"/>}/>
       <Route path="/birds" element={ <Alphabets type={"birds"} title="Birds" api="api4" />}/>
       <Route path="/wild" element={ <Alphabets type={"wild"} title="Wild Animals" api="api2"/>}/>
       <Route path="/farm" element={ <Alphabets type={"farm"} title="Farm Animals" api="api3"/>}/>
      </Routes>
    </>
      
    
  );
}

export default App;
