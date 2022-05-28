import React from "react";
import { Link } from "react-router-dom";

//Css
import "../styles/NotFound.scss";

//images
import NotFoundImg from "../assets/notFoundImg.jpg";

const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <img src={NotFoundImg} alt="notfoundimg" height={500} width={500} />
      <Link to={"/login"} className="text-white">
        Go To Login
      </Link>
    </div>
  );
};

export default NotFound;
