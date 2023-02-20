import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js';
import Search from './components/Search.js';

function App() {

  const sppontacAuth = "28e7c85c777e479abf6e8145a94ffece"


  return (
    <div className="App">
      <Nav></Nav>
      <Search></Search>
    </div>
  );
}

export default App;
