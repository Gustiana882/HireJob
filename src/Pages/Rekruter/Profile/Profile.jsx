import { Card, Container, Image, Button } from "react-bootstrap";
import { GeoAlt, Envelope, Instagram, Telephone, Linkedin } from "react-bootstrap-icons";
import Topbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import "./profile.scoped.css";
import avatar1 from "../../../Assets/avatar1.png";

const Profile = () => {
  return (
    <>
      <Topbar />
      <Container className="my-5">
        <Card className="text-center">
          <div
            className="bg-custem mb-2 rounded-top"
            style={{ height: "150px" }}
          />
          <Card.Body className="col-12 col-md-6 mx-auto" style={{ marginTop: "-80px" }}>
            <Image src={avatar1} roundedCircle />
            <Card.Title>
              <p>PT. Martabat Jaya Abadi</p>
            </Card.Title>
            <div className="mb-3">
              <p className="m-0">
                <small>Financial</small>
              </p>
              <span className="text">
                <GeoAlt size={14} className="mr-2" />
                Jakarta
              </span>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
              Curabitur eu lacus fringilla, vestibulum risus at.
            </p>
            <Button variant="primary" size="sm" className="w-75">
              Edit Profile
            </Button>
            <div className="text contact">
              <div className="mt-3">
                <Envelope size={16} />
                <span className="ml-2">louistomlinson@gmail.com</span>
              </div>
              <div className="mt-3">
                <Instagram size={16} />
                <span className="ml-2">martabat_jaya</span>
              </div>
              <div className="mt-3">
                <Telephone size={16} />
                <span className="ml-2">0821-8190-1821</span>
              </div>
              <div className="mt-3">
                <Linkedin size={16} />
                <span className="ml-2">Martabat Jaya Abadi</span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default Profile;
