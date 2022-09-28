import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="hero ">
    <div className="flex">
      <div className="hero-text">
        <h4>Mobile Application Security <br /> for Modern Application <br /> Development</h4>
        <p>Aquila is an intelligent and comprehensive end-to-end <br /> mobile app security solution.
         Developers can quickly scan,<br /> monitor and protect any mobile app with in minutes.
        </p>
        <Button title="START A TRIAL" />

      </div>
      <div className="hero-img">
        <img src="../../public/images/hero-icon1.png" alt="hero" />
      </div>
    </div>
    </section>
  )
};

export default Hero;
