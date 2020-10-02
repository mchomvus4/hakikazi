import React from 'react'
import law1 from '../assets/law1.jpg';
import law2 from '../assets/law2.jpg';
import law3 from '../assets/law3.jpg';
import './Slider.css';
function Slider() {
  return (
      
    <div id="slider">
  <div id="sliderheader" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#sliderheader" data-slide-to={0} className="active" />
      <li data-target="#sliderheader" data-slide-to={1} />
      <li data-target="#sliderheader" data-slide-to={2} />
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={law1} className="d-block img-fluid" alt="hakuna picha" />
        <div className="carousel-caption">
        {/* <h2>This is a caption for slide one</h2> */}
        </div>
      </div>
      <div className="carousel-item">
        <img src={law2} className="d-block img-fluid" alt="hakuna picha" />
        <div className="carousel-caption">
        {/* <h2>This is a caption for slide two</h2> */}
        </div>
      </div>
      <div className="carousel-item">
        <img src={law3} className="d-block img-fluid" alt="hakuna picha" />
        <div className="carousel-caption">
        {/* <h2>This is a caption for slide three</h2> */}
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#sliderheader" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#sliderheader" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>

  );
}
export default Slider;