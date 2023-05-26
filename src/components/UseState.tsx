import React, { useState, useEffect } from 'react';
import { Props } from './ClassState';

const UseState: React.FC<Props> = (props) => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!!loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [loading]);

  return (
    <div>
      <h2>Eliminar {props.name}</h2>
      <p>Por favor, escribe el código de seguridad</p>
      {error && (
        <p>Error: el código es incorrecto</p>
      )}
      {loading && (
        <p>Cargando...</p>
      )}
      <input placeholder='Código de seguridad' />
      <button
        onClick={() => setLoading(true)}
      >
        Comprobar
      </button>
    </div>
  )
}

export default UseState;
