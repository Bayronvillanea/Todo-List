import { useState } from "react";
import CardsList from "./CardsList";

export default function ListTodo() {
  const [enviar, setEnviar] = useState("");
  const [listaTareas, setListaTareas] = useState([]);
  const [mensaje, setMensaje] = useState("");

  const handleInputChange = (e) => {
    setEnviar(e.target.value);
    setMensaje("");
  };

  const options = () => {
    if (enviar.trim() !== "") {
      setListaTareas([enviar, ...listaTareas]);
      setEnviar("");
    } else {
      const mensajeError = "Ingrese una tarea válida";
      setMensaje(mensajeError);
    }
  };

  return (
    <div className="continer-todo">
      <h1 className="title">Todo-list</h1>
      <input
        type="text"
        placeholder="Ingrese su tarea nueva"
        value={enviar}
        onChange={handleInputChange}
        onKeyPress={() => setMensaje("")}
      />
      <button className="btn-agregar" onClick={options}>
        Agregar
      </button>
      {mensaje && (
        <p style={{ color: "red", marginBottom: "10px" }}>{mensaje}</p>
      )}
      <CardsList listaTareas={listaTareas} setListaTareas={setListaTareas} />
    </div>
  );
}
