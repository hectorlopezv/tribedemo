import React from 'react'

import Background from '../assets/pictures/Background.png'
import Blur from '../assets/pictures/Blur.png'
import CaraBlur from '../assets/pictures/CaraBlur.png'
import GrayScale from '../assets/pictures/GrayScale.png'

export interface GalleryProps {
    
}
 
const Gallery: React.FunctionComponent<GalleryProps> = () => {
    return (  
<div id="carouselExampleCaptions"  className="carousel slide"  data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Blur} className="d-block w-50 rounded mx-auto" alt="..."/>
      <div className="carousel-caption d-none d-md-block img-fluid">
            <h3>Effect Blur</h3>
            <p>Blurs the background making it blurry.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={CaraBlur} className="d-block w-50 rounded mx-auto img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block ">
            <h3>Blur BodyPart</h3>
            <p>Perform the Blur effect on a body part.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Background} className="d-block w-50 rounded mx-auto img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
            <h3>Virtual Background</h3>
            <p>Replace the background with a default image.</p>
      </div>
    </div>


    <div className="carousel-item">
      <img src={GrayScale} className="d-block w-50 rounded mx-auto img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
            <h3>Effect Gray Scale</h3>
            <p>Everything around the person changes color to grayscale.</p>
      </div>
    </div>

  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
 );
}
 
export default Gallery;