import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Dan from "../../assets/jpeg/Dan_3.JPG";
import Daph from "../../assets/jpeg/daphine.jpg";
import "./InfoSection.css";

function TeamComponent(props) {
  return (
    <>
      <Container
        style={{ minHeight: "400px", zIndex: "-10", position: "relative" }}
        id="team" className={`mt-3 mb-5 bg-secondary rounded-4 team-effect ${props.shadow ? "shadow" : ""} ${props.active ? "transition-down" : "transition-up"}`}
      >
        <Row className="">
          <Col className="p-3">
            <Card className="bg-dark text-white">
              <Card.Img src={Dan} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Daphine Vorstenbosch</Card.Title>
                <Card.Text className="fw-light">
                  Designer & Marketing Lead
                </Card.Text>
                <Card.Text>
                  Daphine Vorstenbosch, the creative force behind Sonicraft's
                  aesthetic and brand, leads the design and marketing efforts.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col className="p-3">
            <Card className="bg-dark text-white" >
              <Card.Img src={Daph} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Dan Vorstenbosch</Card.Title>
                <Card.Text className="fw-light">
                  Founder & Master Craftsman
                </Card.Text>
                <Card.Text>
                  Dan Vorstenbosch, the heart and soul of Sonicraft,
                  meticulously handcrafts each speaker from scratch.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col className="p-3">
            <Card className="bg-dark text-white">
              <Card.Img src={""} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text className="fw-light">
                  Founder & Master Craftsman
                </Card.Text>
                <Card.Text>
                  Dan Vorstenbosch, the heart and soul of Sonicraft,
                  meticulously handcrafts each speaker from scratch. With an
                  unwavering passion for sound and a commitment to
                  sustainability, Dan ensures every Sonicraft speaker delivers
                  exceptional audio quality while being environmentally
                  conscious. His expertise in combining traditional
                  craftsmanship with modern technology defines Sonicraft's
                  unique and bespoke products.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TeamComponent;
