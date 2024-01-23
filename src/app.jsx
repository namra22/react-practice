import React, { useState } from 'react';
import Recipe from './Recipe.jsx'; 
import TeaGathering from './TeaGathering.jsx';
function App() {
  const [count, setCount] = useState(0);
  const [drinkersForTwo, setDrinkersForTwo] = useState(2);
  const [drinkersForGathering, setDrinkersForGathering] = useState(4);
  const increment = () => {
    // State Batching (to avoid unnecessary re-renders and improve performance.)
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      {/* Pure Function Example(This means that React components you write must always return the same JSX given the same inputs) */}
      <section>
      <h1>Spiced Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkProps={drinkersForTwo} />
      <h2>For a gathering</h2>
      <Recipe drinkProps={drinkersForGathering} />
    </section>
     {/* Tea Gathering Component */}
     <TeaGathering />
    </div>
  );
}

export default App;
