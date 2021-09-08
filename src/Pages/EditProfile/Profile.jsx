import {
  Navbar,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Topbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Sidenav from "../../Components/Profile/Sidenav";
import DataDiri from "../../Components/Profile/DataDiri";
import Skill from "../../Components/Profile/Skill";
import Pengalaman from "../../Components/Profile/Pengalaman";
import Portfolio from "../../Components/Profile/Portfolio";
import "./profile.scoped.css";

const Profile = () => {
  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <Topbar />
      <Navbar bg="custem mb-2" style={{ height: "250px" }} />
      <Container style={{ marginTop: "-200px", marginBottom: "80px" }}>
        <Row>
          <Col md={5} lg={4} className="mb-3">
            <Sidenav />
          </Col>
          <Col md={7} lg={8}>
            <DataDiri />
            <br />
            <Skill />
            <br />
            <Pengalaman />
            <br />
            <Portfolio />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Profile;
