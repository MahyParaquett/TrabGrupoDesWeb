import "bootstrap/dist/css/bootstrap.min.css";
import "../../root/root.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaShoppingCart } from "react-icons/fa";
import surilogo from "../../components/img/logosuricatocirc.png";

function Navbar1() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          sticky="top"
          style={{ background: "var(--terceira-cor)" }}
          className="mb-3"
          //   bg="dark"
          //   data-bs-theme="dark"
        >
          <Container fluid>
            <Navbar.Brand href="#">
              {" "}
              <img src={surilogo} width={60} />
              &emsp;O Suricato Sortudo
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu Suricato
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Produtos</Nav.Link>
                  <NavDropdown
                    title="Categorias"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">
                      Aventura
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Estratégia
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Família</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action2">
                    <FaShoppingCart style={{ fontSize: "24px" }} />
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="O que vamos jogar hoje?"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button
                    variant="outline-success"
                    style={{ background: "var(--segunda-cor)" }}
                  >
                    Pesquisa
                  </Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbar1;
