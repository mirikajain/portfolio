import React from 'react';
import './skills.css';


const skills = () => {
  return (
    <div id = "skills">
      <h2>SKILLS</h2>
      <h3>SOFT SKILLS:</h3>
      <div id = "softskills">
        <div>Communication skills</div>
        <div>Leadership quality</div>
        <div>Ability to think critically in situations</div>
        <div>Time management</div>
        

      </div>
      <br></br>
      
      <h3>HARD SKILLS:</h3>
      <div id="hardskills">
        <div><a href="#">Python</a></div>
        <div><a href="#">HTML CSS</a></div>
        <div><a href="#">Javascript</a></div>
        <div><a href="#">C Programming</a></div>
        <div><a href="#">React js</a></div>
        <div><a href="#">MySQL</a></div>

      

      </div>
      



      
    </div>
  )
}

export default skills;
