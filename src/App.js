import React, { useEffect, useState } from 'react';
import Alphabets from './components/Books/Alphabets';
import './App.css';
import AudioPlayer from './components/UI/AudioPlayer';
import api from './api/alphabets';


function App() {
  const[audiosrc, setAudiosrc]=useState();
  const [alphabets,setAlphabets]=useState([]);

  // retrive alphabets

  const retriveAlphabets=async()=>{
    const response=await api.get("/alphabets");
    return response.data;
  }

  useEffect(()=>{
      const getAlphabets=async()=>{
        const alphabets=await retriveAlphabets();
        if(alphabets) setAlphabets(alphabets);
      }
      getAlphabets();
  },[])
  const clickhandler=(data)=>{
    console.log(data);
   setAudiosrc(data);
   let audio = document.getElementById("alphabetsSound");
   setTimeout( function() {
    audio.play();
}, 1);
  
  console.log("audio play");
  }

  const showContent=()=>{
    document.getElementById("heading").style.display="none";
  }
  return (
    <div className="App">
      <div id="heading"> <button onClick={showContent}>Play A to Z</button></div>
     
      <AudioPlayer audiosrc={audiosrc} />
      <Alphabets alphabets={alphabets} clickhandle={clickhandler}/>
    </div>
  );
}

export default App;
