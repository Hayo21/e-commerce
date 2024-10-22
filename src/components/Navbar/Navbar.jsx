import { useContext, useState } from "react"; // Add useContext
import PropTypes from "prop-types";
import "./Navbar.css";
// ngambil paket linknya dari marih
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      {/* Gambar Logo dan juga navbar */}
      <Link to="/">
        <img src={assets.logo_2} className="logo" alt="logo" />
      </Link>
      <ul className="navbar-menu">
        {/* halaman home */}
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
          Home
        </Link>
        {/* halaman menu */}
        <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>
          Menu
        </a>
        {/* halaman app download */}
        <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>
          Mobile-app
        </a>
        {/* halaman contact us atau footer */}
        <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        {/* search */}
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {/* kalo diklik bakal muncul login */}
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

// Add PropTypes validation
Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default Navbar;
