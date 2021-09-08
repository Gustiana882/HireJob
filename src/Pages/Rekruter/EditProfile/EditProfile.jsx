import {
  Navbar,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Topbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import Sidenav from "../../../Components/Rekruter/Sidenav/Sidenav";
import DataDiri from "../../../Components/Rekruter/DataDiri/DataDiri";

const EditProfile = () => {
  return (
    <>
      <Topbar />
      <Navbar bg="custem mb-2" style={{ height: "250px" }} />
      <Container style={{ marginTop: "-200px", marginBottom: "80px" }}>
        <Row>
          <Col md={5} lg={4} className="mb-3">
            <Sidenav />
          </Col>
          <Col md={7} lg={8}>
            <DataDiri />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default EditProfile;
