import { assets } from "../../assets/assets";
import "./Footer.css";

// semua settingan dan text di bagian footer di marih

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo_2} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt culpa expedita obcaecati dolores quisquam
            suscipit sed, non ullam, architecto rerum omnis at sint odit asperiores nemo provident. Minus, quidem quam?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privicy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Kalo Mau calling calling di marih </h2>
          <ul>
            <li>+62 812 3456 789</li>
            <li>Hayo@siapa.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copy right &copy; 2024 Hayo. All rights reserved</p>
    </div>
  );
};

export default Footer;
