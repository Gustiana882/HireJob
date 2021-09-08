import { Card, Image } from "react-bootstrap";
import { GeoAlt } from "react-bootstrap-icons";
import avatar1 from "../../Assets/avatar1.png";
import "./sidenav.scoped.css";

const Sidenav = () => {
  return (
    <>
      <Card className="border-0 p-3 shadow">
        <Image
          className="mx-auto my-4"
          src={avatar1}
          width={100}
          height={100}
          roundedCircle
        />
        <div>
          <h5 className="m-0" style={{ fontWeight: "700" }}>
            Louis Tomlinson
          </h5>
          <p className="m-0">
            <small>Web Developer</small>
          </p>
          <span className="location">
            <GeoAlt size={14} className="mr-2" />
            Jakarta
          </span>
          <p className="m-0 text">Freelance</p>
          <p className="mt-3 text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            dolores nisi similique, eligendi autem sint corporis. Dolores, modi
            quam! Doloribus expedita sunt architecto accusamus saepe quaerat
            repellat a ad eligendi!
          </p>
        </div>
        <div className="mt-3">
          <h5 className="mt-3" style={{ fontWeight: "700" }}>
            Skill
          </h5>
          <div className="my-3 d-flex flex-wrap">
            <span className="skill">PHP</span>
            <span className="skill">Javascript</span>
            <span className="skill">html</span>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Sidenav;
