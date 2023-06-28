import React from 'react';
import 'bulma/css/bulma.min.css';
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
          var response = "Thank you for your submission " + nameInput + "! We will reach out to you at " + emailInput+".";
        submissionResponseEl.textContent = response;
        window.location.href = "mailto:'drewtex@gmail.com'?subject="+nameCool.value+" Contact&body="+messageCool.value;
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
      <div class="field px-6">
         <label class="label has-text-white">Name</label>
      <div class="control">
        <input class="input " type="text" placeholder="Text input" id="name"/>
      </div>
    </div>

    <div class="field px-6" >
      <label class="label has-text-white" >Email</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Email input" id="email" />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
      </div>
    </div>
    <div class="field px-6" >
      <label class="label has-text-white">Message</label>
      <div class="control">
        <textarea class="textarea" placeholder="Textarea" id="message"></textarea>
      </div>
    </div>
<button id="submit" onClick={swilton} href='www.google.com' >Submit</button>
        <p className='stinky'>Contact me at <br></br>Email: drewtex@gmail.com<br></br>Github: https://github.com/Chueg/</p>
        <p className = "binky"id="response"></p>
    </div>
  );
}
