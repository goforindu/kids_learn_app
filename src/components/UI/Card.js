function Card(props){
 // const base_url="http://localhost:3006";
const  base_url="https://kidsappdata.netlify.app";
  const img_url=base_url+props.alphabet.img_url;
     const clickhandler=()=>{
        console.log("clicked");
        props.clickhandle(base_url+props.alphabet.audio_desc_url);
     }
    return(
        <div className="flip-card"  >
        <div className="flip-card-inner"  style={{border: `solid thick ${props.alphabet.colour}`}}>
          <div className="flip-card-front" onMouseEnter={clickhandler} style={{color:`${props.alphabet.colour}`}}>
            <h1>{props.alphabet.name}</h1>
            <p>{props.alphabet.desc}</p>
            <br/>
            <img src={img_url} alt={props.alphabet.desc}   width="120" height="120" />
          </div>
          <div className="flip-card-back">
            <img src={img_url} alt={props.alphabet.desc} data-el={base_url+props.alphabet.audio_desc_url}  width="100%" height="100%" />
           
          </div>
        </div>
      </div>
    );
}

export default Card;