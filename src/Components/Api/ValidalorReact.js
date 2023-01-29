import React, { useState } from 'react';

function SearchForm() {
  // Creamos un estado para almacenar el valor del input
  const [inputValue, setInputValue] = useState('');

  // Creamos una función para manejar el envío del formulario
  const handleSubmit = (event) => {
    // Evitamos que la página se recargue
    event.preventDefault();

    // Construimos la URL con el valor del input como una variable
    const url = `https://elearning.avanxa.com/certificates/${inputValue}`;

    // Redirigimos al usuario a la URL construida
    window.location.assign(url);
  };

  // Creamos una función para manejar los cambios en el input
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export {SearchForm};
