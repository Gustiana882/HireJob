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
import { useState } from "react";
import bg from "../../Assets/bg.png";
import "./login.scoped.css";
// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ActionUser from "../../Storages/Actions/Users";
// import PageAuth from "../../Utils/PagesAuth";

const Login = () => {
  const [input, setInput] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, ...{ [name]: value } });
  };

  const validate = (object) => {
    for (const key in object) {
      if (object[key] === "") {
        alert(`${key} is not null`);
      } else {
        history.push("/");
      }
    }
  };

  const submit = (e) => {
    e.preventDefault();
    validate(input);
    console.log(input);
  };

  return (
    <section>
      <Row>
        <Col id="bg">
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
          <Form method="post" onSubmit={submit}>
            <h3>Halo, Pewpeople</h3>
            <p className="text-muted mb-5">
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </small>
            </p>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <small>Email</small>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>
                <small>Password</small>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="my-5" block>
              Login
            </Button>
          </Form>
          <p className="text-center">
            <small>
              Anda belum punya akun? <Link to="/register">Daftar disini</Link>
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

const mapDispatchToProps = (dispact) => {
  return {
    authSet: bindActionCreators(ActionUser.AuthSet, dispact),
    userSet: bindActionCreators(ActionUser.UserSet, dispact),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
