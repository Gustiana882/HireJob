import { Card, Form, Button } from "react-bootstrap";
import "./datadiri.scoped.css";
const Portfolio = () => {
  return (
    <>
      <Card>
        <Card.Header>Portfolio</Card.Header>
        <Card.Body>
          <Form method="post">
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="m-0">
                <small>Nama Aplikasi</small>
              </Form.Label>
              <Form.Control type="text" name="name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label className="m-0">
                <small>Link Repository</small>
              </Form.Label>
              <Form.Control type="text" name="link" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label className="m-0">
                <small>Type Portfolio</small>
              </Form.Label>
              <div className="my-3">
                <Form.Check
                  className="mr-5"
                  inline
                  label="Aplikasi Mobile"
                  name="group1"
                  type="radio"
                  id={`inline-radio-1`}
                />
                <Form.Check
                  inline
                  label="Aplikasi Web"
                  name="group1"
                  type="radio"
                  id={`inline-radio-2`}
                />
              </div>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                <small>Deskripsi Singkat</small>
              </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>

          <div className="mt-3 w-100">
            <Button variant="outline-warning" block>
              Tambah Portfolio
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Portfolio;
