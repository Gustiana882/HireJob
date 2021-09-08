import { Card, Image, Button } from "react-bootstrap";
import { GeoAlt } from "react-bootstrap-icons";
import avatar1 from "../../../Assets/avatar1.png";
import "./sidenav.scoped.css";

const Sidenav = () => {
  return (
    <>
      <Card className="border-0 p-3">
        <Image
          className="mx-auto my-4"
          src={avatar1}
          width={100}
          height={100}
          roundedCircle
        />
        <div>
          <h5 className="m-0" style={{ fontWeight: "700" }}>
            PT. Martabat Jaya Abadi
          </h5>
          <p className="m-0">
            <small>Financial</small>
          </p>
          <span className="location">
            <GeoAlt size={14} className="mr-2" />
            Jakarta
          </span>
        </div>
      </Card>
      <div className="mt-3 w-100">
        <Button variant="primary" block>
          Simpan
        </Button>
        <Button variant="outline-primary" block>
          Batal
        </Button>
      </div>
    </>
  );
};

export default Sidenav;
