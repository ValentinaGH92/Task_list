import "bootstrap/dist/css/bootstrap.min.css";
import NavbarSearch from "./components/Navbar/Navbar";
import FormColaborator from "./components/Form/Form";
import Tasks from "./components/Tasks/Task";
import { useState } from "react";
import { BaseColaboradores } from "./data/colaborators";

function App() {
  const [colaborators, setColaborators] = useState(BaseColaboradores);
  return (
    <>
      <NavbarSearch
        colaborators={colaborators}
        setColaborators={setColaborators}
      />
      <FormColaborator
        colaborators={colaborators}
        setColaborators={setColaborators}
      />
      <Tasks tasks={colaborators} />
    </>
  );
}

export default App;
