import  './Intro.css'
import hiba from '../../assets/2015_1418656736_490.jpg'
import { AiOutlineDown } from "react-icons/ai";
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
const Intro = () => {
  const textref = useRef()
  useEffect(()=>{
    
    init(textref.current,{showCursor: true,
      showCursor: true,
      backDelay:  1500,
      backSpeed:  60,
      strings: ['Developer', 'Designer' , 'Content Creater'] })
  },[])

  return (
    <div className='Intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src={hiba} alt='kkk' />
        </div>
      </div>
      <div className='right'>
        <div className="wrapper">
          <h2>Hi There , I'm</h2>
          <h1>Hiba AL Dayoub</h1>
          <h3>FreeLance <span ref={textref}></span></h3>
        </div>
        <a href="#portfolio">
          <AiOutlineDown />
        </a>
      </div>
    </div>
  )
}

export default Intro