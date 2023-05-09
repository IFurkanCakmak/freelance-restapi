import React, { useEffect,useState } from "react";
import './Navbar.scss'
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";


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

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();
  const handleLogout = async () =>{

    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/")
    } catch (err) {
      console.log(err)
    }

  }  
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
          <Link to="/login" className="link">Sign in</Link>
          {!currentUser?.isSeller &&<span>Make money</span>}
          {!currentUser && <button>Join</button>}
          {currentUser&& (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img src= {currentUser.img || "/images/noimage.jpg"} alt=""/>
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
                <Link onClick={handleLogout} className="link">Logout</Link>
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