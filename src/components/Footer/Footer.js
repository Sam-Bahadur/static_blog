import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer_container">
        <div className="footer_div_two">
          <div className="logo1">
            <h1>In Partnership With</h1>
            <img src="images/left.png" alt="" />
          </div>
          <div className="logo2">
            <img src="images/middle.jpg" alt="" />
          </div>
          <div className="logo1">
            <h1>In Collaboration With</h1>
            <img src="images/right.png" alt="" />
          </div>
        </div>
      </div>
      <div className="footer_div">copyright 2020</div>
      <div className="footer_div_media">
        <h6>
          developed by{" "}
          <a
            href="http://www.mayanmedia.com.np"
            target="_blank"
            rel="noreferrer"
          >
            <span> &#169;mayan media</span>
          </a>
        </h6>
      </div>
    </>
  );
}
