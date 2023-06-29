import { useState } from "react";

export default function CardsList({ listaTareas, setListaTareas }) {
  const [indiceEdicion, setIndiceEdicion] = useState(-1);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const fncDelete = (id) => {
    const updatedList = listaTareas.filter((tarea, index) => index !== id);
    setListaTareas(updatedList);
  };

  const fncEdit = (index) => {
    setIndiceEdicion(index);
    setNuevaTarea(listaTareas[index]);
  };

  const saveEdit = (index) => {
    const updatedList = [...listaTareas];
    updatedList[index] = nuevaTarea;
    setListaTareas(updatedList);
    setIndiceEdicion(-1);
  };

  const handleEditInputChange = (e) => {
    setNuevaTarea(e.target.value);
  };

  return (
    <div className="card-list">
      {listaTareas.map((tarea, index) => (
        <div className="card" key={index}>
          <div className="card-content">
            {indiceEdicion === index ? (
              <input
                type="text"
                value={nuevaTarea}
                onChange={handleEditInputChange}
              />
            ) : (
              <h3 className="card-title">{tarea}</h3>
            )}
          </div>
          <div className="card-footer">
            <div className="card-date"></div>
            <div className="card-actions">
              {indiceEdicion === index ? (
                <button onClick={() => saveEdit(index)}>Guardar</button>
              ) : (
                <>
                  <button onClick={() => fncEdit(index)}>Edit</button>
                  <button onClick={() => fncDelete(index)}>Delete</button>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
