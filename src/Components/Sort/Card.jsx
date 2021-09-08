import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import avatar1 from "../../Assets/avatar1.png";
import "./card.scoped.css";

const Cards = () => {
  return (
    <Card className="p-3">
      <div className="d-flex">
        <Image
          className="my-auto"
          src={avatar1}
          width={100}
          height={100}
          roundedCircle
        />
        <div className="ml-4">
          <h6 className="m-0" style={{ fontWeight: "600" }}>
            Louis Tomlinson
          </h6>
          <p className="title">Web Developer</p>
          <span className="title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height={14}
              fill="currentColor"
              className="bi bi-geo-alt mr-1"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            Jakarta
          </span>
          <div className="my-3">
            <span className="skill">PHP</span>
            <span className="skill">Javascript</span>
            <span className="skill">html</span>
          </div>
        </div>
        <div className="my-auto ml-auto mr-5">
          <Link to="/profile/Louis Tomlinson" className="btn btn-primary btn-sm">Lihat Profile</Link>
        </div>
      </div>
    </Card>
  );
};

export default Cards;
