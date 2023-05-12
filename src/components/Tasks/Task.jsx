const Tasks = ({ tasks }) => {
  return (
    <>
      <h1>Listado de colaboradores</h1>
      <ul>
        {tasks.map((task) => (
          <li>
            {task.nombre} - {task.correo}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tasks;
