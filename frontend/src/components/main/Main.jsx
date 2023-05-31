import React, { useState } from "react";
import "./Main.scss";
import { useNavigate, Link } from "react-router-dom";

export const Main = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/jobs?search=${input}`);
  };
  return (
    <div className="main">
      <div className="container">
        <div className="base">
          <h1>İşin için en iyi Freelancerı bul</h1>
          <div className="search">
            <div className="searchInput">
              <img src="/images/search.png" alt="" />
              <input
                type="text"
                placeholder="Neye ihtiyacın var?"
                onChange={(e) => setInput(e.target.value)}
              ></input>
            </div>
            <button onClick={handleSubmit}>Ara</button>
          </div>
          <div className="popular">
            <Link
              className="link"
              to="http://localhost:5173/jobs?cat=web">
              <button>Web Tasarımı</button>
            </Link>
            <Link className="link" to="http://localhost:5173/jobs?cat=translate" >
            <button>Çeviri</button>
            </Link>
            <Link className="link" to="http://localhost:5173/jobs?cat=seo" >
            <button>SEO</button>
            </Link>
            <Link className="link" to="http://localhost:5173/jobs?cat=content" >
            <button>İçerik Üretimi</button>
            </Link>
            <Link className="link" to="http://localhost:5173/jobs?cat=design" >
            <button>Grafik Tasarım</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
