import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => (
  <nav className="bg-gray-800 text-white p-4 flex justify-around">
    <Link to="/">Home</Link>
    <Link to="/skills">Skills</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/personal-info">Personal Info</Link>
  </nav>
);

export default Header;
