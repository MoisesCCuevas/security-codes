import React, { useReducer, useEffect } from 'react';
import { Props, SECURITY_CODE } from './ClassState';
import { reducer, initialState, ACTIONS } from './reducer';

const UseReducer: React.FC<Props> = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // action creators
  const onConfirm = () => dispatch({ type: ACTIONS.CONFIRM });
  const onError = () => dispatch({ type: ACTIONS.ERROR });
  const onCheck = () => dispatch({ type: ACTIONS.CHECK });
  const onDelete = () => dispatch({ type: ACTIONS.DELETE });
  const onBack = () => dispatch({ type: ACTIONS.BACK });

  const onChangeInput = (e: any) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.CHANGE_INPUT, payload: e.target.value });
  }

  useEffect(() => {
    console.log(state);
    if (!!state.loading) {
      setTimeout(() => {
        if (state.value !== SECURITY_CODE) onConfirm();
        else onError();
      }, 3000);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Eliminar {props.name}</h2>
        <p>Por favor, escribe el código de seguridad</p>
        {state.error && (
          <p>Error: el código es incorrecto</p>
        )}
        {state.loading && (
          <p>Cargando...</p>
        )}
        <input
          placeholder='Código de seguridad'
          value={state.value}
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

export default UseReducer;

