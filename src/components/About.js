import React from "react";
import AboutImg from "../assets/images/about-img.jpg";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes our food special?</h3>
            <p>
              "At VIRTUAL CHESS CHAMIONSHIP, our journey began with a simple idea
              to create a space where exceptional food and warm hospitality come together."
            </p>
            <p>
              "We are committed to sourcing the finest ingredients,
              creating memorable flavors, and delivering a
              dining experience that lingers in your memory."
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
