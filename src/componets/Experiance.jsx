import React from "react";
import { useState } from "react";
import Html from "../../public/img/html.png";
import Javascript from "../../public/img/Javascript.png";
import Css from "../../public/img/css.jpg";
import Java from "../../public/img/java.png";
import Oracle from "../../public/img/oracle.png";
import Spring from "../../public/img/spring.png";
import SpringBoot from "../../public/img/springBoot.jpg";

function Experiance() {
  const [obj, setobj] = useState([
    {
      id: 1,
      img: Html,
      name: "HTML",
    },
    {
      id: 2,
      img: Css,
      name: "css",
    },
    {
      id: 3,
      img: Javascript,
      name: "Javascript",
    },
    {
      id: 4,
      img: Oracle,
      name: "Oracle",
    },
    {
      id: 5,
      img: Spring,
      name: "Spring",
    },
    {
      id: 6,
      img: SpringBoot,
      name: "Spring Boot",
    },
  ]);
  return (
    <div className="container" id="experiance">
      <h2 style={{ fontWeight: 700 }} className="mt-5">
        Experiance
      </h2>
      <p>I've more than 2 years of experiance in below technologies.</p>

      <div className="ex-boot d-flex flex-wrap">
        {obj.map((ele, index) => {
          return (
            <div
              className="ex-icon rounded-circle border shadow border-secondary-subtle p-2 m-3 zoom"
              key={ele.name + index}
              style={{ height: "200px", width: "200px" }}
            >
              <img
                src={ele.img}
                className="rounded-circle m-2"
                alt="mongoo"
                style={{ height: "150px", width: "150px" }}
              />
              <h6 className="text-center">{ele.name}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experiance;
