import React from 'react';

export interface Props {
  name: string
}

export const SECURITY_CODE: string = 'gribu';

class ClassState extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: '',
      error: false,
      loading: false
    } 
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<any>, snapshot?: any): void {
    if (!!this.state.loading) {
      setTimeout(() => {
        if (this.state.value !== SECURITY_CODE) this.setState({ error: true });
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
        <input
          placeholder='Código de seguridad'
          value={this.state.value}
          onChange={(e) => {
            this.setState({ value: e.target.value })
          }}
        />
        <button
          onClick={() => this.setState(() => ({ loading: true, error: false }))}
        >
          Comprobar
        </button>
      </div>
    )
  }
}

export default ClassState;
