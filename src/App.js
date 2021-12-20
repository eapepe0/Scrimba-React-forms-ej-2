import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({ nombre: "", apellido: "" });
  // creamos una variable para almacenar el useState , donde tiene un objeto
  // podemos acceder a esos datos formData["nombre"]

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      // usamos la funcion que maneja useState
      return {
        // devolvemos un objeto
        ...prevFormData, // que use todo lo anterior y modifique solamente
        [event.target.name]: event.target.value // nombre : " valor " en el caso del primer input
        // apellido : " valor "  en el caso del segundo input
      };
    });
    console.log(event.target.name);
  }
  return (
    <form>
      <input
        type="text"
        placeholder="Nombre"
        name="nombre1"
        onChange={handleChange}
      />
      {/* usamos onChange en el input para ver que ingresan , le pasamos una funcion handleChange, 
      el name de cada input tiene que coincidir con objeto creado en useState, asi no crea un objeto vacio*/}
      <input
        type="text"
        placeholder="Apellido"
        name="apellido1"
        onChange={handleChange}
      />
    </form>
  );
}
