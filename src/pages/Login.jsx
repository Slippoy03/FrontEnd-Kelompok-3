import "./css/login.css";

function Login() {
  return (
    <div>
      <div className="container">
        <div className="logo">
          <img src="img-login/logo.png" alt="" width="160px" height="37px" />
        </div>
        <div className="background-image">
          <div className="background-close">
            <img src="img-login/bg.png" alt="" width="910px" />
          </div>
          <div className="login-form">
            <div className="heading1">
              <h1>Masuk</h1>
              <a href="">Daftar</a>
            </div>
            <div className="email-input">
              <label htmlFor="email" className="label1">
                Nomor HP atau Email
              </label>
              <div className="input-form">
                <input type="text" required />
              </div>
              <div className="need-help">
                <a href="#">Butuh bantuan?</a>
              </div>
              <a href="/Home">
                <button className="next">
                  <span>Selanjutnya</span>
                </button>
              </a>
            </div>
            <div className="option">
              <span className="line"></span>
              <span className="text-option">atau masuk dengan</span>
              <span className="line"></span>
            </div>
            <div className="qr">
              <a href="#">
                <button className="qrcode">
                  <img src="img-login/Qricon.png" alt="" />
                  <span>Scan Kode QR</span>
                </button>
              </a>
            </div>
            <div className="google">
              <a href="#">
                <button className="withgoogle">
                  <img src="img-login/Googleicon.png" alt="" />
                  <span>Google</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <span>
          © 2009-2024, PT Gadgetpedia <a href="#">Bantuan</a>{" "}
        </span>
      </footer>
    </div>
  );
}

export default Login
