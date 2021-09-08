import { Card, Form } from "react-bootstrap";
import "./datadiri.scoped.css";
const DataDiri = () => {
  return (
    <>
      <Card>
        <Card.Header>Data Diri</Card.Header>
        <Card.Body>
          <Form method="post">
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="m-0">
                <small>Nama Lengkap</small>
              </Form.Label>
              <Form.Control type="text" name="name" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="m-0">
                <small>Job Desk</small>
              </Form.Label>
              <Form.Control type="text" name="jobdesk" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="m-0">
                <small>Domisili</small>
              </Form.Label>
              <Form.Control type="text" name="domisili" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="m-0">
                <small>Tempat Kerja</small>
              </Form.Label>
              <Form.Control type="text" name="tempatkerja" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                <small>Deskripsi Singkat</small>
              </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default DataDiri;
