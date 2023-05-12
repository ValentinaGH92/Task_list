import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormColaborator({ colaborators, setColaborators }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
  };
  const createNewId = () => toString(colaborators?.length + 1);

  const handlerCreateNewColaborator = () => {
    const newColaborator = {
      id: createNewId(),
      nombre: formState.name,
      correo: formState.email,
    };

    setColaborators((prevColaborators) => [
      ...prevColaborators,
      newColaborator,
    ]);

    setFormState({
      name: "",
      email: "",
    });
  };

  return (
    <div
      style={{
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre del colaborador</Form.Label>
          <Form.Control
            name="name"
            placeholder="Ingrese un colaborador"
            value={formState.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Correo del colaborador</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Ingresar correo del colaborador"
            value={formState.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="button"
          onClick={handlerCreateNewColaborator}
        >
          Agregar
        </Button>
      </Form>
    </div>
  );
}

export default FormColaborator;
