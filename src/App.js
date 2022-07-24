import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => setCount(count + 1);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  })
  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={updateCount}>Click Me</button>
      <h1>Scatterplot Using D3 & React</h1>
    </div>
  )
}

export default App;