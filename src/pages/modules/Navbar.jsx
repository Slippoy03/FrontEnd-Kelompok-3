import React from "react";

function Navbar() {
  return (
    <div className="navbar-nav">
      <div className="navbar">
        <img src="/img/logos.png" alt="logo" />
        <div className="kategory">
          <span>Kategori</span>
        </div>

        <div className="form-search">
          <i data-feather="search"></i>
          <input defaultValue="Cari di Gadgetpedia" />
        </div>

        <div className="shoping-cart">
          <i data-feather="shopping-cart"></i>
        </div>

        <a href="Login" className="btn-masuk">
        <button >Masuk</button>
          </a>

        <div className="btn-daftar">
          <button >Daftar</button>
        </div>
      </div>
      <div className="text-under-search">
        <a href="#">Lenovo Legion</a>
        <a href="#">Iphone 15 Promax</a>
        <a href="#">Micro SD</a>
        <a href="#">Samsung Galaxy S21</a>
        <a href="#">Charger Iphone</a>
        <a href="#">Charger Type C</a>
      </div>
    </div>
  );
}

export default Navbar;
