import React, { useState, useEffect } from 'react';
import { Props, SECURITY_CODE } from './ClassState';

const UseState: React.FC<Props> = (props) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [state, setState] = useState<any>({
    deleted: false,
    confirmed: false
  });

  const onConfirm = () => {
    setError(true);
    setLoading(false);
  };

  const onError = () => {
    setState({ ...state, confirmed: true });
    setLoading(false);
  }

  const onCheck = () => {
    setError(false);
    setLoading(true)
  }

  const onDelete = () => {
    setState({ ...state, deleted: true })
  }

  const onBack = () => {
    setState({
      ...state,
      confirmed: false,
      deleted: false
    });
    setValue('');
  }

  useEffect(() => {
    if (!!loading) {
      setTimeout(() => {
        if (value !== SECURITY_CODE) onConfirm();
        else onError();
      }, 3000);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const onChangeInput = (e: any) => {
    e.preventDefault();
    setValue(e.target.value);
  }

  if (!state.deleted && !state.confirmed) {
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
        <input
          placeholder='Código de seguridad'
          value={value}
          onChange={onChangeInput}
        />
        <button
          onClick={onCheck}
        >
          Comprobar
        </button>
      </div>
    )
  } else if (state.confirmed && !state.deleted) {
    return (
      <>
        <p>Pedimos confirmación. ¿Estas segur@?</p>
        <button
          onClick={onDelete}
        >
          Si, eliminar
        </button>
        <button
          onClick={onBack}
        >
          No, me arrepentí
        </button>
      </>
    )
  } else {
    return (
      <>
        <p>Eliminado con éxito</p>
        <button
          onClick={onBack}
        >
          Volver a inicio
        </button>
      </>
    )
  }
}

export default UseState;
