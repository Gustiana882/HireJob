import {
  Navbar,
  Container,
  InputGroup,
  FormControl,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Topbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Cards from "../../Components/Sort/Card";
import "./sort.scoped.css";

const Sort = () => {
  return (
    <div className="bg-grey">
      <Topbar />
      <Navbar bg="custem">
        <Container>
          <Navbar.Brand href="/search" className="text-white">
            Top Jobs
          </Navbar.Brand>
        </Container>
      </Navbar>
      {/* section */}
      <Container>
        <Card>
          <InputGroup>
            <FormControl
              className="border-0"
              placeholder="Search for any skill"
            />
            <div className="mx-2 border border-3 border-end" />
            <div className="d-flex">
              <Form.Control as="select" className="border-0" custom>
                <option>Sort</option>
                <option>Nama</option>
                <option>Lokasi</option>
                <option>Freelance</option>
                <option>Fulltime</option>
              </Form.Control>
              <Button variant="primary" size="sm" className="m-1">
                Search
              </Button>
            </div>
          </InputGroup>
        </Card>
      </Container>
      {/* end section */}
      <Container className="my-5">
        {[1, 1, 1, 1, 1].map((v, i) => {
          return <Cards key={i} />;
        })}
      </Container>
      <Footer />
    </div>
  );
};

export default Sort;
