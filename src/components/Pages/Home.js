import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Bienvenue à l'accueil</h1>
      <Link to="/contact" state={{fromHome : 'Helloo'}}>Contact</Link>
    </>
  );
};

export default Home;
