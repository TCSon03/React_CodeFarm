import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <p>Logo</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">DashBoardPage</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
