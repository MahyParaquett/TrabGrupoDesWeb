import "bootstrap/dist/css/bootstrap.min.css";
import "../../root/root.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselHome from "../carouselHome/CarouselHome";

function Colrows() {
  return (
    <Container>
      <Row className="">
        <Col
          className="column-background-1 rounded"
          style={{ marginInline: "10px", padding: "10px" }}
        >
          1 of 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Blanditiis officiis doloremque error accusamus. Voluptatem, ab tempora
          nesciunt consequuntur ipsum asperiores temporibus, natus vel odio
          dicta harum, consectetur eaque magnam. Iusto?
        </Col>
        <Col
          xs={8}
          className="column-background-2 rounded"
          style={{ padding: "10px" }}
        >
          <h2>Destaques Recentes</h2>
          <br />
          <CarouselHome />
          <h2>Novidades</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            molestias natus id quo commodi delectus dolorum deleniti quaerat
            repellat, molestiae excepturi eveniet amet possimus nostrum labore
            itaque fuga alias expedita. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Voluptatum eum impedit vero quidem modi debitis,
            beatae neque perferendis laudantium assumenda minus eveniet vitae
            molestias rerum quisquam! Modi unde maiores aliquid?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            maiores nisi dignissimos eveniet nihil fuga soluta, dolor et dicta
            neque? Dolorem tempore consectetur aut libero possimus! Perferendis
            iure molestias sequi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis officiis doloremque error accusamus.
            Voluptatem, ab tempora nesciunt consequuntur ipsum asperiores
            temporibus, natus vel odio dicta harum, consectetur eaque magnam.
            Iusto?
          </p>
        </Col>
        <Col
          className="column-background-3 rounded"
          style={{ marginInline: "10px", padding: "10px" }}
        >
          3 of 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laboriosam maiores nisi dignissimos eveniet nihil fuga soluta, dolor
          et dicta neque? Dolorem tempore consectetur aut libero possimus!
          Perferendis iure molestias sequi.
        </Col>
      </Row>
    </Container>
  );
}

export default Colrows;
