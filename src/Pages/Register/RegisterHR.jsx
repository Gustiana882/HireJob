import {
  Row,
  Col,
  Image,
  Jumbotron,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import bg from "../../Assets/bg.png";
import "./register.scoped.css";

const Register = () => {
  const history = useHistory();
  return (
    <section>
      <Row>
        <Col id="bg" className="h-auto">
          <Image src={bg} />
          <Jumbotron fluid>
            <Container>
              <h1>
                Temukan developer berbakat & terbaik di berbagai bidang keahlian
              </h1>
            </Container>
          </Jumbotron>
        </Col>
        <Col>
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
                <small>Name</small>
              </Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <small>Email</small>
              </Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formBasicCompany">
              <Form.Label>
                <small>Company</small>
              </Form.Label>
              <Form.Control type="text" placeholder="Company" />
            </Form.Group>

            <Form.Group controlId="formBasicPosition">
              <Form.Label>
                <small>Position</small>
              </Form.Label>
              <Form.Control type="text" placeholder="Position" />
            </Form.Group>

            <Form.Group controlId="formBasicphone">
              <Form.Label>
                <small>No handphone</small>
              </Form.Label>
              <Form.Control type="number" placeholder="No handphone" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>
                <small>Password</small>
              </Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicreapetpassword">
              <Form.Label>
                <small>Reapet Password</small>
              </Form.Label>
              <Form.Control type="password" placeholder="Reapet Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="my-5" block>
              Register
            </Button>

            <Button
              variant="warning"
              type="button"
              onClick={() => history.push("/register")}
              className="my-5 text-white"
              block
            >
              register as a job seeker
            </Button>
          </Form>
          <p className="text-center">
            <small>
              Anda sudah punya akun? <Link to="/login">Masuk disini</Link>
            </small>
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default Register;
