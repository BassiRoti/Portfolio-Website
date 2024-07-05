import React from 'react'
import '../Components/Main.css'
import image from '../Components/abbas.jpg'

function Main() {
    const test=()=>{
        alert('There is really nothing to see here');
    }

    const test2=()=>{
      alert('Oops');
    }
  return (
  <>
  <div className='outer-container'>
  <div className='main-container'>

  <div className="animators">
    <div className="one"></div>
    <div className="two"></div>
    <div className="three"></div>
  </div>

   <img src={image} onClick={test} alt='abbas pic'></img>
  
  <div className='content' onClick={test2}>
    <h1>Syed Abbas Rizvi</h1><br/>
    <h4>A Bit About Me</h4>
    <p>I am a Undergraduate Computer Science Student from FAST NUCES PK. During my course, i gained several skills but my main area of interest is AI/ML and Web/Android Development </p>
  </div>

  <div className="animators">
    <div className="one"></div>
    <div className="two"></div>
    <div className="three"></div>
  </div>

  </div>
  </div>
  </>
  );
}

export default Main
