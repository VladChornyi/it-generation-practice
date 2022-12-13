import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {isOpen && (
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          )}

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </header>
      </div>
    </>
  );
}

export default App;
