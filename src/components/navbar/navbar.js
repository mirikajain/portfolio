import React from 'react';
import './navbar.css';

const navbar = () => {
  return (
    
    <div id ="navbox">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div id="linksdiv">
        <ul  id = "links">
          <a href="javascript:void(0);" class="icon" onClick={myFunction}>
            <i class="fa fa-bars"></i>
          </a>
          <li><a href="#" class="navelm"> Home</a></li>
          <li><a href="#about-grid" class="navelm"> About</a></li>
          <li><a href="#project" class="navelm"> Projects</a></li>
          <li><a href="#form" class="navelm"> Contact me</a></li>
        </ul>

      </div>
    </div>
    
    
  )
}

export default navbar;

function myFunction() {
  var items = document.getElementsByClassName("navelm");
  for(let item of items){
    if(item.hidden){
      item.hidden = false;
    } 
    else{
      item.hidden = true;
    };
  }
  
}