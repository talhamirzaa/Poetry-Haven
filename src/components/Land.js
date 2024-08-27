import React from 'react'
import './Land.css'
export default function Land() {
  return (
    <>
    <div className="container">
    <h2 className='mt-5 text-center'>Welcome to the World of</h2>
    <div className='tag'>
        <video autoPlay loop muted>
            <source src="myvideo.mp4" type="video/mp4" />
        </video>
        <h1 className='text-center'>Poetry</h1>
        
        <div className="input-group mt-auto d-flex justify-content-center">
          <h4 className="text-center mb-2 mb-md-0 mx-3">News Letter Subscription</h4>
          <input type="text" className="input-res rounded-pill" placeholder=" Lauren@gmail.com"/>
        <div className="input-group-append">
        &nbsp;&nbsp;<button type="button" className="btn btn-dark mt-2 mt-md-0 rounded-pill">Subscribe</button>
        </div>
        </div>
    </div>

    
    </div>
    
    
    
    
    
    </>
  )
}
