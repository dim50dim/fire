import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/signin">Signin</Link>
      <Link to="/account">Account</Link>
    </nav>
  );
}
export default Navbar;