import * as React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const [item, setItem] = useState('');
  const [counters, setCounters] = useState([]);
  const handleClickBtInsert = () => {
    const filteredCounters = counters.filter(
      (counter) => counter.props.txt === item
    );
    if (filteredCounters.length === 0) {
      setCounters([...counters, <Counter key={item} txt={item} />]);
    }
  };

  //creating variable Title
  const Title = ({ txt }) => {
    return <h1>{txt}</h1>;
  };

  //creating variable Counter
  const Counter = ({ txt }) => {
    let [counter, setCounter] = React.useState(0);

    //creating function to increase
    const handleClickMore = () => {
      setCounter((currentCounter) => currentCounter + 1);
    };

    //creating function to decrease
    const handleClickLess = () => {
      //it doesnt need 'if'
      //if (counter > 0) {
      setCounter(counter - 1);
    };

    return (
      <div>
        <h3>
          {txt}: {counter}
        </h3>
        <button onClick={handleClickMore}>+</button>
        <button onClick={handleClickLess} disabled={counter <= 0}>-</button>
         {/* button (-) will be deactvated when Counter <= 0 */}
        <hr />
      </div>
    );
  };

  return (
    <div>
      <div className="App">
      <Title txt="Shopping List" />
        <input
          placeholder="New item"
          value={item}
          onChange={(evt) => setItem(evt.target.value)}
        />
        <button onClick={handleClickBtInsert}>Insert on the list</button>
        <Counter txt="Bananas" />
        <Counter txt="Oranges" />
        <Counter txt="Blueberries" />
        <div>{counters}
        </div>
      </div>
    </div>
  );
}
