// import React from "react";
import { Link } from "react-router-dom";

const HeaderClient = () => {
  return (
    <div>
      <ul style={{ display: "flex", listStyleType: "none" }}>
        <li style={{ marginRight: "20px" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ marginRight: "20px" }}>
          <Link to="/shop">Shop</Link>
        </li>
        <li style={{ marginRight: "20px" }}>
          <Link to="/login">Login</Link>
        </li>
        <li style={{ marginRight: "20px" }}>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderClient;
