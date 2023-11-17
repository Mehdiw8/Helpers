import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
const Navbar = () => {
  return (
    <nav>
      <section className="headWrapper">
        <h1 className="Logo"> food Project</h1>

        <Searchbar />
        <Link to="/createRecipe" className="makeR">
          Create Recipe
        </Link>
      </section>
      <Link className="home" to="/">
        Home
      </Link>
    </nav>
  );
};

export default Navbar;
