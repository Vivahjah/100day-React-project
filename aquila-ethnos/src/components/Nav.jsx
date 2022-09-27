import React from "react";
import { Link } from "react-router-dom";
import { nav } from "../data";
import { Logo } from "../assets/logo"

const Nav = () => {
  return (
  
      <nav>
        <div className="flex">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="">
            <ul>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <button> Sign In</button>
          </div>
        </div>
      </nav>
   
  );
};

export default Nav;
