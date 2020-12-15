import React from 'react';
import Phone from '../image/phone 3.jpg';
import Automate from '../image/automobile.jpg';
import Phone2 from '../image/phone 2.jpg';
import Res from '../image/nmpW_WwwVSc.jpg';
import Event from '../image/event.jpg';
import Shop from '../image/Shop.jpg';
import Chips from '../image/Chips.jpg';
import Res2 from '../image/Res2.jpg';

function CarouselSlide() {
    return (
<div className="container-carousel mt-5 border-buss">

<div className="row">

  <div className="col-md-12 mb-3">

    <div className="container text-center my-3 mb-5">
      <h2 className="font-color">Top Business</h2>
      <hr className="mb-4 mt-0 d-inline-block mx-auto hr-style-top"/>
      <div className="row mx-auto my-auto">
        <div id="recipeCarousel2" className="carousel slide w-100 " data-ride="carousel">
          <div className="carousel-inner w-100 vv-3" role="listbox">
            <div className="carousel-item active">
            <div className="col-md-3 col-xs-6">
             
                <img className="d-block img-carousel rounded-circle"
                  src={Automate} alt="business"/>
                   <p className="carousel-text">Tunscani Motors</p>
                 
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-3 col-xs-6 ">
                <img className="d-block img-carousel rounded-circle"
                  src={Event} alt="business"/>
                   <p className="carousel-text">Tunscani Motors</p>
                 
              </div>
            </div>
            <div className="carousel-item">
            <div className="col-md-3 col-xs-6 ">
                <img className="d-block img-carousel rounded-circle"
                  src={Phone2} alt="business"/> 
                  <p className="carousel-text">Liberty comms</p>
                               </div>
            </div>
            <div className="carousel-item">
            <div className="col-md-3 col-xs-6 ">
                <img className="d-block img-carousel rounded-circle"
                  src={Res} alt="business"/>
                  <p className="carousel-text">Quench Horse Diner</p>
              </div>
            </div>
            <div className="carousel-item">
            <div className="col-md-3 col-xs-6 ">
                <img className="d-block img-carousel rounded-circle"
                  src={Phone} alt="business"/>
                   <p className="carousel-text">Phone World NGN</p>
                 
              </div>
            </div>
            <div className="carousel-item">
            <div className="col-md-3 col-xs-6 ">
                <img className="d-block img-carousel rounded-circle"
                  src={Res2} alt="business"/>
                   <p className="carousel-text">Liberty Comms</p>
                 
              </div>
            </div>
            <div className="carousel-item">
            <div className="col-md-3 col-xs-6 ">
                <img className="d-block img-carousel rounded-circle"
                  src={Chips} alt="business"/>
                   <p className="carousel-text">Liberty Comms</p>
                 
              </div>
            </div>
            <div className="carousel-item">
            <div className="col-md-3 col-xs-6 ">
                <img className="d-block img-carousel rounded-circle"
                  src={Shop} alt="business"/>
                   <p className="carousel-text">Liberty Comms</p>
                 
              </div>
            </div>
          
          </div>
          <a className="carousel-control-prev" href="#recipeCarousel2" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#recipeCarousel2" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>

  </div>

</div>

</div>
    )
}
export default CarouselSlide;