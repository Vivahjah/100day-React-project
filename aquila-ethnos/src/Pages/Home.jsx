import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import { cards } from "../data";
import Button from "../components/Button";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
    <header>
      <Nav />
      <Hero />
    </header>
    <article>
    <div className="container">
      <p className="header">Security Your Mobile Applications Made Easy with Aquila</p>
      <div className="section-card flex">
      {cards.map((card, index) => {
                const { icon, text, name, links } = card;
                return (
                  <div className="card"  key={index}>              
                    <div className="card-top">
                      <div className="card-icon">{icon}</div>
                      <p className="card-purpose">{name}</p>
                    </div> 
                    <div className="card-info">

                    <p className="card-title">{text}</p>
                    {links.map((link, index) => (
                    <p className="card-links" key={index}>{link}</p>
                ))}
                    </div>                   
                   </div>
               
                )
              })}
      </div>
      <div className="home-sub">
        <h2>Why Aquila?</h2>
        <p>We can rapidly and confidently discover critical vulnerabilities in your mobile applications thanks to Aquila, freeing up analyst time that would
        be better spent leading and educating the development team. Additionally, Aquila offers a strong encryption shell 
        around your application to deter hackers from accessing it and thedata it controls. The enables your apps to work intended while guarding against unauthorized access to them</p>
      </div>
      <div className="flex ">
        <p>TRY OUR FREE MOBILE APP VULNERABILITY SCANNER TODAY</p>
        <Button title="TRY NOW" />
      </div>
    </div>
      <Footer />
    </article>

    </>
  );
};

export default Home;
