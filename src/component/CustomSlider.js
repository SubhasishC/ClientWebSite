import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Profile from './Profile';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export default function CustomSLider() {
  return (
    <Carousel
    responsive={responsive}>
      <Profile name={'Subhasish1'} rank={'A121'} />
      <Profile name={'Subhasish2'} rank={'A121'} />
      <Profile name={'Subhasish3'} rank={'A121'} />
      <Profile name={'Subhasish4'} rank={'A121'} />
    </Carousel>
  )
}