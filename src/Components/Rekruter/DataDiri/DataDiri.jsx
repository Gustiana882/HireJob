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
                <small>Nama Perusahaan</small>
              </Form.Label>
              <Form.Control type="text" name="name" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="m-0">
                <small>Bidang</small>
              </Form.Label>
              <Form.Control type="text" name="jobdesk" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="m-0">
                <small>Kota</small>
              </Form.Label>
              <Form.Control type="text" name="domisili" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                <small>Deskripsi Singkat</small>
              </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="m-0">
                <small>Email</small>
              </Form.Label>
              <Form.Control type="text" name="tempatkerja" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="m-0">
                <small>Instagram</small>
              </Form.Label>
              <Form.Control type="text" name="tempatkerja" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="m-0">
                <small>Telephone</small>
              </Form.Label>
              <Form.Control type="text" name="tempatkerja" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="m-0">
                <small>Linkedin</small>
              </Form.Label>
              <Form.Control type="text" name="tempatkerja" />
            </Form.Group>

          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default DataDiri;
