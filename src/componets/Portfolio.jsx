import React, { useState } from "react";
import mongoo from "../../public/img/mongodb.jpg";
import express from "../../public/img/express.png";
import node from "../../public/img/node.png";
import react from "../../public/img/reactjs.png";
import css from "../../public/img/css.jpg";
import java from "../../public/img/java.png";

function Portfolio() {
  const [cart, setcart] = useState([
    {
      id: 1,
      img: mongoo,
      name: "MongoDB",
    },
    {
      id: 2,
      img: express,
      name: "Express",
    },
    {
      id: 3,
      img: react,
      name: "ReactJS",
    },
    {
      id: 4,
      img: node,
      name: "NodeJS",
    },
    {
      id: 5,
      img: css,
      name: "Css",
    },
    {
      id: 6,
      img: java,
      name: "Java",
    },
  ]);
  return (
    <div className="container position-relative z-1" id="portfolio">
      <h3 className="pt-5" style={{ fontWeight: 700 }}>
        PortFolio
      </h3>
      <h5 className="text-decoration-underline" style={{ fontWeight: 600 }}>
        Featured Projects
      </h5>
      <div className="cart d-flex flex-wrap justify-content-between">
        {cart.map((ele, index) => {
          return (
            <div className="card zoom" style={{ width: "18rem" }} key={ele.id}>
              <img
                src={ele.img}
                className="rounded-circle border border-secondary-subtle p-2 m-3"
                alt="mongoo"
                style={{ height: "120px", width: "120px" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: 700 }}>
                  {ele.name}
                </h5>
                <p className="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <a href="#" className="btn btn-primary">
                  video
                </a>
                <a href="#" className="btn btn-success ms-3">
                  Source code
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
