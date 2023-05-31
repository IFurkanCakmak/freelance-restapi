import React, { useState } from "react";
import "./Register.scss";
import upload from "../../utils/upload.js";
import newRequest from "../../utils/newRequest.js";
import { useNavigate } from "react-router-dom";



function Register() {

  const [file , setFile] = useState(null)
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const navigate =useNavigate()
  


  const handleChange = (e) =>{

    setUser(prev => {
      return{...prev, [e.target.name] : e.target.value}; /* TODO check what it is */
    })
  };

  const handleSeller = (e) =>{

    setUser(prev => {
      return{...prev, isSeller : e.target.checked}; /* TODO check what it is */
    })
  };

  const handleSubmit = async (e) =>{
    e.preventDefault()

    const url = await upload(file)
   try {
    await newRequest.post("/auth/register", {
      ...user,
      img:url
    });
    navigate("/login")
   } catch (err) {

    console.log(err)
    
   }
  };
  
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Kayıt olun</h1>
          <label htmlFor="">Kullanıcı adı</label>
          <input
            name="username"
            type="text"
            placeholder="johndoe"
            onChange={handleChange}
            
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
          <label htmlFor="">Şifrenizi girin</label>
          <input name="password" type="password" onChange={handleChange} />
          <label htmlFor="">Fotoğraf ekleyin</label>
          <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
          <label htmlFor="">Ülke</label>
          <input
            name="country"
            type="text"
            placeholder="Usa"
            onChange={handleChange}
          />
          <button type="submit">Kaydı tamamla</button>
        </div>
        <div className="right">
          <h1>Freelancer olmak istiyorum</h1>
          <div className="toggle">
            <label htmlFor="">Freelancer olarak kayıt ol</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller}/>
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">Telefon numarası</label>
          <input
            name="phone"
            type="text"
            placeholder="+1 234 567 89"
            onChange={handleChange}
          />
          <label htmlFor="">Açıklama</label>
          <textarea
            placeholder="Kendiniz ile ilgili kısa bir açıklama yazın"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Register;