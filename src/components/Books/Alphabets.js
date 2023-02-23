import React from 'react';
import Card from '../UI/Card';
function Alphabets(props){
    const clickhandler=(data)=>{
      props.clickhandle(data);
    }
    const alphabets=props.alphabets.map(alphabet=>{
       return <Card key={alphabet.name} alphabet={alphabet} clickhandle={clickhandler}/>
    })
    return(
        <div className="grid-container">
            {alphabets}
        </div>
    );
}
export default Alphabets;