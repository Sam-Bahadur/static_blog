import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function ImageSlider(blogs) {
  return (
    <Carousel>
      <Carousel.Item>
        <Link to={`#`}>
          <img
            className="d-block w-100 custom_carosel"
            src={"/images/photo_1.jpg"}
            alt="Campaign Against Chaupadi"
          />
        </Link>
        <Carousel.Caption>
          {/* <Link to={`/blogs/${blogs._id}`} className="book_item">
            </Link> */}
          <h3>{blogs.title}</h3>
          <p>Nepal Case - Campaign Against Chaupadi</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={`#`}>
          <img
            className="d-block w-100 custom_carosel"
            src={"/images/photo_2.jpg"}
            alt="Campaign Against Chaupadi"
          />
        </Link>
        <Carousel.Caption>
          {/* <Link to={`/blogs/${blogs._id}`} className="book_item">
            </Link> */}
          <h3>{blogs.title}</h3>
          {/* <p>FIrst Second item</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={`#`}>
          <img
            className="d-block w-100 custom_carosel"
            src={"/images/photo_3.jpg"}
            alt="Campaign Against Chaupadi"
          />
        </Link>
        <Carousel.Caption>
          {/* <Link to={`/blogs/${blogs._id}`} className="book_item">
            </Link> */}
          <h3>{blogs.title}</h3>
          {/* <p>FIrst Second item</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={`#`}>
          <img
            className="d-block w-100 custom_carosel"
            src={"/images/photo_4.jpg"}
            alt="Campaign Against Chaupadi"
          />
        </Link>
        <Carousel.Caption>
          {/* <Link to={`/blogs/${blogs._id}`} className="book_item">
            </Link> */}
          <h3>{blogs.title}</h3>
          {/* <p>FIrst Second item</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
