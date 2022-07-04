import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Second from './pages/Second';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/second" element={<Second />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
