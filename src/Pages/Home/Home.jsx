/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ActionsUsers from "../../Storages/Actions/Users";
import PagesAuth from "../../Utils/PagesAuth";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import image1 from "../../Assets/image-1.png";
import image2 from "../../Assets/image-2.png";
import image3 from "../../Assets/image-3.png";
import iconList from "../../Assets/tick.png";
import Slider from "react-slick";
const Home = (props) => {
  /**
   * contoh menyimpan token ke dalam storage dengan props.AuthSet()
   * contoh menyimpan data user ke dalam storage  dengan props.UserSet()
   */
  useEffect(() => {
    props.AuthSet("ini token");
    props.UserSet([{ name: "user", email: "user@gmail.com" }]);
  }, []);

  let settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <>
      <Navbar />
      <Container className="py-5">
        <Row className="flex-sm-wrap-reverse">
          <Col sm={12} md={6} className="m-auto p-5">
            <h1 style={{fontWeight:"600"}}>
              Talenta terbaik negri untuk perubahan revolusi 4.0
            </h1>
            <p className="text-secondary py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <Button variant="primary">Mulai Dari Sekarang</Button>{" "}
          </Col>
          <Col sm={12} md={6}>
            <div>
              <Image src={image1} className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="py-5">
        <Row className="mt-5">
          <Col sm={12} md={6}>
            <div>
              <Image src={image2} className="w-100" />
            </div>
          </Col>
          <Col sm={12} md={6} className="m-auto p-5">
            <h2 style={{fontWeight:"600"}}>Kenapa harus mencari tallent di peworld</h2>
            <div className="text-secondary my-4">
              <div className="d-flex p-2">
                <div>
                  <img
                    src={iconList}
                    width={18}
                    height={18}
                    alt=""
                    className="mx-2"
                  />{" "}
                </div>
                <small className="pt-1">
                  Kenapa harus mencari tallent di peworld
                </small>
              </div>
              <div className="d-flex p-2">
                <div>
                  <img
                    src={iconList}
                    width={18}
                    height={18}
                    alt=""
                    className="mx-2"
                  />{" "}
                </div>
                <small className="pt-1">
                  Kenapa harus mencari tallent di peworld
                </small>
              </div>
              <div className="d-flex p-2">
                <div>
                  <img
                    src={iconList}
                    width={18}
                    height={18}
                    alt=""
                    className="mx-2"
                  />{" "}
                </div>
                <small className="pt-1">
                  Kenapa harus mencari tallent di peworld
                </small>
              </div>
              <div className="d-flex p-2">
                <div>
                  <img
                    src={iconList}
                    width={18}
                    height={18}
                    alt=""
                    className="mx-2"
                  />{" "}
                </div>
                <small className="pt-1">
                  Kenapa harus mencari tallent di peworld
                </small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="py-5">
        <Row className="flex-sm-wrap-reverse">
          <Col sm={12} md={6} className="m-auto p-5">
            <h2 style={{fontWeight:"600"}}>Skill Tallent</h2>
            <p className="text-secondary pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <Row>
              <Col sm={12} md={6}>
                <div className="text-secondary my-4">
                <div className="d-flex p-2">
                    <div>
                      <img
                        src={iconList}
                        width={18}
                        height={18}
                        alt=""
                        className="mx-2"
                      />
                    </div>
                      <small className="pt-1">Java</small>
                  </div>
                  <div className="d-flex p-2">
                    <div>
                      <img
                        src={iconList}
                        width={18}
                        height={18}
                        alt=""
                        className="mx-2"
                      />
                    </div>
                      <small className="pt-1">Kotlin</small>
                  </div>
                  <div className="d-flex p-2">
                    <div>
                      <img
                        src={iconList}
                        width={18}
                        height={18}
                        alt=""
                        className="mx-2"
                      />
                    </div>
                      <small className="pt-1">PHP</small>
                  </div>
                  <div className="d-flex p-2">
                    <div>
                      <img
                        src={iconList}
                        width={18}
                        height={18}
                        alt=""
                        className="mx-2"
                      />
                    </div>
                      <small className="pt-1">Javascript</small>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className="text-secondary my-4">
                <div className="d-flex p-2">
                    <div>
                      <img
                        src={iconList}
                        width={18}
                        height={18}
                        alt=""
                        className="mx-2"
                      />
                    </div>
                      <small className="pt-1">Golang</small>
                  </div>
                  <div className="d-flex p-2">
                    <div>
                      <img
                        src={iconList}
                        width={18}
                        height={18}
                        alt=""
                        className="mx-2"
                      />
                    </div>
                      <small className="pt-1">C++</small>
                  </div>
                  <div className="d-flex p-2">
                    <div>
                      <img
                        src={iconList}
                        width={18}
                        height={18}
                        alt=""
                        className="mx-2"
                      />
                    </div>
                      <small className="pt-1">Ruby</small>
                  </div>
                  <div className="d-flex p-2">
                    <div>
                      <img
                        src={iconList}
                        width={18}
                        height={18}
                        alt=""
                        className="mx-2"
                      />
                    </div>
                      <small className="pt-1">10+ Bahasa Lainnya</small>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={6}>
            <div>
              <Image src={image3} className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="p-5" style={{ backgroundColor: "#E5E5E5" }}>
        <Container className="py-5">
          <h3 className="text-center fw-bold my-5">
            Their opinion about peworld
          </h3>
          <Slider {...settings}>
            {[1, 2, 3, 4, 5].map((val, i) => {
              return (
                <div className="mr-5" key={i}>
                  <Card
                    className="p-4"
                    style={{ width: "18rem", borderRadius: "15px" }}
                  >
                    <Image
                      style={{ border: "5px #FBB0175E solid" }}
                      variant="top"
                      src={image1}
                      className="rounded-pill mx-auto"
                      width={100}
                      height={100}
                    />
                    <Card.Body className="text-center">
                      <Card.Title>Harry Styles</Card.Title>
                      <Card.Text className="text-secondary">
                        <small>Web Development</small>
                        <small>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </small>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </Slider>
        </Container>
      </div>
      <Footer />
    </>
  );
};

// get redux
const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
// set redux
const mapDispatchToProps = (dispacth) => {
  return {
    AuthSet: bindActionCreators(ActionsUsers.AuthSet, dispacth),
    UserSet: bindActionCreators(ActionsUsers.UserSet, dispacth),
  };
};

export default PagesAuth(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
