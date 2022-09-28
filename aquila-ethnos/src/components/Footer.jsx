import React from "react";
import { GrLocation } from 'react-icons/gr'
import { HiOutlineMail } from 'react-icons/hi'
import { TbPhone } from 'react-icons/tb'


import { Link } from "react-router-dom";
import { footerlinks, footerIcon } from "../data";


const Footer = () => {
  return <footer>
  <div className="flex">
    <div>
    <img src="" alt="" />
    <p>Aquila is an intelligent and comprehensive <br/> end-to-end mobile app security solution. 
    Developers can quickly scan, monitor and protect any mobile app with in minutes</p>
      
    </div>
    <div>
      <ul>
   
        {footerlinks.map((list, index) => (
          <li key={index}>
            <Link to={list.path}>{list.text}</Link>
          </li>
        ))}
      </ul>
    </div>
    <div>
    <h5>CONNECT WITH US</h5>
    <div className="contact-info">
    </div>
    <div className="contact-link">
    <ul>
      <h5>CONNECT WITH US</h5>
        {footerIcon.map((list, index) => (
          <li key={index}>
            <Link to={list.path}>{list.icon}</Link>
          </li>
        ))}
      </ul>

    </div>



    </div>
  </div>
  </footer>;
};

export default Footer;
