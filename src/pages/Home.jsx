import react from "react";
import { Announcements } from "../components/Announcements";
import Categories from "../components/Categories";
import NavBar from "../components/NavBar";
import Products from "../components/Products";

import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcements />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
