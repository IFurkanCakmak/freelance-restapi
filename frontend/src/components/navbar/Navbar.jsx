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
          {!currentUser &&<span> <Link to="/login" className="link">Giriş</Link></span>}
          {!currentUser && <Link to ="/register"><button>Kayıt ol</button></Link>}
          {currentUser&& (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img src= {currentUser.img || "/images/noimage.jpg"} alt=""/>
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {
                  currentUser?.isSeller&&(
                    <>
                      <Link to="/myjobs" className="link">İlanlarım</Link>
                      <Link to="/add" className="link">Yeni ilan ekle</Link>
                    </>
                  )
                }
                
                <Link to="/orders" className="link">Siparişler</Link>
                <Link to ="/messages" className="link">Mesajlar</Link>
                {/* <Link to="/settings" className="link">Settings</Link> */}
                <Link onClick={handleLogout} className="link">Çıkış</Link>
              </div>}
            </div>
          )}
        </div>
      </div>
      {(active || pathname!=="/") &&(
      <>
      <hr />
      <div className="menu">
      <Link className="link menuLink" to="http://localhost:5173/jobs?cat=digital">
              Dijital Pazarlama
            </Link>
            <Link className="link menuLink" to="http://localhost:5173/jobs?cat=translate"> 
              Çeviri
            </Link>
            <Link className="link menuLink" to="http://localhost:5173/jobs?cat=content">
              İçerik Üretimi
            </Link>
            <Link className="link menuLink" to="http://localhost:5173/jobs?cat=web">
             Web Geliştirme
            </Link>
            <Link className="link menuLink" to="/">
              Video ve Animasyon
            </Link>
            <Link className="link menuLink" to="http://localhost:5173/jobs?cat=music">
              Müzik ve Seslendirme
            </Link>
            <Link className="link menuLink" to="/">
              Ürün Yönetimi
            </Link>
            <Link className="link menuLink" to="http://localhost:5173/jobs?cat=seo">
              SEO
            </Link>
            <Link className="link menuLink" to="http://localhost:5173/jobs?cat=design">
              Grafik Tasarım
            </Link>
      </div>
      </>
      )}
    </div>
  );
};


export default Navbar