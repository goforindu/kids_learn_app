import React,{useEffect, useState} from 'react';
import Card from '../UI/Card';
import AudioPlayer from '../UI/AudioPlayer';
import api1 from '../../api/alphabets';
import api2 from '../../api/shapesfruitswild';
import api3 from '../../api/vegetablesfarms';
import api4 from '../../api/shapesfruitswild';
import Header from '../Layouts/Header';
function Alphabets(props){
    
  // const api_url='/'+props.type;
    const [alphabets,setAlphabets]=useState([]);
    const[apiulr, setApiurl]=useState('/'+props.type);
    // retrive alphabets
  
   
    useEffect(()=>{
        setApiurl('/'+props.type);
        const getAlphabets=async()=>{
          let response="";
          if(props.api==="api1"){
            response=await api1.get(apiulr);
          }
          else if(props.api==="api2"){
             response=await api2.get(apiulr);
          }
          else if(props.api==="api3"){
            response=await api3.get(apiulr);
          }
          else if(props.api==="api4"){
            response=await api4.get(apiulr);
          }
          
          if(response.data) setAlphabets(response.data);
        }
        getAlphabets();
    },[props.type,props.api,apiulr]);

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