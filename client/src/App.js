import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/"> Home </Link>
          <Link to="/otherpage">Other Page</Link> 
        </header>
        <div>
          <Routes>
            <Route path="/" element={<Fib/>}/>
            <Route path="/otherpage" element={<OtherPage/>}/>
          </Routes>
        </div>
      </div>/
    </Router>
  );
}

export default App;
