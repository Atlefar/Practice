import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [click, setClick] = useState(0);
  const [resetBtn, setResetBtn] = useState(false);
  const [rotate, setRotate] = useState(false);

  const toggleStyle = () => {
    {!rotate ? setRotate(true) : setRotate(false)}
  }

  const handleClick = () => {
    setClick(click + 1);
    setResetBtn(true);
  };

  const resetClick = () => {
    setClick(click == 0);
    setResetBtn(false);
  };

  return (
    <>
      <div className="container">
        <div className="button-container">
          <Button onSelect={handleClick}>Click me!</Button>
          {resetBtn && <Button onSelect={resetClick}>Reset</Button>}
        </div>
          {!click ? null : <p className={rotate ? 'rotate' : undefined}>The button has been clicked {click} {click === 1 ? 'time' : 'times'}</p>}
          {!click ? null : <Button onSelect={toggleStyle}>Do not click me!</Button>}
      </div>
    </>
  )
}

export default App;