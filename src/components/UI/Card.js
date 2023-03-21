import React from 'react';

function Card(props){
  //const base_url="http://localhost:3000";
const  base_url="https://kidsappdata.netlify.app";
const url_img=base_url+"/assets/"+props.type+"/"+props.alphabet.img_url;
const url_audio=base_url+"/assets/"+props.type+"/audio/"+props.alphabet.audio_desc_url;
let back_img;
if(props.type==="shapes" && (props.alphabet.name==="Square" || props.alphabet.name==="Rectangle" )){
  back_img=<img src={url_img} alt={props.alphabet.desc} data-el={base_url+props.alphabet.audio_desc_url}  width="100%"/>
}
else{
  back_img=<img src={url_img} alt={props.alphabet.desc} data-el={base_url+props.alphabet.audio_desc_url}  width="100%" height="100%"/>
}


 
     const clickhandler=()=>{
        console.log("clicked");
        props.clickhandle(url_audio);
     }
    return(
        <div className="flip-card"  >
        <div className="flip-card-inner"  style={{border: `solid thick ${props.alphabet.colour}`}}>
          <div className="flip-card-front" onMouseEnter={clickhandler} style={{color:`${props.alphabet.colour}`}}>
            <h3>{props.alphabet.name}</h3>
            <p>{props.alphabet.desc}</p>
            <br/>
            <img src={url_img} alt={props.alphabet.desc}   width="120" height="120" />
          </div>
          <div className="flip-card-back">
           {back_img}
          </div>
        </div>
      </div>
    );
}

export default Card;