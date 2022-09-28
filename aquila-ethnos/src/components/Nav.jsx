import React from "react";
import { Link } from "react-router-dom";
import { nav } from "../data";
import Button from "./Button";


const Nav = () => {
  return (
  
      <nav>
        <div className="flex nav-bar">
          <div className="logo">
            <img src="../../public/images/logo.png" alt="Logo" />
          </div>
          <div className="">
            <ul className="flex">
              {nav.map((list, index) => (
                <li key={index}>
                  <Link className='links' to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <Button title="Login" />
          </div>
        </div>
      </nav>
   
  );
};

export default Nav;
