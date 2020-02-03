import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState("Learn hooks");

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Btw you clicked {count} times.
        </p>
        <ul>
          <li>{todo}</li>
        </ul>
		<button onClick={() => {setCount(count + 1); setTodo(count < 5 ? "Learning hooks in progress" : "Learning hooks even more")}}>
			Click me
		</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
