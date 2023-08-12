import { DropdownIcon, SerchIcon } from "../helpers/icons";
import "./Navbar.css";
const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="container">
        <div className="left-content">
          <div className="logo">
            <div className="edyoda">EDYODA</div>
          </div>
          <div className="courses">
            <div className="text5">Courses</div>
            <DropdownIcon/>
          </div>
          <div className="courses">
            <div className="text5">Programs</div>
            <DropdownIcon/>
          </div>
        </div>
        <div className="left-content">
        <SerchIcon/>
          <div className="log-in">
            <div className="text5">Log in</div>
          </div>
          <div className="primary-button">
            <b className="text8">join now</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
