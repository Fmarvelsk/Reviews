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
       <div className="postion-center"> <h3>Recent Reviews</h3>
       <div className="sort-btn"> Sort</div>
       </div>
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
