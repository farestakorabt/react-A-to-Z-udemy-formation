import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const params = useParams();

  console.log(params);

  return (
    <>
      <h1>Bienvenu sur votre profile</h1>
      <p>{params.id} </p>
    </>
  );
};

export default Profile;
