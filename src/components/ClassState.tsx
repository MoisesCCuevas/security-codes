import React from 'react';

export interface Props {
  name: string
}

class ClassState extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = {
      error: false,
      loading: false
    } 
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<any>, snapshot?: any): void {
    if (!!this.state.loading) {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 3000);
    }
  }
  
  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Por favor, escribe el código de seguridad</p>
        {this.state.error && (
          <p>Error: el código es incorrecto</p>
        )}
        {this.state.loading && (
          <p>Cargando...</p>
        )}
        <input placeholder='Código de seguridad' />
        <button
          onClick={() => this.setState(() => ({ loading: true }))}
        >
          Comprobar
        </button>
      </div>
    )
  }
}

export default ClassState;
