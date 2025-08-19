import { Link } from "react-router-dom";

function Navbar() {
  return (
  <div className="flex justify-between bg-gray-200 w-full p-4">
      <h1 className="text-center text-2xl font-bold">
              Firebase Google && Context
      </h1>
      <Link to="/signin">Sign in</Link>
  </div>
  );
}
export default Navbar;