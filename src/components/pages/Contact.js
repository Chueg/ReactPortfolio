import React from 'react';

import '../../css/style.css'

export default function Contact() {

  const swilton = () => {

    var nameCool = document.querySelector("#name");
    var emailCool = document.querySelector("#email");
    var messageCool = document.querySelector("#message");
    
    var nameInput = nameCool.value;
    var emailInput = emailCool.value;
    var messageInput = messageCool.value;
    var submissionResponseEl = document.querySelector("#response");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Action to be performed on click store in named function
    function showResponse() {
      // Prevent default action

      if(nameInput && emailInput && messageInput)
      {
        if(emailInput.match(mailformat)){
          var response = "Thank you for your submission " + nameInput + "! We will reach out to you at " + emailInput + messageInput + ".";
        submissionResponseEl.textContent = response;
        nameCool.value = '';
        emailCool.value = '';
        messageCool.value = '';
        }
        else{
          response = "please enter a valid email"
        submissionResponseEl.textContent = response;
        }
        

      }
      else if(!nameInput)
      {
        response = "please enter a valid name"
        submissionResponseEl.textContent = response;
      }
      else if(!emailInput)
      {
        response = "please enter a valid email"
        submissionResponseEl.textContent = response;
      }
      else if(!messageInput)
      {
        response = "please enter a valid message"
        submissionResponseEl.textContent = response;
      }

    }
    // Add listener to submit element
    showResponse();
  }
  return (
    <div>
      <h1>Contact Page</h1>
      <form>
          <p>Name:<input placeholder="name" id="name" /></p>
          <p>Email:<input placeholder="email" id="email" /></p>
          <p>Message:<input placeholder="message" id="message" /></p>
          <button id="submit" onClick={swilton} >Submit</button>
          
        </form>
        <p className = "binky"id="response"></p>
    </div>
  );
}
