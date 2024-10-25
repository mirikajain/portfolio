import React from 'react';
import './form.css';

const form = () => {
  return (
    <div>
        <form>
            
            <div id="form"> 
            <h2>CONTACT DETAILS</h2>
                <div id = "name">
                    <label > Name</label>
                    <input type="text" onKeyUp = {namecheck}></input><br></br>
                    <small></small>
                </div>
                <div id = "email">
                    <label > Email</label>
                <input type="text" onKeyUp = {emailcheck}></input><br></br>
                    <small></small>
                </div>
                <div id ="msg">
                    <label > Message</label>
                    <input type="text"></input>
                    
                </div>

            </div>
            
            <button type="submit"> Submit</button>
        </form>
      
    </div>
  )
}




function namecheck(){
    let form_elem = document.getElementById("form");
    let name_elem = form_elem.children[1].children[1].value;
    const small = form_elem.children[1].children[3];
    const namePattern = /^[a-zA-Z ]+$/;
    const isValid = namePattern.test(name_elem);
    if (!isValid){
        form_elem.children[1].children[1].className= "invalid";
        small.innerHTML = "enter a valid name";
    }
    else{
        form_elem.children[1].children[1].className="valid";
        small.innerHTML = " ";
    }
 
}

function emailcheck(){
    let form_elem = document.getElementById("form");
    let name_elem = form_elem.children[2].children[1].value;
    const small = form_elem.children[2].children[3];
    const namePattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{3}$/;
    const isValid = namePattern.test(name_elem);
    if (!isValid){
        form_elem.children[2].children[1].className= "invalid";
        small.innerHTML = "enter a valid email";
    }
    else{
        form_elem.children[2].children[1].className="valid";
        small.innerHTML = " ";
}
}



export default form;
