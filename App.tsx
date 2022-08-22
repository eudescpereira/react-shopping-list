import * as React from 'react';
import './style.css';

export default function App() {
  //criando variavel Titulo
  const Titulo = ({ txt }) => {
    return <h3>{txt}</h3>;
  };

  //criando variavel idade
  let idade = 19;

  //criando variavel Contador
  const Contador = ({ txt }) => {
    let [contador, setContador] = React.useState(0);

    //criando função para acrescentar
    const handleClickMais = () => {
      setContador((contadorAtual) => contadorAtual + 1);
    };

    //criando função para diminuir
    const handleClickMenos = () => {
      if (contador > 0) {
        setContador(contador - 1);
      }
    };

    return (
      <div>
        <h1>
          {txt} - {contador}
        </h1>
        <button onClick={handleClickMais}>+</button>
        <button onClick={handleClickMenos}>-</button>
      </div>
    );
  };

  return (
    <div>
      <div className="App">
        <Titulo txt="Nome: Eudes" />
        <Titulo txt={`Idade: ${idade}`} />
        <hr />
        <p> Exemplo dos Contadores:</p>
        <Contador txt="Bananas:" />
        <hr />
        <Contador txt="Laranjas:" />
        <hr />
        <Contador txt="Tomates:" />
        <hr />
      </div>
    </div>
  );
}
