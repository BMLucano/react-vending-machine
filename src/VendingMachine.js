import { Link } from "react-router-dom";

function VendingMachine(){
  return(
    <ul>
      <li><Link to="/candy" >Candy</Link></li>
      <li><Link to="/chips" >Chips</Link></li>
      <li><Link to="/ice-cream">Ice cream</Link></li>
    </ul>


  )
}

export default VendingMachine;