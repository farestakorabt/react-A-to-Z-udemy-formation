import React from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();

  console.log(location);

  return <h1>Contact</h1>;
};

export default Contact;
