import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarSearch({ colaborators, setColaborators }) {
  const [search, setSearch] = useState("");
  const [initialColaborators, setInitialColaborators] = useState(colaborators);

  useEffect(() => {
    if (colaborators.length > initialColaborators.length)
      setInitialColaborators(colaborators);
  }, [colaborators]);

  const handlerInputChange = (event) => {
    const { value } = event.target;

    if (value === "") setColaborators(initialColaborators);

    setSearch(value);
  };

  const handlerSearchColaborator = () => {
    const filterColaborator = colaborators.filter(
      (colaborator) =>
        colaborator.nombre.includes(search) ||
        colaborator.correo.includes(search)
    );

    setColaborators(filterColaborator);
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">Buscador de Colaboradores</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Busca un colaborador"
              className="me-2"
              aria-label="Search"
              name="search"
              value={search}
              onChange={handlerInputChange}
            />
            <Button
              variant="outline-success"
              onClick={handlerSearchColaborator}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSearch;
