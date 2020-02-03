import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState("Learn hooks");
  const [countries, setCountries] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    if(countries != 0 && countries != null && count <= 1){
      var ul = document.getElementById("done");
      var li = document.createElement("li");
      li.appendChild(document.createTextNode("Fetched " + countries.length + " countries."));
      ul.appendChild(li);
    }
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
        <ul id="done">
        </ul>
		<button onClick={() => {setCount(count + 1); setTodo(count < 5 ? "Learning hooks in progress" : "Learning hooks even more"); GetCountries()}}>
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

  function GetCountries(){
    if(!countries)
    {
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then((data) => {
        setCountries(data)
      })
    }
  }
}
export default App;
