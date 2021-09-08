import {
  Navbar,
  Container,
  Card,
  Image,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import Topbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Sidenav from "../../Components/Sidenav/Sidenav";
import "./profile.scoped.css";
import Project1 from "../../Assets/project1.png";
import Project2 from "../../Assets/project2.png";
import Project3 from "../../Assets/project3.png";
import Project4 from "../../Assets/project4.png";
import Project5 from "../../Assets/project5.png";
import Project6 from "../../Assets/project6.png";
import tokopedia from "../../Assets/tokopedia.png";

const Profile = () => {
  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <Topbar />
      <Navbar bg="custem mb-2" style={{ height: "250px" }}>
        <div className="edit">
          <Button variant="success" size="sm" >Edit Profile</Button>
        </div>
      </Navbar>
      <Container style={{ marginTop: "-200px", marginBottom: "80px" }}>
        <Row>
          <Col md={5} lg={4} className="mb-3">
            <Sidenav />
          </Col>
          <Col md={7} lg={8}>
            <Card className="p-3 border-0">
              <h6 style={{ fontWeight: "700" }}>Pengalaman Kerja</h6>
              <Row>
                <Col lg={4}>
                  <Image src={Project1} className="w-100 my-3" />
                  <p className="text-center">Whatsapp</p>
                </Col>
                <Col lg={4}>
                  <Image src={Project2} className="w-100 my-3" />
                  <p className="text-center">Whatsapp</p>
                </Col>
                <Col lg={4}>
                  <Image src={Project3} className="w-100 my-3" />
                  <p className="text-center">Whatsapp</p>
                </Col>
                <Col lg={4}>
                  <Image src={Project4} className="w-100 my-3" />
                  <p className="text-center">Whatsapp</p>
                </Col>
                <Col lg={4}>
                  <Image src={Project5} className="w-100 my-3" />
                  <p className="text-center">Whatsapp</p>
                </Col>
                <Col lg={4}>
                  <Image src={Project6} className="w-100 my-3" />
                  <p className="text-center">Whatsapp</p>
                </Col>
              </Row>
            </Card>
            <Card className="p-3 border-0 mt-4">
              <h6 style={{ fontWeight: "700" }}>Pengalaman Kerja</h6>
              <div className="d-flex">
                <div className="m-3">
                  <Image src={tokopedia} width={50} height={50} />
                </div>
                <div>
                  <h5 className="position">Engineer</h5>
                  <p className="company">Tokopedia</p>
                  <div>
                    <span className="text">July 2019 - January 2020</span>
                    <span className="text">6 months</span>
                  </div>
                  <p className="text mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi deserunt repellendus atque? Sit doloribus tempora
                    repellendus aliquam commodi deleniti corrupti?
                  </p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Profile;
