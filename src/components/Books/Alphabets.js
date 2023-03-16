import React,{useEffect, useState} from 'react';
import Card from '../UI/Card';
import AudioPlayer from '../UI/AudioPlayer';
import api from '../../api/alphabets';
import Header from '../Layouts/Header';
function Alphabets(props){
    
  // const api_url='/'+props.type;
    const [alphabets,setAlphabets]=useState([]);
    const[apiulr, setApiurl]=useState('/'+props.type);
    // retrive alphabets
  
   
    useEffect(()=>{
        setApiurl('/'+props.type);
        const getAlphabets=async()=>{
          const response=await api.get(apiulr);
          if(response.data) setAlphabets(response.data);
        }
        getAlphabets();
    },[props.type,apiulr]);

    const[audiosrc, setAudiosrc]=useState('');
    const clickhandler=(data)=>{
        console.log(data);
        setAudiosrc(data);
        let audio = document.getElementById("alphabetsSound");
        setTimeout( function() {
        audio.play();
}, 1);
  console.log("audio play");
  }
    const alphabetsArr=alphabets.map(alphabet=>{
       return <Card key={alphabet.name} alphabet={alphabet} type={props.type} clickhandle={clickhandler}/>
    })
    return(
        <>
        <Header heading={props.title}/>
        <AudioPlayer audiosrc={audiosrc} /> 
        <div className="grid-container">
           
            {alphabetsArr}
        </div>
        </>
        
    );
}
export default Alphabets;