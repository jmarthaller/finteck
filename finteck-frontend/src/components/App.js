// import logo from './logo.svg';
// import './App.css';
import Header from "./Header";
import BeachesContainer from "./BeachesContainer";
import Search from "./Search";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      <Header />
      <UserProfile />
      <BeachesContainer />
      <Search />
    </div>
  );
}

export default App;
