import React from "react";
import logo from "../../public/img/photo.avif";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div className="container" id="home">
        <div className="row align-items-center " >
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="fs-5 lh-ls">Welcome In My Feed</div>
            <div className="lh-lg fs-2">
              Hello, I'm a{" "}
              <span className="text-danger">
                <ReactTyped
                  strings={["Developer", "Coder", "Programmer"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                />
              </span>
            </div>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quisquam, recusandae consequatur. Accusamus sint libero eligendi
              laborum fuga repudiandae? Asperiores tempore eos animi dolores
              corrupti! Sint quos, mollitia architecto aliquam nesciunt, optio
              cum delectus sit voluptatum aut ratione quaerat veniam aperiam!
            </div>
            <div className="row pt-3">
              <div className="social col-6">
                <h6>Available on</h6>
                <div className="fs-4">
                  <i className="fa-brands fa-square-facebook"></i>
                  <i className="fa-brands fa-linkedin ps-2"></i>
                  <i className="fa-brands fa-youtube ps-2"></i>
                  <i className="fa-brands fa-telegram ps-2"></i>
                </div>
              </div>
              <div className="working col-6">
                <h6>Currently working on</h6>
                <div className="fs-4">
                <i className="fa-brands fa-node-js"></i>
                <i className="fa-brands fa-node-js ps-2"></i>
                <i className="fa-brands fa-node-js ps-2"></i>
                <i className="fa-brands fa-node-js ps-2"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order1 order-lg-2">
            <img
              src={logo}
              alt="logo"
              style={{ height: "auto" ,width:300}}
              className="rounded-circle"
            />
          </div>
        </div>
      </div>
      <hr/>
    </>
  );
}

export default Home;
