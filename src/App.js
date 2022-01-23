import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


import './App.css';
import IBharatPage from './pages/i_bharat_page.js'
import initiaves_page from './pages/initiaves_page.js'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/IBharatPage" component={IBharatPage} ></Route>
        <Route path="/initiaves_page" component={initiaves_page} ></Route>
      </div>
    </Router>
  );
}

export default App; 
