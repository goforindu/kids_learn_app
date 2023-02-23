function AudioPlayer(props){
    
    return(
        <div>
             <audio src={props.audiosrc} id="alphabetsSound"></audio>
        </div>
    )
}
export default AudioPlayer;