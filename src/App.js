import logo from './logo.svg';
import monitor from './monitor.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>good lock</h1>
        <img src={monitor} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
