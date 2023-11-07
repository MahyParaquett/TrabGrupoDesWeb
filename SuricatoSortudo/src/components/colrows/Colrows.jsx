import "bootstrap/dist/css/bootstrap.min.css";
import "../../root/root.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselHome from "../carouselHome/CarouselHome";
import lancamentos from "../../components/img/lancamentos.png";
import bannerlat from "../img/bannerlat.png";
import { Link } from "react-router-dom";

function Colrows() {
  const imgStyle = {
    width: "100%",
    height: "auto",
  };

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
                <Link to="./"> Home</Link>
              </li>
              <li>
                <Link to="#"> Frete</Link>
              </li>
              <li>
                <Link to="#"> Agenda</Link>
              </li>
              <li>
                <Link to="#"> Apoiadores</Link>
              </li>
              <li>
                <Link to="./sobre"> Sobre nós</Link>
              </li>
              <li>
                <Link to="./contatos"> Contato</Link>
              </li>
              <hr />
              <li>
                <Link to="#"> Login</Link>
              </li>
              <li>
                <Link to="./post"> POST</Link>
              </li>
              <li>
                <Link to="#"> PUT</Link>
              </li>
              <li>
                <Link to="#"> DELETE</Link>
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
          <CarouselHome />
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
          <hr />
          <a href="#" target="_blank">
            <img src={lancamentos} alt="banner lancamentos" style={imgStyle} />
          </a>
          <hr />
          <h2>Clássicos x Modernos</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius harum
            facere amet ipsa libero, esse hic quam aut numquam blanditiis,
            veritatis sed dolor consequuntur deleniti pariatur earum expedita,
            aspernatur porro! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quo enim eaque labore vitae voluptas quaerat consectetur
            excepturi ab quibusdam dolor quam odio doloribus fugiat assumenda,
            pariatur explicabo, deserunt nihil earum. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Repudiandae, fugit maiores quam
            quod aut assumenda neque, quisquam quidem, pariatur error dicta vel
            molestias magnam! Error quasi beatae corporis repellat aspernatur.
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

export default Colrows;
