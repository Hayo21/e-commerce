import { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      {/* mengarahkan ke file Header */}
      <Header />
      {/* mengarahkan ke file ExploreMenu */}
      <ExploreMenu category={category} setCategory={setCategory} />
      {/* mengarahkan ke food display */}
      <FoodDisplay category={category} />
      {/* mengarahkan ke app download component */}
      <AppDownload />
    </div>
  );
};

export default Home;
