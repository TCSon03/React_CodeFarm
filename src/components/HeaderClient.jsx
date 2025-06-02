import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const HeaderClient = () => {
  // Sử dụng useContext để lấy theme và toggleTheme
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Style động dựa trên theme
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: theme === "light" ? "#f8f9fa" : "#333",
    color: theme === "light" ? "#000" : "#fff",
  };

  const linkStyle = {
    color: theme === "light" ? "#000" : "#fff",
    textDecoration: "none",
  };

  return (
    <div>
      <header style={headerStyle}>
        <div className="logo">Logo</div>
        <ul style={{ display: "flex", listStyleType: "none" }}>
          <li style={{ marginRight: "20px" }}>
            <Link to="/" style={linkStyle}>Home</Link>
          </li>
          <li style={{ marginRight: "20px" }}>
            <Link to="/about" style={linkStyle}>About</Link>
          </li>
          <li style={{ marginRight: "20px" }}>
            <Link to="/contact" style={linkStyle}>Contact</Link>
          </li>
          <li style={{ marginRight: "20px" }}>
            <Link to="/products" style={linkStyle}>Products</Link>
          </li>
          <li style={{ marginRight: "20px" }}>
            <Link to="/cart" style={linkStyle}>Cart</Link>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              style={{
                backgroundColor: theme === "light" ? "#000" : "#fff",
                color: theme === "light" ? "#fff" : "#000",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default HeaderClient;