import React from "react";

function Contact() {
  return (
    <>
      <div className="container mt-5" id="contact">
        <h2 style={{ fontWeight: 700 }}>Contact me</h2>
        <p>Please fill out the form below to contact me</p>
      </div>
      <div className="d-flex justify-content-center ">
        <form
          action=""
          className="d-flex flex-column justify-content-center rounded bg-light p-3 zoom"
          style={{ maxWidth: "30rem" }}
        >
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              FullName
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your fullName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your Email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Enter your Qurey"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-dark">
            send
          </button>
        </form>
      </div>

      <hr />
    </>
  );
}

export default Contact;
