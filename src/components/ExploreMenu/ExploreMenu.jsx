import PropTypes from "prop-types";
import "./ExploreMenu.css";
// memanggil data dari assets yang menulist
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      {/* tulisan di bawah jmbotron */}
      <h1>Explore Our Toys</h1>
      <p className="explore-menu-text">
        {/* ini paragrafnya */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto reiciendis, eius a alias
        molestiae cum dolore magnam.
      </p>
      <div className="explore-menu-list">
        {/* settingan untuk ngambil data dari assets jangan lupa di import filenya */}
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))}
              key={index}
              className="explore-menu-list-item"
            >
              <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

// buat ngebenerin propsnya biar kg ada tulisan error
// bisak pake ini atau setting tutronya ada di playlist gua
ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};
export default ExploreMenu;
