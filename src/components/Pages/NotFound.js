import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  //   console.log(navigate);

  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <h2>Page introuvable !!</h2>
      <button onClick={goHome}>Retourner à la page d'accueil</button>
    </>
  );
};

export default NotFound;
