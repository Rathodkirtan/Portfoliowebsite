import React from "react";
import logo from "../../public/img/photo.avif";
import { useState } from "react";
import About from "./About";

function Navbar() {
  const [bool, setbool] = useState(false);

  return (
    <>
      <div className="container shadow position-sticky top-0 z-2 bg-white">
        <div className="row align-items-center" style={{ height: 60 }}>
          <div className="col-lg-6 col-md-4 col-10 d-flex">
            <img
              src={logo}
              alt="img-logo"
              style={{ height: 45 }}
              className="rounded-circle"
            />
            <div className="ps-2">
              <div className="fs-5">
                Akhi<span className="text-success">l</span>
              </div>
              <div>Web Developer</div>
            </div>
          </div>
          <div className="col-lg-6 col-md-8 col-2">
            <ul className="list-unstyled d-lg-flex justify-content-between align-items-center d-lg-block d-none ">
              <a href="#home" className="text-decoration-none">
                <li className="text-dark ">Home</li>
              </a>
              <a href="#about" className="text-decoration-none">
                <li className="text-dark ">About</li>
              </a>
              <a href="#portfolio" className="text-decoration-none">
                <li className="text-dark ">Portfolio</li>
              </a>
              <a href="#experiance" className="text-decoration-none">
                <li className="text-dark ">Experiance</li>
              </a>
              <a href="#contact" className="text-decoration-none">
                <li className="text-dark ">Contact</li>
              </a>
            </ul>
            <div onClick={() => setbool(!bool)}>
              {bool ? (
                <i class="fa-solid fa-xmark d-lg-none d-flex justify-content-end align-items-center fs-3"></i>
              ) : (
                <i className="fa-solid fa-bars d-lg-none d-flex justify-content-end align-items-center fs-3"></i>
              )}
            </div>
          </div>
          {bool && (
            <ul className="list-unstyled d-lg-flex flex-column bg-light">
              <a href="#home" className="text-decoration-none">
                <li className="text-dark ">Home</li>
              </a>
              <a href="#about" className="text-decoration-none">
                <li className="text-dark ">About</li>
              </a>
              <a href="#portfolio" className="text-decoration-none">
                <li className="text-dark ">Portfolio</li>
              </a>
              <a href="#experiance" className="text-decoration-none">
                <li className="text-dark ">Experiance</li>
              </a>
              <a href="#contact" className="text-decoration-none">
                <li className="text-dark ">Contact</li>
              </a>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
