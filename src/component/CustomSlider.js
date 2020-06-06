import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';

class CustomSlider extends React.Component {
  render() {
    const settings =  {
      arrows: false,
      autoplay: true,
      virtualList: true,
      wheel: true,
      slidesToShow: 4
    };
    const images = [
        { url: "images/1.jpg" },
        { url: "images/2.jpg" },
        { url: "images/3.jpg" },
    ];
    return (
      <div>
        <Slider { ...settings }>
          <div>
            <img src='http://localhost:3000/images/1.jpg' />
          </div>
          <div>
          <img src='http://localhost:3000/images/2.jpg' />
          </div>
          <div>
          <img src='http://localhost:3000/images/3.jpg' />
          </div>
        </Slider>
      </div>
    );
  }
};

export default CustomSlider