import React from 'react'
import "./Footer.scss"


function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Kategoriler</h2>
            <span>Dijital Pazarlama</span>
            <span>Çeviri</span>
            <span>İçerik Üretimi</span>
            <span>Web Geliştirme</span>
            <span>Video ve animasyon</span>
            <span>Müzik ve Seslendirme</span>
            <span>E-Ticaret</span>
            <span>İş geliştrime</span>
            <span>Ürün Yönetimi</span>
            <span>Grafik Tasarım</span>
            <span>SEO</span>
          </div>
          <div className="item">
            <h2>Hakkımızda</h2>
            <span>Press & News</span>
            <span>Ortaklıklar</span>
            <span>Gizlilik Politikası</span>
            <span>Kullanım Koşulları</span>
            <span>Satışçılarla İletişim</span>
          </div>
          <div className="item">
            <h2>Destek</h2>
            <span>Yardım ve Destek</span>
            <span>Satış yapın</span>
            <span>Hizmet alın</span>
          </div>
          <div className="item">
            <h2>Topluluk</h2>
            <span>Paylaşım</span>
            <span>Forum</span>
            <span>Etkinlikler</span>
            <span>Blog</span>
            <span>İş Ortakları</span>
            <span>Podcast</span>
            <span>Davet et</span>
            <span>ilan Verin</span>
          </div>
          <div className="item">
            <h2>Daha Fazla</h2>
            <span>Jobook Business</span>
            <span>Jobook Pro</span>
            <span>Jobook Guides</span>
            <span>İlham Alın</span>
            <span>Jobook Workspace</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
          <p>
              @{new Date().getFullYear()} Izzet Furkan Cakmak
            </p> 
          </div>
          <div className="right">
            <div className="social">
              <img src="/images/twitter.png" alt="" />
              <img src="/images/facebook.png" alt="" />
              <img src="/images/linkedin.png" alt="" />
              <img src="/images/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/images/language.png" alt="" />
              <span>Türkçe</span>
            </div>
            <div className="link">
              <img src="/images/coin.png" alt="" />
              <span>TL</span>
            </div>
            <img src="/images/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

