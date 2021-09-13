import React, { useState } from 'react';

const nameOfApp = `Счетчик \n хорошего \n поведения`



function App() {

  const [likes, setLikes] = useState(1)

  console.log(likes)
  console.log(setLikes)

  function increment() {
    setLikes(likes + 1)

  }

  function decrement() {
    setLikes(likes - 1)

  }
  
  return (
    <div className="App">
      <h3>{nameOfApp}: {likes}</h3>
        
        <div className ='knopki'>
          <button className = 'btn btn-success' onClick={increment}>Increment</button>
          <button className = 'btn btn-danger' onClick={decrement}>Decrement</button>
        </div>
    </div>
    
  );
}

export default App;
