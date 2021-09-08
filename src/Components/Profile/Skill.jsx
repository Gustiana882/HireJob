import { Card, Form, Button } from "react-bootstrap";
import "./datadiri.scoped.css";
const Skill = () => {
  return (
    <>
      <Card>
        <Card.Header>Data Diri</Card.Header>
        <Card.Body>
          <Form method="post">
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="m-0">
                <small>Skill</small>
              </Form.Label>
              <div className="d-flex">
                <Form.Control type="text" name="Skill" />
                <Button variant="warning" size="sm" className="text-white ml-3">
                  Simpan
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Skill;
