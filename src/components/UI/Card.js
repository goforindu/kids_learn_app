function Card(props){
     const clickhandler=()=>{
        console.log("clicked");
        props.clickhandle(props.alphabet.audio_desc_url);
     }
    return(
        <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h1>{props.alphabet.name}</h1>
            <p>{props.alphabet.desc}</p>
            <br/>
            <img src={props.alphabet.img_url} alt={props.alphabet.desc}   width="120" height="120" />
          </div>
          <div className="flip-card-back" onClick={clickhandler}>
            <img src={props.alphabet.img_url} alt={props.alphabet.desc} data-el={props.alphabet.audio_desc_url}  width="280" height="280" />
           
          </div>
        </div>
      </div>
    );
}

export default Card;