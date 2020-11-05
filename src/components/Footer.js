import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
function Footer() {
    return(
<div>        
        <footer className="page-footer font-small color-drk">

  <div className="footer-color">
    <div className="container">

      <div className="row py-4 d-flex align-items-center">
        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          <h6 className="mb-0">Get connected with us on social networks!</h6>
        </div>
        <div className="col-md-6 col-lg-7 text-center text-md-right">
          <a className="fb-ic">
            <FacebookIcon className="fabc"/>
          </a>
          <a className="tw-ic">
            <i className="fab fa-twitter white-text mr-4"> </i>
          </a>
          <a className="gplus-ic">
            <i className="fab fa-google-plus-g white-text mr-4"> </i>
          </a>
          <a className="li-ic">
            <i className="fab fa-linkedin-in white-text mr-4"> </i>
          </a>
          <a className="ins-ic">
            <i className="fab fa-instagram white-text"> </i>
          </a>

        </div>

      </div>

    </div>
  </div>
  <div className="container text-center text-md-left mt-5">

    <div className="row mt-3">

      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

        <h6 className="text-uppercase font-weight-bold">About</h6>
        <hr className="mb-4 mt-0 d-inline-block mx-auto hr-style"/>
        <p>
          <a className="a-color" href="#!">About US</a>
        </p>
        <p>
          <a className="a-color" href="#!">Contact</a>
        </p>
        <p>
          <a className="a-color" href="#!">Privacy Policy</a>
        </p>
        <p>
          <a className="a-color" href="#!">Terms and Conditions</a>
        </p>
        
        <p>
          <a className="a-color" href="#!">Guidelines for reviwers</a>
        </p>


      </div>
    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

        <h6 className="text-uppercase font-weight-bold">Discover</h6>
        <hr className="mb-4 mt-0 d-inline-block mx-auto hr-style"/>
        <p>
          <a className="a-color" href="#!">Categories</a>
        </p>
        <p>
          <a className="a-color" href="#!">Events</a>
        </p>
        <p>
          <a className="a-color" href="#!">Support</a>
        </p>
        <p>
          <a className="a-color" href="#!">Developers</a>
        </p>

        <p>
          <a className="a-color" href="#!">API &amp; Documentation</a>
        </p>

      </div>
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

        <h6 className="text-uppercase font-weight-bold">For Business</h6>
        <hr className="mb-4 mt-0 d-inline-block mx-auto hr-style"/>
        <p>
          <a className="a-color" href="#!">Our Brands</a>
        </p>
        <p>
          <a className="a-color" href="#!">Plans &amp; Pricing</a>
        </p>
        <p>
          <a className="a-color" href="#!">Advertise with us</a>
        </p>
        <p>
          <a className="a-color" href="#!">Business News Daily</a>
        </p>

      </div>
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

        <h6 className="text-uppercase font-weight-bold">Contact</h6>
        <hr className="mb-4 mt-0 d-inline-block mx-auto hr-style"/>
        <p>
          <i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
        <p>
          <i className="fas fa-envelope mr-3"></i> info@example.com</p>
        <p>
          <i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
        <p>
          <i className="fas fa-print mr-3"></i> + 01 234 567 89</p>

      </div>
  
    </div>
  
  </div>
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a className="a-color" href="https://mdbootstrap.com/">ConsumerReviews</a>
  </div>
</footer>
</div>
    )
}

export default Footer;