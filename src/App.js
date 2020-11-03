import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'react-bootstrap'
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Cardgrid';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import EventHeader from './components/Events';
import Profile from './components/Profile';
import WriteReview from './components/WriteReviews'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Photo1 from './image/photo580.jpg';
import Photo2 from './image/photo5802.jpg';
import Photo3 from './image/photo5807.jpg';
import Photo4 from './image/photo5801.jpg';
import Photo5 from './image/photo5808.jpg';
import Photo6 from './image/photo58073.jpg';
import Nav from './components/EventNav'
function App() {
  const [hideCard, showCard] = useState(false)

  useEffect( () => { 
    $('.carousel .carousel-item').each(function () {
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
    
      for (var i = 0; i < 4; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
    
        next.children(':first-child').clone().appendTo($(this));
      }
    });
    
    (function(){
      //Login/Signup modal window - by CodyHouse.co
    function ModalSignin( element ) {
      this.element = element;
      this.blocks = this.element.getElementsByClassName('js-signin-modal-block');
      this.switchers = this.element.getElementsByClassName('js-signin-modal-switcher')[0].getElementsByTagName('a'); 
      this.triggers = document.getElementsByClassName('js-signin-modal-trigger');
      this.init();
    };
  
    ModalSignin.prototype.init = function() {
      var self = this;
      //open modal/switch form
      for(var i =0; i < this.triggers.length; i++) {
        (function(i){
          self.triggers[i].addEventListener('click', function(event){
            if( event.target.hasAttribute('data-signin') ) {
              event.preventDefault();
              self.showSigninForm(event.target.getAttribute('data-signin'));
            }
          });
        })(i);
        
      }
      for(var i =0; i < this.triggers.length; i++) {
        (function(i){
          self.triggers[i].addEventListener('click', function(event){
            if( event.target.hasAttribute('data-signup') ) {
              event.preventDefault();
              self.showSigninForm(event.target.getAttribute('data-signup'));
            }
          });
        })(i);
        
      }
  
  
      //close modal
      this.element.addEventListener('click', function(event){
        if( hasClass(event.target, 'js-signin-modal') || hasClass(event.target, 'js-close') ) {
          event.preventDefault();
          removeClass(self.element, 'cd-signin-modal--is-visible');
        }
      });
      //close modal when clicking the esc keyboard button
      document.addEventListener('keydown', function(event){
        (event.which=='27') && removeClass(self.element, 'cd-signin-modal--is-visible');
      });
  
      
    };
  
    ModalSignin.prototype.showSigninForm = function(type) {
      // show modal if not visible
      !hasClass(this.element, 'cd-signin-modal--is-visible') && addClass(this.element, 'cd-signin-modal--is-visible');
      // show selected form
      for( var i=0; i < this.blocks.length; i++ ) {
        this.blocks[i].getAttribute('data-type') == type ? addClass(this.blocks[i], 'cd-signin-modal__block--is-selected') : removeClass(this.blocks[i], 'cd-signin-modal__block--is-selected');
      }
      //update switcher appearance
      var switcherType = (type == 'signup') ? 'signup' : 'login';
      for( var i=0; i < this.switchers.length; i++ ) {
        this.switchers[i].getAttribute('data-type') == switcherType ? addClass(this.switchers[i], 'cd-selected') : removeClass(this.switchers[i], 'cd-selected');
      } 
    };
  
    var signinModal = document.getElementsByClassName("js-signin-modal")[0];
    if( signinModal ) {
      new ModalSignin(signinModal);
    }
  
    // toggle main navigation on mobile
    var mainNav = document.getElementsByClassName('js-main-nav')[0];
    if(mainNav) {
      mainNav.addEventListener('click', function(event){
        if( hasClass(event.target, 'js-main-nav') ){
          var navList = mainNav.getElementsByTagName('ul')[0];
          toggleClass(navList, 'cd-main-nav__list--is-visible', !hasClass(navList, 'cd-main-nav__list--is-visible'));
        } 
      });
    }
    
    //class manipulations - needed if classList is not supported
    function hasClass(el, className) {
        if (el.classList) return el.classList.contains(className);
        else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }
    function addClass(el, className) {
      var classList = className.split(' ');
       if (el.classList) el.classList.add(classList[0]);
       else if (!hasClass(el, classList[0])) el.className += " " + classList[0];
       if (classList.length > 1) addClass(el, classList.slice(1).join(' '));
    }
    function removeClass(el, className) {
      var classList = className.split(' ');
        if (el.classList) el.classList.remove(classList[0]);	
        else if(hasClass(el, classList[0])) {
          var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
          el.className=el.className.replace(reg, ' ');
        }
        if (classList.length > 1) removeClass(el, classList.slice(1).join(' '));
    }
    function toggleClass(el, className, bool) {
      if(bool) addClass(el, className);
      else removeClass(el, className);
    }
    function putCursorAtEnd(el) {
        if (el.setSelectionRange) {
            var len = el.value.length * 2;
            el.focus();
            el.setSelectionRange(len, len);
        } else {
            el.value = el.value;
        }
    };
  })();
  })
  return (
    <div>
<Router>
  <Switch>
  <Route exact path="/">
      <Navbar/>
      <Header/>
      <div className="body_page" >
      <div className="card-bottom">
      <Card title="Card title"
      text="This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer."
      time="Last updated 3 mins ago"
      Photo = {Photo1}
      Photo2 = {Photo2}
      Photo3 = {Photo3}
    />
      <Card title="Card title"
      text="This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer."
      time="Last updated 3 mins ago"
      Photo = {Photo4}
      Photo2={ Photo5}
      Photo3 = {Photo6}
    />
     { hideCard ? <Card title="Card title" 
      text="This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer."
      time="Last updated 3 mins ago"
      
    /> : null }
    <div className="load-btn">
    <Button onClick={ () => {
      if(hideCard === false){
    showCard(true)
      }  
      else {
        showCard(false)
      }
    }}>{ hideCard ? "Show Less" : "Load More"}</Button>
    </div>
      
    </div>
    <Carousel/>
      </div>
      <Footer/>
      </Route>
      <Route path="/Events">
        <Nav/>
        <EventHeader/>
      </Route>
      <Route path="/profile">
      <Navbar/>
      <Profile/>
      </Route>
      <Route path="/writeReview">
        <Navbar/>
        <WriteReview/>
      </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
