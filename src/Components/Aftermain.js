import React from 'react'
import '../Components/Aftermain.css'
import Resume from '../Components/Resume.pdf'

function Aftermain() {
  return (
    <>
    <div className="footer-container">
        <div className="box box1">
            <h3>Email</h3>
            <p><a>bassiiroti@gmail.com</a></p>
        </div>

        <div className='box box2'>
            <h3>Github</h3>
            <p><a href='https://github.com/BassiRoti'>BassiRoti</a></p>
        </div>

        <div className='box box3'>
           <h3>Resume</h3>
           <p><a href={Resume}>Resume.pdf</a></p>
        </div>


        
    </div>
    </>
  );
}

export default Aftermain
