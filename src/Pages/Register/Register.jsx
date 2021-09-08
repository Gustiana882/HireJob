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
// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ActionUser from "../../Storages/Actions/Users";
import { useState } from "react";

const Register = () => {
  const history = useHistory();
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    reapetPass: "",
  });
  const [error, setError] = useState({});

  const validasi = (object) => {
    for (const key in object) {
      if (!object[key]) {
        return setError({ ...error, ...{ [key]: `${key} tidak boleh kosong` } });
      } else {
        return setError({ ...error, ...{ [key]: "" } });
      }
    }
    console.log(error);
    if (input.password.length < 8) {
      return setError({ ...error, ...{ password: "password harus terdiri dari 8 karakter" } });
    } else if (input.password !== input.reapetPass) {
      return setError({ ...error, ...{ password: "", reapetPass: "password harus sama" } });
    } else {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, ...{ [name]: value } });
  };

  const submitForm = (e) => {
    e.preventDefault();
    validasi(input);
  };

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
          <Form method="post" onSubmit={submitForm}>
            <h3>Halo, Pewpeople</h3>
            <p className="text-muted mb-5">
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </small>
            </p>
            <Form.Group controlId="formBasicname" hasvalidation="true" >
              <Form.Label>
                <small>Name</small>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                onChange={handleChange}
                isInvalid={error.name}
              />
              <Form.Control.Feedback type="invalid">
                {error.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicEmail" hasvalidation="true" >
              <Form.Label>
                <small>Email</small>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                isInvalid={error.email}
              />
              <Form.Control.Feedback type="invalid">
                {error.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicphone" hasvalidation="true" >
              <Form.Label>
                <small>No handphone</small>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="No handphone"
                name="phone"
                onChange={handleChange}
                isInvalid={error.phone}
              />
              <Form.Control.Feedback type="invalid">
                {error.phone}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" hasvalidation="true" >
              <Form.Label>
                <small>Password</small>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                isInvalid={error.password}
              />
              <Form.Control.Feedback type="invalid">
                {error.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicreapetpassword" hasvalidation="true" >
              <Form.Label>
                <small>Reapet Password</small>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Reapet Password"
                name="reapetPass"
                onChange={handleChange}
                isInvalid={error.reapetPass}
              />
              <Form.Control.Feedback type="invalid">
                {error.reapetPass}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="my-5" block>
              Register
            </Button>

            <Button
              variant="warning"
              type="button"
              onClick={() => history.push("/register-recruiter")}
              className="my-5 text-white"
              block
            >
              Register as a recruiter
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

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authSet: bindActionCreators(ActionUser.AuthSet, dispatch),
    userSet: bindActionCreators(ActionUser.UserSet, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
