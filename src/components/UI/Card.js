import React from 'react';

function Card(props){
 // const base_url="http://localhost:3001";
const  base_url="https://kidsappdata.netlify.app";
let shapes;
let img_desc_url;
if(props.type==="shapes" && (props.alphabet.name==="Square" || props.alphabet.name==="Rectangle" )){
  img_desc_url=base_url+props.alphabet.img_url;
  shapes=<img src={img_desc_url} alt={props.alphabet.desc} data-el={base_url+props.alphabet.audio_desc_url}  width="100%"/>
}
else{
  img_desc_url=base_url+props.alphabet.img_url;
  shapes=<img src={img_desc_url} alt={props.alphabet.desc} data-el={base_url+props.alphabet.audio_desc_url}  width="100%" height="100%"/>
}


  const img_url=base_url+props.alphabet.img_url;
     const clickhandler=()=>{
        console.log("clicked");
        props.clickhandle(base_url+props.alphabet.audio_desc_url);
     }
    return(
        <div className="flip-card"  >
        <div className="flip-card-inner"  style={{border: `solid thick ${props.alphabet.colour}`}}>
          <div className="flip-card-front" onMouseEnter={clickhandler} style={{color:`${props.alphabet.colour}`}}>
            <h3>{props.alphabet.name}</h3>
            <p>{props.alphabet.desc}</p>
            <br/>
            <img src={img_url} alt={props.alphabet.desc}   width="120" height="120" />
          </div>
          <div className="flip-card-back">
           {shapes}
          </div>
        </div>
      </div>
    );
}

export default Card;