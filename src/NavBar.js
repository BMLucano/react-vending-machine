import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar(){
  return(
    <ul className="NavBar">
      <li><NavLink to="/candy" >Candy</NavLink></li>
      <li><NavLink to="/chips" >Chips</NavLink></li>
      <li><NavLink to="/ice-cream">Ice cream</NavLink></li>
    </ul>


  )
}

export default NavBar;