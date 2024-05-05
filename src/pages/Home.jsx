import Header from "./modules/Header"
import Navbar from "./modules/Navbar"
import MainContent from "./modules/MainContent";
import Footer from "./modules/Footer"
import "./css/home.css";



function home() {
  return (
    <div>
      <Header />
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  )
}

export default home
