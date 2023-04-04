import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='links'>
          <div className='link'>
            <h4>Categories</h4>
            <a href='/'>
              <p>Link1</p>
            </a>
             <a href='/'>
              <p>Link1</p>
            </a>
             <a href='/'>
              <p>Link1</p>
            </a>
          </div>
          <div className='link'>
            <h4>Categories</h4>
            <a href='/'>
              <p>Link1</p>
            </a>
             <a href='/'>
              <p>Link1</p>
            </a>
             <a href='/'>
              <p>Link1</p>
            </a>
          </div>
          <div className='link'>
            <h4>Categories</h4>
            <a href='/'>
              <p>Link1</p>
            </a>
          </div>
          <div className='link'>
            <h4>Categories</h4>
            <a href='/'>
              <p>Link1</p>
            </a>
             <a href='/'>
              <p>Link1</p>
            </a>
             <a href='/'>
              <p>Link1</p>
            </a>
            <a href='/'>
              <p>Link1</p>
            </a>
          </div>
          <div className='link'>
            <img src='/images/logo.png' alt=''/>
          </div>
        </div>
        <hr></hr>
        <div className='bottom'>
          <div className='copyright'>
            <p>
              @{new Date().getFullYear()} Izzet Furkan Cakmak
            </p>
          </div>
          <div className='bottomLink'>
            <a href='/terms'><div><p>Source Code</p></div></a>
            <a href='/terms'><div><p>Source Code</p></div></a>
            <a href='/terms'><div><p>Source Code</p></div></a>
            <a href='/terms'><div><p>Source Code</p></div></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer