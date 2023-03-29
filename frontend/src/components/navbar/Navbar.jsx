import React, { useEffect,useState } from "react";
import './Navbar.scss'
import { Link } from "react-router-dom";


  const Navbar = () => {
  const [active, setActive] =useState(false);
  const [open, setOpen] =useState(false);

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
  }
  return (
    /*if its scrolled its gonna be navbar and active otherwise navbar*/
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
        <Link to="/" className="link">
        <span className="text">Jobly</span>
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
      {active &&(
      <>
      <hr />
      <div className="menu">
        <span>test</span>
        <span>test</span>
      </div>
      </>
      )}
    </div>
  );
};


export default Navbar