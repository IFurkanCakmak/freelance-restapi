import React, { useEffect,useState } from "react";
import './Navbar.scss'
import { Link, useLocation } from "react-router-dom";


  const Navbar = () => {
  const [active, setActive] =useState(false);
  const [open, setOpen] =useState(false);

  const {pathname} = useLocation()

  const isActive=()=>{
    window.scrollY > 0 ? setActive(true) :setActive(false)
  }
  
  /*used eventlistener because used window not any html element*/
  
  useEffect(() => {
    window.addEventListener("scroll",isActive);
  return ()=>{
    window.removeEventListener("scroll", isActive );
  };
  }, []);

  const currentUser = {
    id:1,
    username:"Mada Faka",
    isSeller:true,
  };
  
  return (
    /*if its scrolled its gonna be navbar active otherwise navbar*/
    /* if path is home nav is active if not its deactive*/
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
        <Link to="/" className="link">
        <span className="text">Jobook</span>
        </Link>
        
        </div>
        <div className="links">
          <span>Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller &&<span>Make money</span>}
          {!currentUser && <button>Join</button>}
          {currentUser&& (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {
                  currentUser?.isSeller&&(
                    <>
                      <Link to="/myjobs" className="link">Jobs</Link>
                      <Link to="/add" className="link">Add new job</Link>
                    </>
                  )
                }
                
                <Link to="/orders" className="link">Orders</Link>
                <Link to ="/messages" className="link">Messages</Link>
                <Link to="/settings" className="link">Settings</Link>
                <Link to="/" className="link">Logout</Link>
              </div>}
            </div>
          )}
        </div>
      </div>
      {(active || pathname!=="/") &&(
      <>
      <hr />
      <div className="menu">
      <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
      </div>
      </>
      )}
    </div>
  );
};


export default Navbar