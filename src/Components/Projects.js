import React from 'react'
import '../Components/Projects.css'

function Projects() {
  return (
    <>
     <div className='project-container'>
       <h1 className='projects-h1'>Projects</h1>
       <p className='projects-p1'>Source Code of all Projects are available on Github </p>
       
       <div className="timeline">

       <div className="checkpoint">
        <div className='setter'>
        <h2>Date: Dec 2021 - Jan 2022</h2>
        <p><b>1024 Game:</b> Implementation of the 1024 game using fundamental
        programming principles.</p>
       </div>
       </div>

       <div className="checkpoint">
        <div className='setter'>
        <h2>Date: April 2022 - May 2022</h2>
        <p><b>Ride Management System: </b>Creation in C++ integrating Object-Oriented
Programming concepts, simulating the functionality of ride-hailing
services like Uber or Careem.</p>
       </div>
       </div>

       <div className="checkpoint">
        <div className='setter'>
        <h2>Date: Nov 2022 - Dec 2022</h2>
        <p><b>Catch and Score Game: </b>: Development of a gaming application
exclusively in Assembly Language.</p>
       </div>
       </div>

       <div className="checkpoint">
        <div className='setter'>
          <h2>Date: March 2023 - April 2023</h2>
          <p><b>Snakes and Ladders Game: </b>: Implementation of the classic snakes and
ladders game utilizing advanced data structuring algorithms.
</p>
        </div>
       </div>

       <div className="checkpoint">
        <div className='setter'>
          <h2>Date: Sep 2023 - Dec 2023</h2>
          <p><b>Complaint Management System:</b>Project development in C++ adhering
to the Software Development Life Cycle (SDLC) principles.
</p>
        </div>
       </div>

       <div className="checkpoint">
        <div className='setter'>
          <h2>Date: Sep 2023 - Dec 2023</h2>
          <p><b>Ecommerce Website With SQL Backend: </b>Creation of a comprehensive eCommerce
platform employing React for dynamic frontend interactions and a
Database Management System for robust data handling.
</p>
        </div>
       </div>

       <div className="checkpoint">
        <div className='setter'>
          <h2>Date: Jan 2024 - May 2024 </h2>
          <p><b>Photo Editing App: </b>Development of a photo editing application using
Kotlin and Jetpack Compose to seamlessly enhance images.
</p>
        </div>
       </div>
       

       <div className="checkpoint">
        <div className='setter'>
          <h2>Date: Febuary 2024 - May 2024</h2>
          <p><b>AI Chat Bot: </b>An AI-powered chatbot tailored to offer concise summaries
          of specific websites.</p>
        </div>
       </div>
       

       

       </div>

     </div>
    </>
  );
}

export default Projects
