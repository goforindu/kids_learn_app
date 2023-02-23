import React, { useState } from 'react';
import Alphabets from './components/Books/Alphabets';
import './App.css';
import AudioPlayer from './components/UI/AudioPlayer';

const AlphabetsArr=[
  {
    name:"Aa",
    desc:"Apple",
    img_url:"./assets/apple.png",
    audio_url:"./assets/media/a.mp3",
    audio_desc_url:"./assets/media/a_desc.mp3"
  },
  {
    name:"Bb",
    desc:"Ball",
    img_url:"assets/ball.png",
    audio_url:"./assets/media/b.mp3",
    audio_desc_url:"./assets/media/b_desc.mp3"
  },
  {
    name:"Cc",
    desc:"Cat",
    img_url:"./assets/cat.png",
    audio_url:"./assets/media/c.mp3",
    audio_desc_url:"./assets/media/c_desc.mp3"
  },
  {
    name:"Dd",
    desc:"Dog",
    img_url:"assets/dog.png",
    audio_url:"./assets/media/d.mp3",
    audio_desc_url:"./assets/media/d_desc.mp3"
  },{
    name:"Ee",
    desc:"Elephant",
    img_url:"./assets/elephant.png",
    audio_url:"./assets/media/e.mp3",
    audio_desc_url:"./assets/media/e_desc.mp3"
  },
  {
    name:"Ff",
    desc:"Fish",
    img_url:"assets/fish.png",
    audio_url:"./assets/media/f.mp3",
    audio_desc_url:"./assets/media/f_desc.mp3"
  },{
    name:"Gg",
    desc:"Girrafe",
    img_url:"./assets/girrafe.png",
    audio_url:"./assets/media/g.mp3",
    audio_desc_url:"./assets/media/g_desc.mp3"
  },
  {
    name:"Hh",
    desc:"Hat",
    img_url:"assets/hat.png",
    audio_url:"./assets/media/h.mp3",
    audio_desc_url:"./assets/media/h_desc.mp3"
  },{
    name:"Ii",
    desc:"Ice Cream",
    img_url:"./assets/icecream.png",
    audio_url:"./assets/media/i.mp3",
    audio_desc_url:"./assets/media/i_desc.mp3"
  },
  {
    name:"Jj",
    desc:"Juice",
    img_url:"assets/juice.png",
    audio_url:"./assets/media/j.mp3",
    audio_desc_url:"./assets/media/j_desc.mp3"
  },{
    name:"Kk",
    desc:"Kite",
    img_url:"./assets/kite.png",
    audio_url:"./assets/media/k.mp3",
    audio_desc_url:"./assets/media/k_desc.mp3"
  },
  {
    name:"Ll",
    desc:"Lion",
    img_url:"assets/lion.png",
    audio_url:"./assets/media/l.mp3",
    audio_desc_url:"./assets/media/l_desc.mp3"
  },{
    name:"Mm",
    desc:"Monkey",
    img_url:"./assets/monkey.png",
    audio_url:"./assets/media/m.mp3",
    audio_desc_url:"./assets/media/m_desc.mp3"
  },
  {
    name:"Nn",
    desc:"Net",
    img_url:"assets/net.png",
    audio_url:"./assets/media/n.mp3",
    audio_desc_url:"./assets/media/n_desc.mp3"
  },{
    name:"Oo",
    desc:"Orange",
    img_url:"./assets/orange.png",
    audio_url:"./assets/media/o.mp3",
    audio_desc_url:"./assets/media/o_desc.mp3"
  },
  {
    name:"Pp",
    desc:"Parrot",
    img_url:"assets/parrot.png",
    audio_url:"./assets/media/p.mp3",
    audio_desc_url:"./assets/media/p_desc.mp3"
  },{
    name:"Q",
    desc:"Quilt",
    img_url:"./assets/quilt.png",
    audio_url:"./assets/media/q.mp3",
    audio_desc_url:"./assets/media/q_desc.mp3"
  },
  {
    name:"Rr",
    desc:"Rabbit",
    img_url:"assets/rabbit.png",
    audio_url:"./assets/media/r.mp3",
    audio_desc_url:"./assets/media/r_desc.mp3"
  },{
    name:"Ss",
    desc:"Sun",
    img_url:"./assets/sun.png",
    audio_url:"./assets/media/s.mp3",
    audio_desc_url:"./assets/media/s_desc.mp3"
  },
  {
    name:"Tt",
    desc:"Tiger",
    img_url:"assets/tiger.png",
    audio_url:"./assets/media/t.mp3",
    audio_desc_url:"./assets/media/t_desc.mp3"
  },{
    name:"Uu",
    desc:"Umbrella",
    img_url:"./assets/umbrella.png",
    audio_url:"./assets/media/u.mp3",
    audio_desc_url:"./assets/media/u_desc.mp3"
  },
  {
    name:"Vv",
    desc:"Van",
    img_url:"assets/van.png",
    audio_url:"./assets/media/v.mp3",
    audio_desc_url:"./assets/media/v_desc.mp3"
  },{
    name:"Ww",
    desc:"Wool",
    img_url:"./assets/wool.png",
    audio_url:"./assets/media/w.mp3",
    audio_desc_url:"./assets/media/w_desc.mp3"
  },
  {
    name:"Xx",
    desc:"Xmas Tree",
    img_url:"assets/xmas.png",
    audio_url:"./assets/media/x.mp3",
    audio_desc_url:"./assets/media/x_desc.mp3"
  },{
    name:"Yy",
    desc:"Yak",
    img_url:"./assets/yak.png",
    audio_url:"./assets/media/y.mp3",
    audio_desc_url:"./assets/media/y_desc.mp3"
  },
  {
    name:"Zz",
    desc:"Zebra",
    img_url:"assets/zebra.png",
    audio_url:"./assets/media/z.mp3",
    audio_desc_url:"./assets/media/z_desc.mp3"
  }

]

function App() {
  const[audiosrc, setAudiosrc]=useState();
  const clickhandler=(data)=>{
    console.log(data);
   setAudiosrc(data);
   let audio = document.getElementById("alphabetsSound");
   setTimeout( function() {
    audio.play();
}, 1);
  
  console.log("audio play");
  }
  return (
    <div className="App">
      <h1 id="heading">Let's Learn A to Z</h1>
      <AudioPlayer audiosrc={audiosrc} />
      <Alphabets alphabets={AlphabetsArr} clickhandle={clickhandler}/>
    </div>
  );
}

export default App;
