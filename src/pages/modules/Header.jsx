import React from "react";

function Header() {
  return (
    <header>
      <div className="header">
        <div className="header-top">
          <div className="download-tokopedia">
            <a href="home.html">
              <img
                src="img/image-header-1.png"
                alt="Download GADGETPEDIA App"
              />
            </a>
            <span>Download GADGETPEDIA App</span>
          </div>

          <div className="item-header">
            <a href="#">Tentang GADGETPEDIA</a>
            <a href="#">Mitra GADGETPEDIA</a>
            <a href="#">Mulai Berjualan</a>
            <a href="#">Promo</a>
            <a href="#">GADGETPEDIA Care</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
