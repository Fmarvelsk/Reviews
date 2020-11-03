import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'
import { Link } from 'react'
import { Button } from 'react-bootstrap';

function Login (props) {
    const {email, setUser} = useState();
    const {password , setPassword} = useState();

    const Signin = (e) => {
        e.preventDefault();

    }
    return(  
      <div class="cd-signin-modal js-signin-modal"> 
      <div class="cd-signin-modal__container"> 
      <div class="container container-fluid mb-5">
      <h3 className="pt-3"> ConsumerReviews</h3>
      </div>
              <ul class="cd-signin-modal__switcher js-signin-modal-switcher js-signin-modal-trigger">
          <li><a href="#0" data-signin="login" data-type="login">Social</a></li>
          <li><a href="#0" data-signin="signup" >Email</a></li>
        </ul>
  
        <div class="cd-signin-modal__block js-signin-modal-block" data-type="login">
          <form class="cd-signin-modal__form">
            <p class="cd-signin-modal__fieldset">
       
            <input class="cd-signin-modal__input cd-signin-modal__input--full-width" type="submit" value="Login with Google"/>      </p>
  
            <p class="cd-signin-modal__fieldset">
              <input class="cd-signin-modal__input cd-signin-modal__input--full-width" type="submit" value="Login with Facebook"/>
               </p>

            <p class="cd-signin-modal__fieldset">
              <input class="cd-signin-modal__input cd-signin-modal__input--full-width" type="submit" value="Login with Twiiter "/>
            </p>
          </form>
          
          <p class="cd-signin-modal__bottom-message js-signin-modal-trigger"><a href="#0" data-signin="reset">Forgot your password?</a></p>
        </div> 
  
        <div class="cd-signin-modal__block js-signin-modal-block" data-type="signup">
          <form class="cd-signin-modal__form">
            <p class="cd-signin-modal__fieldset">
             <input class="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="signup-email" type="email" placeholder="E-mail"/>
             </p>
  
            <p class="cd-signin-modal__fieldset">
              <input class="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="signup-password" type="text"  placeholder="Password"/>
               </p>
  
            <p class="cd-signin-modal__fieldset">
              <input type="checkbox" id="accept-terms" class="cd-signin-modal__input "/>
              <label for="accept-terms">I agree to the <a href="#0">Terms</a></label>
            </p>
  
            <p class="cd-signin-modal__fieldset">
              <input class="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding" type="submit" value="Login"/>
            </p>
          </form>
        </div> 
  
        <div class="cd-signin-modal__block js-signin-modal-block" data-type="reset">
          <p class="cd-signin-modal__message">Lost your password? Please enter your email address. You will receive a link to create a new password.</p>
  
          <form class="cd-signin-modal__form">
            <p class="cd-signin-modal__fieldset">
              <label class="cd-signin-modal__label cd-signin-modal__label--email cd-signin-modal__label--image-replace" for="reset-email">E-mail</label>
              <input class="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="reset-email" type="email" placeholder="E-mail"/>
              <span class="cd-signin-modal__error">Error message here!</span>
            </p>
  
            <p class="cd-signin-modal__fieldset">
              <input class="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding" type="submit" value="Reset password"/>
            </p>
          </form>
  
          <p class="cd-signin-modal__bottom-message js-signin-modal-trigger"><a href="#0" data-signin="login">Back to log-in</a></p>
        </div> 
        <a href="#0" class="cd-signin-modal__close js-close">Close X</a>
      </div> 
    </div> 
    
     )
}
export default Login