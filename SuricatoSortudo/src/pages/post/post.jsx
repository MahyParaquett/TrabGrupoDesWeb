import "bootstrap/dist/css/bootstrap.min.css";
import "../../root/root.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bannerlat from "../../components/img/bannerlat.png";

function post() {
  return (
    <Container>
      <Row className="">
        <Col
          className="column-background-1 rounded"
          style={{ marginInline: "10px", padding: "10px" }}
        >
          <h4>Links úteis</h4>
          <hr />
          <div>
            <ul className="lista-lateral">
              <li>
                <a href="#"> Home</a>
              </li>
              <li>
                <a href="#"> Frete</a>
              </li>
              <li>
                <a href="#"> Agenda</a>
              </li>
              <li>
                <a href="#"> Apoiadores</a>
              </li>
              <li>
                <a href="#"> Sobre nós</a>
              </li>
              <li>
                <a href="#"> Contato</a>
              </li>
              <hr />
              <li>
                <a href="#"> Login</a>
              </li>
              <li>
                <a href="#"> POST</a>
              </li>
              <li>
                <a href="#"> PUT</a>
              </li>
              <li>
                <a href="#"> DELETE</a>
              </li>
            </ul>
          </div>
        </Col>
        <Col
          xs={8}
          className="column-background-2 rounded"
          style={{ padding: "10px" }}
        >
          <h2>Destaques Recentes</h2>
          <br />
          <hr />
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
        </Col>
        <Col
          className="column-background-3 rounded"
          style={{ marginInline: "10px", padding: "10px" }}
        >
          <a href="#" target="_blank">
            <img src={bannerlat} alt="banner lateral" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default post;
