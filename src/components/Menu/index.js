import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Nav activeKey="/" className="white-background">
      <Nav.Item>
        <NavLink to={"/"} style={{ color: "black" }}>
          Home
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to={"/blog"}>Blog</NavLink>
      </Nav.Item>
    </Nav>
  );
};

export default Menu;
