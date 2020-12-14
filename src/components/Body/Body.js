import React, { Component } from "react";
import BookItem from "./../widgetsUI/BookItem";
import ImageSlider from "./../ImageSlider/ImageSlider";
import { blogs } from "./../../data/blogs";
// import "node_modules/react-modal-video/scss/modal-video.scss";
import Videoplayer from "./../Videoplayer/Videoplayer";

export default class Body extends Component {
  renderItems = (blogs) =>
    blogs.map((item) => (
      <>
        <BookItem {...item} key={item.id} />
        <div className="blog_card_dividor"></div>
      </>
    ));

  imageSlide = () => (
    <>
      <ImageSlider />
    </>
  );
  render() {
    return (
      <>
        <div className="home_div">
          {this.imageSlide()}
          <Videoplayer />
          <div className="home_content">
            <div className="blog_name_container">
              <span>Blog Posts</span>
            </div>
            {this.renderItems(blogs)}
            <div onClick={this.loadmore} className="loadmore_alt">
              Load more >
            </div>
          </div>
        </div>
      </>
    );
  }
}
