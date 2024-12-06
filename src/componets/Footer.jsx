import React from 'react'

function Footer() {
  return (
    <div className="container d-flex justify-content-center pt-5" id='footer'>
      <div className="footer" style={{maxWidth:"25rem"}}>
        <div className="icon-footer d-flex justify-content-center fs-4 ">
        <i className="fa-brands fa-facebook "></i>
        <i className="fa-brands fa-twitter ps-2"></i>
        <i className="fa-brands fa-instagram ps-2"></i>
        <i className="fa-brands fa-linkedin-in ps-2"></i>
        </div>
        <hr />
        <p className='text-center'>© 2024 Your Company.All rights reserved.Supportive Partner ❤️ Ankush</p>
      </div>
    </div>
  )
}

export default Footer