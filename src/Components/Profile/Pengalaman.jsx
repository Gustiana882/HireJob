import { Card, Form, Row, Col, Button } from "react-bootstrap";
import "./datadiri.scoped.css";
const Pengalaman = () => {
  return (
    <>
      <Card>
        <Card.Header>Pengalaman Kerja</Card.Header>
        <Card.Body>
          <Form method="post">
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="m-0">
                <small>Posisi</small>
              </Form.Label>
              <Form.Control type="text" name="posisi" />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="m-0">
                    <small>Nama Perusahaan</small>
                  </Form.Label>
                  <Form.Control type="text" name="perusahaan" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="m-0">
                    <small>Bulan/Tahun</small>
                  </Form.Label>
                  <Form.Control type="text" name="date" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                <small>Deskripsi Singkat</small>
              </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>

          <div className="mt-3 w-100">
            <Button variant="outline-warning" block>
              Tambah pengalaman kerja
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Pengalaman;
