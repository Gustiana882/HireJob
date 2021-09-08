import { Navbar, Nav, Button, Container, Image } from "react-bootstrap";
import { Bell, Envelope } from "react-bootstrap-icons";
import logo from "../../Assets/logo-blue.svg";
import user from "../../Assets/avatar4.png";
import "./navbar.scoped.css"

const NavLoginTrue = () => {
  return (
    <Nav className="justify-content-end" activeKey="link-1">
      <Nav.Item className="ml-3">
        <Nav.Link eventKey="link-1">
          <Bell size={16} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="ml-3">
        <Nav.Link eventKey="link-2">
          <Envelope size={16} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="ml-3">
        <Nav.Link eventKey="disabled" disabled>
          <Image src={user} width={30} roundedCircle />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

const NavLoginFalse = () => {

  return (
    <Nav className="ml-auto" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/login">
          <Button variant="primary px-4">Masuk</Button>{" "}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/register">
          <Button variant="outline-primary px-4">Daftar</Button>{" "}
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

const Navbars = () => {

  const isLogin = false;

  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width={35}
            height={35}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        { (isLogin) ? <NavLoginTrue /> : <NavLoginFalse /> }
      </Container>
    </Navbar>
  );
};

export default Navbars;
