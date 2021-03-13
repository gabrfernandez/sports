import './App.css';
import {Router } from '@reach/router';
import Home from './views/Home';
import Create from './views/Create';
import Detail from './views/Detail';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Create path="/create" />
        <Detail path="/:id" />
        <Edit path="/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
