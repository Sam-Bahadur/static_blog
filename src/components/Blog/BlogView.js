import React, { Component } from "react";
import { blogs } from "./../../data/blogs";

class BlogView extends Component {
  renderBlog = (blogs, id) => (
    <div className="br_container">
      <div className="br_header">
        <h2>{blogs[id].title}</h2>
        <h5>Author: {blogs[id].author}</h5>
      </div>
      <div className="blog_image">
        <img
          src={`/uploads/${blogs[id].id}.png`}
          onError={(e) => {
            e.target.src = "/uploads/2.jpg";
          }}
          alt=""
        />
      </div>
      <div className="br_review">
        <h5>{blogs[id].desc}</h5>
      </div>
    </div>
  );

  render() {
    const id = this.props.match.params.id - 1;
    return (
      <div style={{ "white-space": "pre-line" }}>
        {this.renderBlog(blogs, id)}
      </div>
    );
  }
}

export default BlogView;
