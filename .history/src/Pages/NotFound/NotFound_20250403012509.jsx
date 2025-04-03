import React from 'react'
import img2 from "../../assets/download.png"

export default function NotFound() {
  return (
    <>
     <div className="container my-4">
  <div className="d-flex flex-column flex-md-row align-items-center">
    
    {/* Left Column: Vertically Centered Text */}
    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="fw-bold">404-Page Not Found</h1>
      <p className="lead text-muted">
        Oops! The page you're looking for doesn't exist.
      </p>
    </div>

    {/* Right Column: Image */}
    <div className="col-md-6 text-center">
      <img src={img2} alt="Not Found" className="img-fluid w-100 h-auto" />
    </div>

  </div>
</div>

    </>
  )
}
