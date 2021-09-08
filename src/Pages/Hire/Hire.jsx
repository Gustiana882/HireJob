import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Topbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Sidenav from "../../Components/Hire/Sidenav";
import "./hire.scoped.css";

const Hire = () => {
  return (
    <div>
      <Topbar />
      <Container className="my-5" >
        <Row>
          <Col md={5} lg={4} className="mb-3">
            <Sidenav />
          </Col>
          <Col md={7} lg={8}>
          <Form>
            <h3>Halo, Pewpeople</h3>
            <p className="text-muted mb-5">
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </small>
            </p>
            <Form.Group controlId="formBasicname">
              <Form.Label>
                <small>Posisi</small>
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="formBasicname">
              <Form.Label>
                <small>Nama Lengkap</small>
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <small>Email</small>
              </Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group controlId="formBasicphone">
              <Form.Label>
                <small>No handphone</small>
              </Form.Label>
              <Form.Control type="number" placeholder="No handphone" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                <small>Deskripsi</small>
              </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="warning" type="submit" className="my-5 text-white" block>
              Hire
            </Button>

          </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Hire;
