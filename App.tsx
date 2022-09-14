import * as React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const [item, setItem] = useState('');
  const [contadores, setContadores] = useState([]);
  const handleClickBtInserir = () => {
    const contadoresFiltrados = contadores.filter(
      (contador) => contador.props.txt === item
    );
    if (contadoresFiltrados.length === 0) {
      setContadores([...contadores, <Contador key={item} txt={item} />]);
    }
  };

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
      //não precisa mais do if
      //if (contador > 0) {
      setContador(contador - 1);
      //}
    };

    return (
      <div>
        <h3>
          {txt} - {contador}
        </h3>
        <button onClick={handleClickMais}>+</button>
        {/* o botão (-) será desativado quando contador for igual ou menor que 0 */}
        <button onClick={handleClickMenos} disabled={contador <= 0}>
          -
        </button>
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
        <input
          placeholder="Novo item"
          value={item}
          onChange={(evt) => setItem(evt.target.value)}
        />
        <button onClick={handleClickBtInserir}>Inserir na lista</button>
        <hr />
        <Contador txt="Bananas:" />
        <hr />
        <Contador txt="Laranjas:" />
        <hr />
        <Contador txt="Tomates:" />
        <hr />
        <div>{contadores}</div>
        <hr />
      </div>
    </div>
  );
}
