import { Container } from "react-bootstrap";
import logo from "../../Assets/logo-white.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-custem p-5">
        <Container>
          <div>
            <img src={logo} alt="logo" width={100} height={50} />
          </div>
          <div className="w-25 text-white">
            <small>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
              repellendus. Perferendis distinctio porro ipsum harum
            </small>
          </div>
          <div className="mt-5 mb-3" style={{border:"1px white solid"}}></div>
          <div className="d-flex my-2 text-white">
              <p>2020 Powworld.All right reserved</p>
              <p className="ml-auto mx-5">Telpon</p>
              <p>Email</p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
