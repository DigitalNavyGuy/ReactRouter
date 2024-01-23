import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/blue">Blue Page</Link>
      <Link to="/red">Red Page</Link>
    </>
  );
};

export default NavBar;
